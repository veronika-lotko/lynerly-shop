import React, { FC, useState } from "react";
import { ReviewsWrapper, ImgWrapper, ModalWrapper, SliderWrapper } from "./styles";
import Image from "next/image";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageSources = Array.from({ length: 6 }, (_, i) => `/img/reviews/Screenshot_${i + 1}.png`);

const Reviews: FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const isMobileOrTablet = useMediaQuery({ maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 450 });

  const openModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ReviewsWrapper className="reviews">
      <hr />
      <h1>ОТЗЫВЫ</h1>

      {isMobileOrTablet ? (
        <SliderWrapper>
          <Slider {...sliderSettings}>
            {imageSources.map((src, index) => (
              <div key={index} onClick={() => openModal(src)}>
                <Image
                  alt={`review-${index + 1}`}
                  src={src}
                  width={isMobile ? 310 : 450}
                  height={isMobile ? 90 : 120}
                />
              </div>
            ))}
          </Slider>
        </SliderWrapper>
      ) : (
        <>
          <ImgWrapper>
            {imageSources.map((src, index) => (
              <div key={index} onClick={() => openModal(src)}>
                <Image alt={`review-${index + 1}`} src={src} width={430} height={115} />
              </div>
            ))}
          </ImgWrapper>
          {selectedImage && (
            <ModalWrapper onClick={closeModal}>
              <div>
                <Image alt="full-size-review" src={selectedImage} width={860} height={230} layout="intrinsic" />
              </div>
            </ModalWrapper>
          )}
        </>
      )}

      <hr />
    </ReviewsWrapper>
  );
};

export default Reviews;
