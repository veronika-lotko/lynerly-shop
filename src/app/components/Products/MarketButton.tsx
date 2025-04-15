import React, { FC } from "react";
import styled, { keyframes } from "styled-components";

interface ButtonProps {
  market: string;
  children?: React.ReactNode;
}

const pulse = keyframes`
  0% {
    transform: scale(0.95);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.95);
  }
`;

const StyledButton = styled.button<ButtonProps>`
  width: 100px;
  height: 50px;
  border: 1px solid var(--foreground);
  border-radius: 50px;
  z-index: 100;
  background: ${(props) => (props.market === "ozon" ? "var(--ozoncolor)" : "var(--wbcolor)")};
  transition: color 0.2s ease-in-out, background 0.3s ease-in-out, transform 0.2s ease-in-out;
  cursor: pointer;
  padding: 0;
  animation: ${pulse} infinite 2s ease-out;
  box-shadow: 1px 3px 1px rgba(0, 0, 0, 0.5);
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
    border: ${(props) => (props.market === "ozon" ? "2px solid var(--ozoncolor)" : "2px solid var(--wbcolor)")};

    a {
      color: ${(props) => (props.market === "ozon" ? "var(--ozoncolor)" : "var(--wbcolor)")};
    }
  }
`;

const MarketButton: FC<ButtonProps> = ({ market, children }) => {
  return <StyledButton market={market}>{children}</StyledButton>;
};

export default MarketButton;
