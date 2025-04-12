import { mquery } from "@/constants/breakpoints";
import styled from "styled-components";

export const ProductsContainer = styled.div`
  .slick-slider {
    width: 100%;
    overflow: hidden;
  }

  .slick-slide > div {
    display: flex;
    justify-content: center;
  }

  ${mquery.tablet} {
    .slick-slider {
      display: none; // скрываем слайдер на таблетах
    }

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 0 20px;
  }

  ${mquery.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  margin: 10px auto;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 12px;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 10px;
  width: 100%;
  max-width: 250px;

  a {
    font-weight: bold;
    text-decoration: none;
    color: var(--foreground);
    transition: color 0.2s ease-in-out;

    &:hover {
      color: var(--green);
    }
  }
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
