import React from "react";
import { theme } from "../../../themes";
import * as S from "./styles";

export interface TitleProps {
  title: string;
  color?: keyof typeof theme.colors;
  mt?: keyof typeof theme.spacings
}

const Title: React.FC<TitleProps> = ({ title, color, mt }) => (
  <S.Title mt={mt} color={color}>{title}</S.Title>
);
export default Title;
