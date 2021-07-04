import React from "react";
import { useHistory } from "react-router-dom";
import { Logo, Icon } from "../..";
import * as S from "./styles";

interface HeaderProps {
  backButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ backButton = false }) => {
  const history = useHistory();
  return (
    <S.Wrapper>
      {backButton && (
      <S.BackButton onClick={() => history.goBack()}>
        <Icon name="back" />
        <h4>Back</h4>
      </S.BackButton>
      )}

      <Logo />
    </S.Wrapper>
  );
};

export default Header;
