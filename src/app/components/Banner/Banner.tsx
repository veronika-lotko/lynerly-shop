"use client";
import React, { FC } from "react";
import Image from "next/image";
import { BannerContainer, BannerTitle, ImageContainer } from "./styles";

const Banner: FC = () => {
  return (
    <BannerContainer>
      <BannerTitle>СТЯЖНЫЕ РЕМНИ</BannerTitle>
      <ImageContainer>
        <Image src="/img/banner-item.png" alt="Lynerly Shop" className="banner-item-first" width={500} height={300} />
        <Image src="/img/banner-item.png" alt="Lynerly Shop" className="banner-item-second" width={500} height={300} />
      </ImageContainer>
      <p>This is Banner component</p>
    </BannerContainer>
  );
};

export default Banner;
