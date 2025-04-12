"use client";
import React, { FC } from "react";
import Image from "next/image";
import { BannerContainer, BannerTitle, ImageContainer, Description, LogoContainer, MainButton } from "./styles";

const Banner: FC = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <BannerContainer>
      <LogoContainer>
        <Image src="/img/logo.png" alt="Lynerly Shop" width={250} height={50} className="logo" />
      </LogoContainer>
      <BannerTitle>СТЯЖНЫЕ РЕМНИ</BannerTitle>
      <ImageContainer>
        <Image src="/img/banner-item.png" alt="Lynerly Shop" className="banner-item-first" width={600} height={400} />
        <Image src="/img/banner-item.png" alt="Lynerly Shop" className="banner-item-second" width={600} height={400} />
      </ImageContainer>
      <Description>ДЛЯ ЧЕМОДАНОВ, СУМОК, РЮКЗАКОВ И НЕ ТОЛЬКО</Description>
      <MainButton onClick={scrollToProducts}>СМОТРЕТЬ ПРЕДЛОЖЕНИЯ</MainButton>
    </BannerContainer>
  );
};

export default Banner;
