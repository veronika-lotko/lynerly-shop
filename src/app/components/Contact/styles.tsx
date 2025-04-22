import styled from "styled-components";
import { jump, shine } from "@/animations/animations";

export const ContactWrapper = styled.div`
  p {
    margin: 20px;
    font-size: 10px;
    opacity: 0.7;

    a {
      color: var(--wbcolor);
    }
  }
`;

export const StyledLogo = styled.a`
  img {
    margin: 20px 0;
    transition: transform 0.4s ease-in-out;
    animation: ${jump} 0.8s infinite ease-in-out;

    &:hover {
      transform: scale(1.1);
      animation: ${shine} 0.8s linear, ${jump} 1.2s infinite ease-in-out;
    }
  }
`;
