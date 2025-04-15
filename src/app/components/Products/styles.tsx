import { mquery } from "@/constants/breakpoints";
import styled from "styled-components";

export const ProductsContainer = styled.div`
  .slick-track {
    margin-top: 50px;

    ${mquery.mobile} {
      margin-top: 20px;
    }
  }
  .slick-list {
    align-items: center;
  }
  .slick-slider {
    overflow: hidden;
  }

  .slick-slide > div {
    display: flex;
    justify-content: center;
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

  ${mquery.small} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 0 20px;
  }

  ${mquery.tablet} {
    max-width: 1280px;
    margin: auto;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  ${mquery.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 425px;
  margin: 10px auto;
  background-color: var(--foreground);
  border-radius: 20px;

  p {
    margin-top: 10px;
    color: var(--background);
  }
  img {
    margin-top: 15px;
    width: 90%;
    height: auto;
    object-fit: contain;
    border-radius: 12px;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 8px;
  width: 100%;
`;

export const MainButton = styled.button`
  padding: 10px 20px;
  background-color: var(--green);
  color: var(--foreground);
  border-radius: 50px;
  border: 1px solid var(--foreground);
  font-size: var(--font-size-standard-sm);
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  margin: 30px auto;
  align-items: center;
  text-transform: uppercase;
  text-align: center;
  height: 60px;

  &:hover {
    background-color: var(--foreground);
    color: var(--green);
  }

  ${mquery.tablet} {
    font-size: var(--font-size-standard-md);
  }

  ${mquery.laptop} {
    top: 440px;
  }
`;

export const Supplies = styled.div`
  margin: 30px auto;
  max-width: 920px;
  padding: 20px;
  p {
    font-size: var(--font-size-standard-md);

    .wb {
      color: var(--wbcolor);
    }

    .ozon {
      color: var(--ozoncolor);
    }
  }

  .button-container {
    display: flex;
    /* justify-content: space-evenly; */
    margin: 20px auto;
    justify-content: center;
    gap: 20px;
  }
`;
