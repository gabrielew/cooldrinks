import React, { useLayoutEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { FullView, Title, DrinkCard } from "../../components";
import { Drink } from "../Home";
import api from "../../services/api";

const DrinksByCategory: React.FC = () => {
  const history = useHistory();
  const location = useLocation<{category:string}>();
  if (!location.state?.category) {
    history.push("/");
  }

  const [isLoading, setIsLoading] = useState(true);
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const categoryName = location.state?.category;

  useLayoutEffect(() => {
    async function fetchDrink() {
      const response = await api.get(`filter.php?c=${categoryName}`);
      setDrinks(response.data.drinks);
      setIsLoading(false);
    }

    fetchDrink();
  }, [categoryName]);

  return (
    <FullView isLoading={isLoading} backButton>
      <Title title={categoryName} />
      <DrinkCard drinks={drinks} />
    </FullView>
  );
};
export default DrinksByCategory;
