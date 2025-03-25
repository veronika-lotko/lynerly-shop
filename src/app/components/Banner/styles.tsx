import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid red;
`;

export const BannerTitle = styled.h1`
  font-size: 2rem;
  color: var(---foreground);
  margin-bottom: 1rem;
`;

export const ImageContainer = styled.div`
  display: flex;

  img {
    width: 100%;
    /* max-width: 400px; */
    height: auto;
    margin-bottom: 1rem;
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

// export const BannerImage = styled.img`
//   width: 100%;
//   max-width: 400px;
//   height: auto;
//   margin-bottom: 1rem;
//   .banner-image-second {
//     position: absolute;
//     transform: scaleX(-1);
//   }
// `;
