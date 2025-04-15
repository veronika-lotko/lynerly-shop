import React, { FC } from "react";
import styled, { keyframes } from "styled-components";

interface ButtonProps {
  market: string;
  children?: React.ReactNode;
}

// Анимация появления — лёгкий подъём и пульсация
const popIn = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledButton = styled.button<ButtonProps>`
  width: 100px;
  height: 50px;
  border: 1px solid var(--background);
  border-radius: 50px;
  z-index: 100;
  background: ${(props) => (props.market === "ozon" ? "var(--ozoncolor)" : "var(--wbcolor-gr)")};
  transition: color 0.2s ease-in-out, background 0.3s ease-in-out, transform 0.2s ease-in-out;
  cursor: pointer;
  padding: 0;
  animation: ${popIn} infinite 1.6s ease-out;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    text-decoration: none;
    color: var(--foreground);
    width: 100%;
    height: 100%;
  }

  &:hover {
    background: var(--foreground);
    transform: translateY(-3px);

    a {
      color: ${(props) => (props.market === "ozon" ? "var(--ozoncolor)" : "var(--wbcolor)")};
    }
  }
`;

const MarketButton: FC<ButtonProps> = ({ market, children }) => {
  return <StyledButton market={market}>{children}</StyledButton>;
};

export default MarketButton;
