import React, { FC } from "react";
import styled from "styled-components";

interface ButtonProps {
  market: string;
  children?: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  width: 100px;
  height: 40px;
  border: 1px solid var(--background);
  border-radius: 50px;
  z-index: 100;
  background: ${(props) => (props.market === "ozon" ? "var(--ozoncolor)" : "var(--wbcolor-gr)")};
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  padding: 0;

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
    a {
      color: ${(props) => (props.market === "ozon" ? "var(--ozoncolor)" : "var(--wbcolor)")};
    }
  }
`;

const MarketButton: FC<ButtonProps> = ({ market, children }) => {
  return <StyledButton market={market}>{children}</StyledButton>;
};

export default MarketButton;
