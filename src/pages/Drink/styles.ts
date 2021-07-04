import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 ${theme.spacings.large};
    margin-top: ${theme.spacings.small};
    @media(min-width: ${theme.screen.medium}) {
      justify-content: flex-start;
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(min-width: ${theme.screen.medium}) {
      flex-direction: row;
      align-items: flex-start;
    }
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction:column;
    margin-left: ${theme.spacings.small};
    justify-content: flex-start;
    align-items:flex-start;
  `}
`;

export const DrinkImage = styled.img`
  ${({ theme }) => css`
    height: 200px;
    width: 200px;
    border-radius: ${theme.borders.large};
    border: 1px solid ${theme.colors.border};
    padding: 10px;
    transition: box-shadow 0.5s;
    &:hover {
      box-shadow: 0px 0px 10px 10px ${theme.colors.lightOrange};
    }
    @media(min-width: ${theme.screen.medium}) {
      height: 400px;
      width: 400px;
    }

  `}
`;

export const IngredientsImage = styled.img`
  ${({ theme }) => css`
  border-radius: ${theme.borders.small};
  height: 100px;
  width: 100px;
  `}
`;

export const DescriptionTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.gray.text};
    margin-top: ${theme.spacings.medium};
  `}
`;

export const Instruction = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    margin-top: ${theme.spacings.medium};
  `}
`;

export const ErrorButton = styled.button`
    ${({ theme }) => css`
      margin-top: 10px;
      width: 200px;
      height: 48px;
      border: 1px solid ${theme.colors.primary};
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
      font-size: ${theme.fonts.sizes.large};
      font-family: ${theme.fonts.families.poppins};
      border-radius: ${theme.borders.medium};
      cursor: pointer;
      outline: none;

      &:hover {
        background: ${theme.colors.primaryHover};
      }
    `}
`;
