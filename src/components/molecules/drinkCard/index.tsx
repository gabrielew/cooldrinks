import React from "react";
import { useHistory } from "react-router-dom";
import { Drink } from "../../../pages/Home";
import * as S from "./styles";

export interface DrinkCardProps {
  drinks: Drink[];
  canClick?: boolean;
}

const DrinkCard: React.FC<DrinkCardProps> = ({
  drinks, canClick = true,
}) => {
  const history = useHistory();
  function toggleClick(idDrink: string) {
    if (canClick) { history.push(`/drink/${idDrink}`); }
  }
  return (
    <S.Container>
      {drinks.map((drink, index) => (
        <S.Card key={index} onClick={() => toggleClick(drink.idDrink)}>
          <S.Image
            src={`${drink.strDrinkThumb}${canClick ? "/preview" : ""}`}
            alt={`${drink.strDrink} preview image`}
          />
          <S.Wrapper>
            <S.Title>{drink.strDrink}</S.Title>
            <S.Description>{drink.strMeasure || ""}</S.Description>
          </S.Wrapper>
        </S.Card>
      ))}

    </S.Container>
  );
};

export default DrinkCard;
