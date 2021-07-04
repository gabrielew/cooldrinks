import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.borders.large};
    margin: ${theme.spacings.small};
    background: ${theme.colors.white};
    cursor: pointer;
    transition: box-shadow 0.5s;
    width: 260px;
    height: 48px;

    &:hover {
      box-shadow: 0px 0px 5px 5px ${theme.colors.lightBlack};
    }
    @media(min-width: ${theme.screen.medium}) {
      width: 300px;
    }
`}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.fonts.sizes.xlarge};
    @media(min-width: ${theme.screen.medium}) {
      font-size: ${theme.fonts.sizes.xxlarge};
    }
  `}
`;
