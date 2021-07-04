import React from "react"; import { useHistory } from "react-router-dom";
import { Category as CategoryProps } from "../../../store/ducks/categories/types";
import * as S from "./styles";

export interface CategoryCardProps {
  categories: CategoryProps;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  categories,
}) => {
  const history = useHistory();
  function toggleClick(category:string) {
    history.push("/drinks", { category });
  }

  return (
    <S.Container>
      {Array.isArray(categories.drinks)
      && categories.drinks.map((category, index) => (
        <S.Card key={index} onClick={() => toggleClick(category.strCategory)}>
          <S.Title>
            {category.strCategory}
          </S.Title>
        </S.Card>
      ))}

    </S.Container>
  );
};

export default CategoryCard;
