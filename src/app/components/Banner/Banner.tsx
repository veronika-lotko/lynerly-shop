"use client";
import React, { FC, useState, useEffect } from "react";
import Image from "next/image";
import { BannerContainer, BannerTitle, ImageContainer, Description, LogoContainer, MainButton } from "./styles";

interface BannerProps {
  onLoaded: () => void;
}

const Banner: FC<BannerProps> = ({ onLoaded }) => {
  const [imagesLoaded, setImagesLoaded] = useState({
    logo: false,
    firstItem: false,
    secondItem: false,
  });

  useEffect(() => {
    const allLoaded = Object.values(imagesLoaded).every(Boolean);
    if (allLoaded) {
      onLoaded();
    }
  }, [imagesLoaded, onLoaded]);

  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <BannerContainer>
      <LogoContainer>
        <Image
          src="/img/logo.png"
          alt="Lynerly Shop"
          width={250}
          height={50}
          className="logo"
          onLoad={() => setImagesLoaded((prev) => ({ ...prev, logo: true }))}
        />
      </LogoContainer>
      <BannerTitle>СТЯЖНЫЕ РЕМНИ</BannerTitle>
      <ImageContainer>
        <Image
          src="/img/banner-item.png"
          alt="Lynerly Shop"
          className="banner-item-first"
          width={600}
          height={400}
          onLoad={() => setImagesLoaded((prev) => ({ ...prev, firstItem: true }))}
        />
        <Image
          src="/img/banner-item.png"
          alt="Lynerly Shop"
          className="banner-item-second"
          width={600}
          height={400}
          onLoad={() => setImagesLoaded((prev) => ({ ...prev, secondItem: true }))}
        />
      </ImageContainer>
      <Description>ДЛЯ ЧЕМОДАНОВ, СУМОК, РЮКЗАКОВ И НЕ ТОЛЬКО</Description>
      <MainButton onClick={scrollToProducts}>СМОТРЕТЬ ПРЕДЛОЖЕНИЯ</MainButton>
    </BannerContainer>
  );
};

export default Banner;
