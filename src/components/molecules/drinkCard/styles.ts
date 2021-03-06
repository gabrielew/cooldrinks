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
    width: 260px;
    height: 130px;
    padding: ${theme.spacings.small};
    margin: ${theme.spacings.small};
    border: 2px solid ${theme.colors.lightOrange};
    border-radius: ${theme.borders.large};
    transition: box-shadow 0.5s;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 10px 10px ${theme.colors.mediumOrange};
    }

    @media(min-width: ${theme.screen.medium}) {
      width: 300px;
      height: 150px;
    }

    @media(min-width: ${theme.screen.large}) {
      width: 320px;
      height: 150px;
    }
`}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 80px;
    height: 80px;
    border-radius: ${theme.borders.medium};
    margin-right: ${theme.spacings.xsmall};

    @media(min-width: ${theme.screen.medium}) {
      width: 100px;
      height: 100px;
    }
  `}
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray.medium};
    font-size: ${theme.fonts.sizes.small};
  `}
`;
