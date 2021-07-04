import styled, { css } from "styled-components";

export const SearchWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items:center;
    margin-top: ${theme.spacings.small};
    width: 500px;
    height: 48px;
    background: ${theme.colors.white};
    border-radius: ${theme.borders.medium};
    border: 1px solid ${theme.colors.border};
    line-height: 11px;
    padding: 0 ${theme.spacings.xsmall};
    transition: box-shadow 0.5s;

    &:hover, &:focus {
      box-shadow: 0px 0px 5px 5px ${theme.colors.lightBlack};
    }
    &:focus-within {
      box-shadow: 0px 0px 5px 5px ${theme.colors.lightBlack};
    }
  `}
`;

export const SearchInput = styled.input`
  ${({ theme }) => css`
    width: 100%;
    outline: none;
    background: ${theme.colors.white};
    font-size: ${theme.fonts.sizes.large};
    color: ${theme.colors.gray.dark};
    border:none;
    ::placeholder {
      color: ${theme.colors.gray.medium};
    }
  `}
`;
