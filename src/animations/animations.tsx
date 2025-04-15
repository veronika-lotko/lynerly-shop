import { keyframes } from "styled-components";

export const jump = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
`;

export const shine = keyframes`
  0% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.2);
  }
  100% {
    filter: brightness(1);
  }
  `;
