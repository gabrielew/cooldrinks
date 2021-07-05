import React, { useLayoutEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  FullView, Title, DrinkCard, YoutubePreview,
} from "../../components";
import findIngredients from "../../utils/ingredients";
import { Drink as Ingredient } from "../Home";
import api from "../../services/api";
import youtubeResponseApi, { YoutubePreviewProps } from "../../services/youtubeApi";
import * as S from "./styles";

const Drink: React.FC = () => {
  const history = useHistory();
  const { idDrink } = useParams<{idDrink: string}>();
  const [isLoading, setIsLoading] = useState(true);
  const [isImgLoading, setIsImgLoading] = useState(false);
  const [error, setError] = useState("");
  const [drink, setDrink] = useState<any>({});
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [youtube, setYoutube] = useState<YoutubePreviewProps>({} as YoutubePreviewProps);

  function ErrorBackButton() {
    history.goBack();
  }

  useLayoutEffect(() => {
    async function fetchDrink() {
      try {
        const response = await api.get(`lookup.php?i=${idDrink}`);
        if (!response.data) {
          setError("No drinks were found");
        } else {
          const data = response.data.drinks[0];
          setDrink(data);
          setIngredients(findIngredients(data));
          setYoutube(await youtubeResponseApi(data.strDrink));
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchDrink();
  }, [idDrink]);

  function isImageLoaded() {
    setIsImgLoading(true);
  }

  return (
    <FullView isLoading={isLoading} backButton>
      {error ? (
        <>
          <Title title={error} />
          <S.ErrorButton type="button" onClick={ErrorBackButton}>Back</S.ErrorButton>
        </>
      ) : (
        <>
          <Title title={`Drink ${drink.strDrink}`} />
          <S.Container>
            <S.Wrapper>
              <S.DrinkImage
                src={`${isImgLoading ? drink.strDrinkThumb : "/logo.svg"}`}
                alt={`${drink.strDrink}`}
                onLoad={isImageLoaded}
              />
              <S.Description>
                <S.DescriptionTitle>{`Type: ${drink.strAlcoholic}`}</S.DescriptionTitle>
                <S.DescriptionTitle>
                  {`Glass: ${drink.strGlass}`}
                </S.DescriptionTitle>
                <S.DescriptionTitle>{`Category: ${drink.strCategory}`}</S.DescriptionTitle>
                <S.Instruction>{drink.strInstructions}</S.Instruction>
              </S.Description>
            </S.Wrapper>
          </S.Container>

          <Title title="Ingredients" />
          <DrinkCard drinks={ingredients} canClick={false} />

          <Title title={youtube.items?.length ? "Youtube Videos" : "No youtube videos found"} />
          <YoutubePreview items={youtube.items} />
        </>
      )}

    </FullView>
  );
};
export default Drink;
