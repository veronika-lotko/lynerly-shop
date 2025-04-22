import { mquery } from "@/constants/breakpoints";
import styled from "styled-components";

export const ReviewsWrapper = styled.div`
  margin: 30px 0;

  hr {
    background-color: var(--green);
    height: 2px;
    border: none;
    margin: 30px auto;
    width: 60%;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 1060px;
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  div {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
      border-radius: 20px;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.025);
    }
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  &:hover {
    cursor: pointer;
  }

  img {
    border-radius: 20px;
  }
`;

export const SliderWrapper = styled.div`
  margin: 20px auto;
  .slick-slide div {
    display: flex !important;
    justify-content: center;
    align-items: center;
    cursor: auto;
  }
  .slick-prev,
  .slick-next {
    z-index: 3;
    width: 70px;
    height: 140px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 60px;
    color: var(--green);
    opacity: 0.4;
    &::hover {
      opacity: 0.9;
    }
  }
  .slick-prev {
    left: 0;
    ${mquery.small} {
      left: 15px;
    }
  }
  .slick-next {
    right: 0;
    ${mquery.small} {
      right: 15px;
    }
  }
  .slick-dots {
    button::before {
      color: var(--foreground);
    }
    .slick-active {
      button::before {
        color: var(--foreground);
      }
    }
  }

  img {
    border-radius: 20px;
  }
`;
