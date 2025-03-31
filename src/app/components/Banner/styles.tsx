import { mquery } from "@/constants/breakpoints";
import styled from "styled-components";

export const BannerContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const BannerTitle = styled.h1`
  font-size: var(--font-size-title-sm);
  font-family: var(--font);
  color: var(---foreground);
  padding: 10px;
  top: 100px;
  position: absolute;
  z-index: 1;
  ${mquery.laptop} {
    font-size: var(--font-size-title-lg);
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  opacity: 0.6;

  img {
    width: 100%;
    height: auto;
  }
  .banner-item-first,
  .banner-item-second {
    max-width: 350px;
  }
  .banner-item-second {
    position: absolute;
    transform: scaleX(-1);
  }
`;

export const Description = styled.p`
  padding: 20px;
  position: absolute;
  font-size: var(--font-size-standard-md);
  top: 200px;
  max-width: 350px;
`;

export const MainButton = styled.button`
  padding: 10px 20px;
  width: 300px;
  background-color: var(--green);
  color: var(--foreground);
  border-radius: 50px;
  border: 2px solid var(--foreground);
  font-size: var(--font-size-standard-sm);
  font-weight: bold;
  cursor: pointer;
  top: 400px;
  transition: all 0.3s;
  position: absolute;
  &:hover {
    background-color: var(--foreground);
    color: var(--green);
  }
`;
