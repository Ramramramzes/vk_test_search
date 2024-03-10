import React, { createContext, useState } from "react";
import "./styles.css";
import useName from "../../hooks/useName";
import { SearchResults } from "./SearchResults/SearchResults";

export interface IOneUser {
  id: number,
  firstName: string,
  lastName: string,
  image: string,
  address: {
    city: string,
  },
}

export interface IUsers {
  users: IOneUser[];
}

export const NamesContext = createContext<IOneUser[]>([])

export function SearchForm() {
  const [inputVal, setInputVal] = useState('');
  const contextValue = useName(inputVal)
  
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(event.target.value.toString());
  };
  
  if (contextValue == null) {
    return <div className="load">Загрузка...</div>;
  }

  return (
    <NamesContext.Provider value={contextValue}>
      <div className="searchForm">
        <form>
          <input onChange={handleSearchChange} type="text" value={inputVal} />
        </form>
        <SearchResults />
      </div>
    </NamesContext.Provider>
  );
}
