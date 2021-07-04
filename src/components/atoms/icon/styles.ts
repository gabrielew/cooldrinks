import styled, { css } from "styled-components";

export const Icon = styled.img`
  ${({ theme }) => css`
  width: 22px;
  height: 22px;
  margin-right: ${theme.spacings.small}
  `}
`;
