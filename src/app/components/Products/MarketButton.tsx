import React, { FC } from "react";
import styled from "styled-components";

interface ButtonProps {
  market: string;
  children?: React.ReactNode;
  size?: string;
  border?: string;
}

const StyledButton = styled.button<ButtonProps>`
  width: ${(props) => (props.size === "lg" ? "150px" : "100px")};
  height: ${(props) => (props.size === "lg" ? "60px" : "50px")};
  border: ${(props) => (props.border === "visible" ? "1px solid var(--foreground)" : "none")};
  border-radius: 50px;
  z-index: 100;
  background: ${(props) => (props.market === "ozon" ? "var(--ozoncolor)" : "var(--wbcolor)")};
  transition: color 0.2s ease-in-out, background 0.3s ease-in-out, transform 0.2s ease-in-out;
  cursor: pointer;
  padding: 0;
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
    font-size: ${(props) => (props.size === "lg" ? "var(--font-size-standard-md)" : "var(--font-size-standard-xs)")};
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

const MarketButton: FC<ButtonProps> = ({ market, children, size, border }) => {
  return (
    <StyledButton market={market} size={size} border={border}>
      {children}
    </StyledButton>
  );
};

export default MarketButton;
