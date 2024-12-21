import React, { createContext, useState, useContext } from "react";

const initialSearchState = {
  destination: "Sivasagar, Assam",
  checkIn: null,
  checkOut: null,
  guests: 1,
};

const SearchContext = createContext({
  searchState: initialSearchState,
  setSearchState: () => {},
  updateSearchState: () => {},
});

export const SearchProvider = ({ children }) => {
  const [searchState, setSearchState] = useState(initialSearchState);

  const updateSearchState = (newState) => {
    setSearchState((prev) => ({
      ...prev,
      ...newState,
    }));
  };

  return (
    <SearchContext.Provider value={{ searchState, setSearchState, updateSearchState }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};
