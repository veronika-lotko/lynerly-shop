import { mquery } from "@/constants/breakpoints";
import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  scroll-behavior: auto;

  ${mquery.tablet} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0 40px;
    gap: 20px;
    width: 100%;
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
  margin: 10px;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
`;
