import styled, { css } from "styled-components";

export const Logo = styled.img`
  ${({ theme }) => css`
    width: 100px;
    height: 100px;
    cursor: pointer;

    @media(min-width: ${theme.screen.medium}) {
      width: 150px;
      height: 150px;
    }
  `}
`;
