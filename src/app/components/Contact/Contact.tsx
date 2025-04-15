import React, { FC } from "react";
import Image from "next/image";
import { StyledLogo } from "./styles";

const Contact: FC = () => {
  return (
    <div className="contact">
      <p>
        ДЛЯ ЗАКАЗА БОЛЬШИХ ПАРТИЙ НАПРЯМУЮ МОЖНО СВЯЗАТЬСЯ В <span>ТЕЛЕГРАМЕ</span>
      </p>
      <StyledLogo href="https://t.me/lynerlyof" target="_blank">
        <Image src="/img/telegram.svg" alt="Telegram Icon" width={100} height={100} />
      </StyledLogo>
    </div>
  );
};

export default Contact;
