import { mquery } from "@/constants/breakpoints";
import styled from "styled-components";

export const BannerContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  max-width: 1200px;

  ${mquery.tablet} {
    padding: 45px 20px;
    margin: auto;
  }
`;

export const LogoContainer = styled.div`
  ${mquery.tablet} {
    display: flex;
    align-self: flex-start;
    position: absolute;
    top: 140px;
  }

  ${mquery.laptop} {
    top: 150px;
  }
`;

export const BannerTitle = styled.h1`
  font-size: var(--font-size-title-sm);
  font-family: var(--font);
  color: var(--foreground);
  padding: 10px;
  top: 100px;
  position: absolute;
  z-index: 1;
  ${mquery.tablet} {
    font-size: var(--font-size-title-md);
    display: flex;
    align-self: flex-start;
    padding: 0;
    top: 210px;
  }
  ${mquery.laptop} {
    font-size: var(--font-size-title-lg);
    top: 200px;
  }
`;

export const Description = styled.p`
  padding: 20px;
  position: absolute;
  font-size: var(--font-size-standard-md);
  top: 200px;
  max-width: 350px;
  ${mquery.tablet} {
    font-size: var(--font-size-standard-md);
    max-width: 500px;
    display: flex;
    align-self: flex-start;
    padding: 0;
    top: 300px;
    text-align: start;
  }
  ${mquery.laptop} {
    font-size: var(--font-size-standard-lg);
    max-width: 850px;
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
  ${mquery.tablet} {
    display: flex;
    align-items: end;
    align-self: flex-end;
    .banner-item-first,
    .banner-item-second {
      max-width: 450px;
      height: 580px;
    }
  }

  ${mquery.laptop} {
    .banner-item-first,
    .banner-item-second {
      max-width: 550px;
      height: 680px;
    }
  }
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
  ${mquery.tablet} {
    display: flex;
    align-self: flex-start;
    font-size: var(--font-size-standard-md);
  }

  ${mquery.laptop} {
    top: 440px;
  }
`;
