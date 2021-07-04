import { Drink as Ingredient } from "../pages/Home";

const numberOfIngredientsAndMeasures = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15];

function handleIngredientImage(ingredient: string): string {
  return `https://www.thecocktaildb.com/images/ingredients/${ingredient}-small.png`;
}

export default function findIngredients(drink: any): Ingredient[] {
  const tmpIngredients: Ingredient[] = [];
  numberOfIngredientsAndMeasures.forEach((ingredientAndMeasure) => {
    if (drink[`strIngredient${ingredientAndMeasure}`]) {
      tmpIngredients.push({
        strDrink: drink[`strIngredient${ingredientAndMeasure}`],
        strDrinkThumb: handleIngredientImage(drink[`strIngredient${ingredientAndMeasure}`]),
        idDrink: "",
        strMeasure: drink[`strMeasure${ingredientAndMeasure}`],
      });
    }
  });

  return tmpIngredients;
}
