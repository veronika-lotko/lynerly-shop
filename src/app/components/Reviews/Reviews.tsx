import React, { FC } from "react";
import { ReviewsWrapper } from "./styles";

const Reviews: FC = () => {
  return (
    <ReviewsWrapper className="reviews">
      <hr />
      <h1>ОТЗЫВЫ</h1>
      <p>Местечко для отзывов...</p>
      <hr />
    </ReviewsWrapper>
  );
};

export default Reviews;
