import styled from "styled-components";

type StyledProps = { isLoading: boolean };

export const Container = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${({ isLoading }) => isLoading && "100vh"};
`;
