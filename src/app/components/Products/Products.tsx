"use client";
import React, { FC, useEffect, useState } from "react";
import Slider from "react-slick";
import { fetchOzonData } from "../../../lib/ozonApi";
import { fetchWBData } from "@/lib/wbApi";
import { ProductsContainer, ProductCard, LinkContainer, MainButton } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";

interface Product {
  id: number;
  primary_image: string;
  offer_id: string;
  wbid?: number;
}

const MAX_PRODUCTS = 100;

const Products: FC = () => {
  const [ozonData, setOzonData] = useState<Product[]>([]);
  const [initialWBData, setInitialWBData] = useState<{ wbid: number; vendorCode: string }[]>([]);
  const [initialProducts, setInitialProducts] = useState<Product[]>([]);
  const [additionalProducts, setAdditionalProducts] = useState<Product[]>([]);
  const [cursor, setCursor] = useState<{ updatedAt?: string; nmID?: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const allProducts = [...initialProducts, ...additionalProducts];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    afterChange: handleSlideChange,
  };

  function handleSlideChange(currentIndex: number) {
    const preloadOffset = 4;
    if (hasMore && currentIndex + preloadOffset >= allProducts.length && allProducts.length < MAX_PRODUCTS) {
      loadMore();
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const ozonResponse = await fetchOzonData();
      setOzonData(ozonResponse);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { products, cursor: newCursor } = await fetchWBData();
      setInitialWBData(products);
      setCursor(newCursor);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (ozonData.length === 0 || initialWBData.length === 0) return;

    const wbMap = new Map(initialWBData.map((item) => [item.vendorCode, item.wbid]));
    const matched = ozonData
      .filter((ozonItem) => wbMap.has(ozonItem.offer_id))
      .map((ozonItem) => ({
        ...ozonItem,
        wbid: wbMap.get(ozonItem.offer_id),
      }));

    setInitialProducts(matched);
  }, [ozonData, initialWBData]);

  const loadMore = async () => {
    if (!cursor || !hasMore) return;

    setLoading(true);
    const { products, cursor: newCursor } = await fetchWBData(cursor);

    if (products.length < 32) {
      setHasMore(false);
    }

    const wbMap = new Map(products.map((item) => [item.vendorCode, item.wbid]));
    const newMatched = ozonData
      .filter((ozonItem) => wbMap.has(ozonItem.offer_id))
      .map((ozonItem) => ({
        ...ozonItem,
        wbid: wbMap.get(ozonItem.offer_id),
      }));

    const uniqueNew = newMatched.filter((newItem) => !initialProducts.some((item) => item.id === newItem.id));

    setAdditionalProducts((prev) => [...prev, ...uniqueNew]);
    setCursor(newCursor);
    setLoading(false);
  };

  return (
    <div className="products" id="products">
      {ozonData.length > 0 ? (
        <ProductsContainer>
          {isMobile ? (
            <Slider {...sliderSettings}>
              {allProducts.map(({ id, primary_image, wbid }) => (
                <div key={`product-${id}`}>
                  <ProductCard>
                    <img src={primary_image} alt={`Product ${id}`} width="250" />
                    <LinkContainer>
                      <a href={`https://www.ozon.ru/product/${id}`} target="_blank" rel="noopener noreferrer">
                        OZON LINK
                      </a>
                      <a
                        href={`https://www.wildberries.ru/catalog/${wbid}/detail.aspx`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WB LINK
                      </a>
                    </LinkContainer>
                  </ProductCard>
                </div>
              ))}
            </Slider>
          ) : (
            allProducts.map(({ id, primary_image, wbid }) => (
              <ProductCard key={`product-${id}`}>
                <img src={primary_image} alt={`Product ${id}`} width="250" />
                <LinkContainer>
                  <a href={`https://www.ozon.ru/product/${id}`} target="_blank" rel="noopener noreferrer">
                    OZON LINK
                  </a>
                  <a
                    href={`https://www.wildberries.ru/catalog/${wbid}/detail.aspx`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WB LINK
                  </a>
                </LinkContainer>
              </ProductCard>
            ))
          )}
        </ProductsContainer>
      ) : null}

      {hasMore && !isMobile && (
        <MainButton onClick={loadMore} disabled={loading}>
          {loading ? "Загрузка..." : "Показать больше"}
        </MainButton>
      )}
    </div>
  );
};

export default Products;
