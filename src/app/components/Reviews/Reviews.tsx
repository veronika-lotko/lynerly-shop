import React, { FC, useState } from "react";
import { ReviewsWrapper, ImgWrapper, ModalWrapper } from "./styles";
import Image from "next/image";
// import { useMediaQuery } from "react-responsive";
// import Slider from "react-slick";

const imageSources = Array.from({ length: 6 }, (_, i) => `/img/reviews/Screenshot_${i + 1}.png`);

const Reviews: FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  // const isTablet = useMediaQuery({ maxWidth: 920 });

  const openModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <ReviewsWrapper className="reviews">
      <hr />
      <h1>ОТЗЫВЫ</h1>

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

      <hr />
    </ReviewsWrapper>
  );
};

export default Reviews;
