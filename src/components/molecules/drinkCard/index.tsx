import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useLayoutEffect } from "react";
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
  const [imgCounter, setImgCounter] = useState(0);
  const [imgIsLoading, setImgIsLoading] = useState(true);
  useLayoutEffect(() => {
    if (imgCounter >= drinks.length) {
      setImgIsLoading(false);
    }
  }, [imgCounter, drinks]);

  function toggleClick(idDrink: string) {
    if (canClick) { history.push(`/drink/${idDrink}`); }
  }

  function preLoadImages() {
    setImgCounter((current) => current + 1);
  }

  function handleImageUrl(src: string) {
    if (imgIsLoading) return "/logo.svg";
    if (canClick) {
      return `${src}/preview`;
    }
    return src;
  }

  return (
    <S.Container>
      {drinks.map((drink, index) => (
        <S.Card key={index} onClick={() => toggleClick(drink.idDrink)}>
          <S.Image
            src={handleImageUrl(drink.strDrinkThumb)}
            alt={`${drink.strDrink} preview image`}
            onLoad={preLoadImages}
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
