import React, {
  useCallback, ChangeEvent, Dispatch, useState,
} from "react";
import { Icon, Loading } from "../..";
import * as S from "./style";

export interface SafeTyping {
  word: string;
  timeout?: NodeJS.Timeout;
}

interface SearchInputProps {
  setSearch: Dispatch<React.SetStateAction<string>>
}

const SearchInput: React.FC<SearchInputProps> = ({ setSearch }) => {
  const [typing, setTyping] = useState<SafeTyping>({ word: "" });
  const [isLoading, setIsLoading] = useState(false);

  const typeSafe = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    if (typing.timeout) {
      clearTimeout(typing.timeout);
    }
    const word = e.target?.value;
    setTyping({
      word,
      timeout: setTimeout(() => {
        setSearch(word);
        setIsLoading(false);
      }, word.length ? 2000 : 0),
    });
  }, [typing, setSearch]);

  return (
    <S.SearchWrapper>
      <Icon name="search" />
      <S.SearchInput
        value={typing.word}
        onChange={typeSafe}
        placeholder="Search by a drink's name"
      />
      {isLoading && <Loading />}
    </S.SearchWrapper>
  );
};

export default SearchInput;
