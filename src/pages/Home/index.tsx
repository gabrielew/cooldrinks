import React, {
  useLayoutEffect, useState,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadRequest } from "../../store/ducks/categories/actions";
import { ApplicationState } from "../../store/index";
import {
  FullView, Title, CategoryCard, DrinkCard, SearchInput,
} from "../../components";
import api from "../../services/api";

export interface Drink {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
  strMeasure?: string;
}

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [error, setError] = useState("");

  const { data, loading } = useSelector((state: ApplicationState) => state.categories);

  useLayoutEffect(() => {
    dispatch(loadRequest());
  }, [dispatch]);

  useLayoutEffect(() => {
    async function fetchDrinks() {
      if (!search.length) {
        setDrinks([]);
      } else {
        const response = await api.get(`search.php?s=${search}`);
        if (!response.data.drinks) {
          setError(`No ${search} were found`);
          return;
        }
        setError("");
        setDrinks(response.data.drinks);
      }
    }
    fetchDrinks();
  }, [search]);

  return (
    <FullView isLoading={loading}>
      <SearchInput setSearch={setSearch} />
      {error && <Title title={error} />}
      {drinks?.length > 0 && (
        <>
          <Title title="Searched drinks" />
          <DrinkCard drinks={drinks} />
        </>
      )}
      <Title title="Categories" />
      <CategoryCard categories={data} />
    </FullView>
  );
};
export default Home;
