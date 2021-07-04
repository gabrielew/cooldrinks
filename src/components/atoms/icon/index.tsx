import React from "react";
import * as S from "./styles";

interface IconProps {
  name: "search" | "back"
}

const Icon: React.FC<IconProps> = ({ name }) => (
  <S.Icon
    src={`/${name}.svg`}
    alt={`${name} icon`}
    aria-label={`${name} icon`}
  />
);

export default Icon;
