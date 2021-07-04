import React from "react";
import { useHistory } from "react-router-dom";

import * as S from "./styles";

const Logo: React.FC = () => {
  const history = useHistory();
  return (
    <S.Logo
      onClick={() => history.push("/")}
      src="/logo.svg"
      alt="Cooldrinks Logo"
      aria-label="Cooldrinks Logo"
    />
  );
};
export default Logo;
