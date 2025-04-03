"use client";
import React, { FC, useEffect, useState } from "react";
import { fetchOzonData } from "../../../lib/ozonApi";
import { fetchWBData } from "@/lib/wbApi";

const Products: FC = () => {
  const [ozonData, setOzonData] = useState<
    { id: number; primary_image: string; offer_id: string; wbid?: number; vendorCode: string }[]
  >([]);
  const [wbData, setWbData] = useState<{ wbid: number; vendorCode: string }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const ozonResponse = await fetchOzonData();
      setOzonData(ozonResponse);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const wbResponse = await fetchWBData();
      setWbData(wbResponse);
    };

    fetchData();
  }, []);

  const matchedProducts = ozonData.map((ozonItem) => {
    const wbMatch = wbData.find((wbItem) => wbItem.vendorCode === ozonItem.offer_id);
    return { ...ozonItem, wbid: wbMatch?.wbid };
  });

  return (
    <div className="products">
      <h1>Ozon Products</h1>
      {ozonData.length > 0 ? (
        <ul>
          {matchedProducts.map(({ id, primary_image, offer_id, wbid }) => (
            <li key={id} style={{ marginBottom: "20px" }}>
              <div>{offer_id}</div>
              <img src={primary_image} alt={`Product ${id}`} width="150" />
              <br />

              <a href={`https://www.ozon.ru/product/${id}`} target="_blank" rel="noopener noreferrer">
                Ozon: https://www.ozon.ru/product/{id}
              </a>
              {wbid && (
                <>
                  <br />
                  <a href={`https://www.wildberries.ru/catalog/${wbid}`} target="_blank" rel="noopener noreferrer">
                    WB: https://www.wildberries.ru/catalog/{wbid}
                  </a>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Products;
