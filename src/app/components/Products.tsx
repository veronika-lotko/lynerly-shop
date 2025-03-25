"use client";
import React, { FC, useEffect, useState } from "react";
import { fetchWBData } from "../../lib/wbApi";
// import { fetchOzonData } from "../../lib/ozonApi";

const Products: FC = () => {
  const [wbData, setWbData] = useState(null);
  //   const [ozonData, setOzonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const wbResponse = await fetchWBData();
      //   const ozonResponse = await fetchOzonData();
      setWbData(wbResponse);
      console.log("DATAAAAA", wbResponse);
      //   setOzonData(ozonResponse);
    };

    fetchData();
  }, []);

  return (
    <div className="products">
      <h1>Welcome to Lynerly Shop!</h1>
      <p>Your one-stop shop for all your needs.</p>
      <p>WB Data: {wbData ? JSON.stringify(wbData) : "Loading..."}</p>
      {/* <p>Ozon Data: {ozonData ? JSON.stringify(ozonData) : "Loading..."}</p> */}
    </div>
  );
};

export default Products;
