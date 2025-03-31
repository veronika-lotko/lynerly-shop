"use client";
import React, { FC } from "react";
import Image from "next/image";
import { BannerContainer, BannerTitle, ImageContainer, Description, MainButton } from "./styles";

const Banner: FC = () => {
  return (
    <BannerContainer>
      <Image src="/img/logo.png" alt="Lynerly Shop" width={250} height={50} />
      <BannerTitle>СТЯЖНЫЕ РЕМНИ</BannerTitle>
      <ImageContainer>
        <Image src="/img/banner-item.png" alt="Lynerly Shop" className="banner-item-first" width={500} height={300} />
        <Image src="/img/banner-item.png" alt="Lynerly Shop" className="banner-item-second" width={500} height={300} />
      </ImageContainer>
      <Description>ДЛЯ ЧЕМОДАНОВ, СУМОК, РЮКЗАКОВ И НЕ ТОЛЬКО</Description>
      <MainButton>СМОТРЕТЬ ПРЕДЛОЖЕНИЯ</MainButton>
    </BannerContainer>
  );
};

export default Banner;
