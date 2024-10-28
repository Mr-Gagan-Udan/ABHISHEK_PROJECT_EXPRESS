
import { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [savedSearches, setSavedSearches] = useState([]);

  const addFavorite = (result) => {
    setFavorites([...favorites, result]);
  };

  const saveSearch = (query) => {
    setSavedSearches([...savedSearches, query]);
  };

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults, favorites, addFavorite, savedSearches, saveSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
