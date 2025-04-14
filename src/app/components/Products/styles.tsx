import { mquery } from "@/constants/breakpoints";
import styled from "styled-components";

export const ProductsContainer = styled.div`
  .slick-track {
    margin-top: 20px;
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
  .slick-slide {
    transform: scale(0.85);
    opacity: 0.4;
    transition: all 0.3s ease;
    z-index: 1;
    filter: blur(2px);
    pointer-events: none;
  }

  .slick-center {
    /* transform: scale(1.4); */
    opacity: 1;
    z-index: 1;
    filter: none;
    pointer-events: all;

    .arrow {
      width: 400px;
    }
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
    font-size: 50px;
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

  /* .button-container {
    margin: auto;
    display: flex;
  } */
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 420px;
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
  gap: 10px;
  margin-top: 10px;
  width: 100%;
`;

export const MainButton = styled.button`
  padding: 10px 20px;
  background-color: var(--green);
  color: var(--foreground);
  border-radius: 50px;
  border: 2px solid var(--foreground);
  font-size: var(--font-size-standard-sm);
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  margin: 20px auto;
  align-items: center;
  text-transform: uppercase;
  text-align: center;

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
