import React, { ReactNode } from "react";
import { Header } from "../..";
import * as S from "./styles";

interface FullViewProps {
  isLoading: boolean;
  children: ReactNode;
  backButton?: boolean;
}

const FullView: React.FC<FullViewProps> = ({ isLoading, children, backButton = false }) => (
  <S.Container isLoading={isLoading}>
    {!isLoading && <Header backButton={backButton} />}
    {!isLoading && children}
  </S.Container>
);

export default FullView;
