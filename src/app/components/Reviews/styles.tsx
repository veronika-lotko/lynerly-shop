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

  .slick-prev,
  .slick-next {
    z-index: 3;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex !important;
    align-items: center;
    justify-content: center;
    color: white;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 60px;
    color: white;
  }
  .slick-prev {
    left: 15px;
  }
  .slick-next {
    right: 15px;
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
`;
