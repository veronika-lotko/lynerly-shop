"use client";
import React, { FC, useEffect, useState } from "react";
import Slider from "react-slick";
import { fetchOzonData } from "../../../lib/ozonApi";
import { fetchWBData } from "@/lib/wbApi";
import { ProductsContainer, ProductCard, LinkContainer, MainButton, Supplies } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import MarketButton from "./MarketButton";
import SkeletonCard from "./SkeletonCard";

interface Product {
  id: number;
  primary_image: string;
  offer_id: string;
  wbid?: number;
}
const Products: FC = () => {
  const [ozonData, setOzonData] = useState<Product[]>([]);
  const [initialWBData, setInitialWBData] = useState<{ wbid: number; vendorCode: string }[]>([]);
  const [initialProducts, setInitialProducts] = useState<Product[]>([]);
  const [additionalProducts, setAdditionalProducts] = useState<Product[]>([]);
  const [cursor, setCursor] = useState<{ updatedAt?: string; nmID?: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({});
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isSmall = useMediaQuery({ maxWidth: 768, minWidth: 640 });
  const isTablet = useMediaQuery({ maxWidth: 1068, minWidth: 768 });

  const allProducts = [...initialProducts, ...additionalProducts];

  const handleSlideChange = (currentIndex: number) => {
    const preloadOffset = 4;

    if (isMobile && hasMore && currentIndex + preloadOffset >= allProducts.length) {
      loadMore();
    }
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    afterChange: handleSlideChange,
  };

  useEffect(() => {
    const fetchOzon = async () => {
      const ozonResponse = await fetchOzonData();
      setOzonData(ozonResponse);
    };
    fetchOzon();
  }, []);

  useEffect(() => {
    const fetchWB = async () => {
      setLoading(true);
      const { products, cursor: newCursor } = await fetchWBData();
      setInitialWBData(products);
      setCursor(newCursor);
      setLoading(false);
    };
    fetchWB();
  }, []);

  useEffect(() => {
    if (!ozonData.length || !initialWBData.length) return;

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

    if (products.length < 16) setHasMore(false);

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

  const skeletonLength = () => {
    if (isMobile) return 1;
    if (isSmall) return 2;
    if (isTablet) return 3;
    return 4;
  };

  const handleImageLoad = (id: number) => {
    setImageLoaded((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="products" id="products">
      {ozonData.length && initialWBData.length ? (
        <>
          <ProductsContainer>
            {isMobile ? (
              <Slider {...sliderSettings}>
                {allProducts.map(({ id, primary_image, wbid }) => (
                  <div key={`product-${id}`}>
                    <ProductCard>
                      {!imageLoaded[id] && <SkeletonCard />}
                      <img
                        src={primary_image}
                        alt={`Product ${id}`}
                        width="250"
                        style={{ display: imageLoaded[id] ? "block" : "none" }}
                        onLoad={() => handleImageLoad(id)}
                      />
                      <p>ЗАКАЗАТЬ</p>
                      <LinkContainer>
                        <MarketButton market="ozon" border="visible">
                          <a href={`https://www.ozon.ru/product/${id}`} target="_blank" rel="noopener noreferrer">
                            OZON
                          </a>
                        </MarketButton>
                        <MarketButton market="wb" border="visible">
                          <a
                            href={`https://www.wildberries.ru/catalog/${wbid}/detail.aspx`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            WB
                          </a>
                        </MarketButton>
                      </LinkContainer>
                    </ProductCard>
                  </div>
                ))}
              </Slider>
            ) : (
              allProducts.map(({ id, primary_image, wbid }) => (
                <ProductCard key={`product-${id}`}>
                  {!imageLoaded[id] && <SkeletonCard />}
                  <img
                    src={primary_image}
                    alt={`Product ${id}`}
                    width="250"
                    style={{ display: imageLoaded[id] ? "block" : "none" }}
                    onLoad={() => handleImageLoad(id)}
                  />
                  <p>ЗАКАЗАТЬ</p>
                  <LinkContainer>
                    <MarketButton market="ozon" border="visible">
                      <a href={`https://www.ozon.ru/product/${id}`} target="_blank" rel="noopener noreferrer">
                        OZON
                      </a>
                    </MarketButton>
                    <MarketButton market="wb" border="visible">
                      <a
                        href={`https://www.wildberries.ru/catalog/${wbid}/detail.aspx`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WB
                      </a>
                    </MarketButton>
                  </LinkContainer>
                </ProductCard>
              ))
            )}
          </ProductsContainer>
          <div className="button-container">
            {hasMore && !isMobile && (
              <MainButton onClick={loadMore} disabled={loading}>
                {loading ? "Загрузка..." : "Показать больше"}
              </MainButton>
            )}
          </div>
        </>
      ) : (
        <ProductsContainer>
          {Array.from({ length: skeletonLength() }).map((_, i) => (
            <SkeletonCard key={`skeleton-${i}`} />
          ))}
        </ProductsContainer>
      )}
      <Supplies className="buttons-section">
        <p>
          СПИСОК ВСЕХ ТОВАРОВ ДОСТУПЕН НА <span className="wb">WILDBERRIES</span> И <span className="ozon">OZON</span>
        </p>
        <div className="button-container">
          <MarketButton market="wb" size="lg">
            <a href="https://www.wildberries.ru/brands/lynerly" target="_blank" rel="noopener noreferrer">
              WB
            </a>
          </MarketButton>
          <MarketButton market="ozon" size="lg">
            <a
              href="https://www.ozon.ru/seller/lynerly-297592/products/?miniapp=seller_297592"
              target="_blank"
              rel="noopener noreferrer"
            >
              OZON
            </a>
          </MarketButton>
        </div>
      </Supplies>
    </div>
  );
};

export default Products;
