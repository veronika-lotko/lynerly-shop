import React, { FC } from "react";
import Image from "next/image";
import { StyledLogo, ContactWrapper } from "./styles";

const Contact: FC = () => {
  return (
    <ContactWrapper>
      <h2>
        ДЛЯ ЗАКАЗА БОЛЬШИХ ПАРТИЙ НАПРЯМУЮ МОЖНО СВЯЗАТЬСЯ В <span>ТЕЛЕГРАМЕ</span>
      </h2>
      <StyledLogo href="https://t.me/lynerlyof" target="_blank">
        <Image src="/img/telegram.svg" alt="Telegram Icon" width={100} height={100} />
      </StyledLogo>
      <p>
        © 2025{" "}
        <a href="https://www.linkedin.com/in/veronikalotko/" target="_blank">
          VL
        </a>
      </p>
    </ContactWrapper>
  );
};

export default Contact;
