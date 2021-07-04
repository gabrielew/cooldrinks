import styled, { css } from "styled-components";
import { TitleProps } from ".";

type StyledProps = Pick<TitleProps, "color" | "mt">

export const Title = styled.h1<StyledProps>`
  ${({ theme, color, mt }) => css`
    color: ${theme.colors[color || "text"]};
    margin-top: ${theme.spacings[mt || "small"]};
  `}
`;
