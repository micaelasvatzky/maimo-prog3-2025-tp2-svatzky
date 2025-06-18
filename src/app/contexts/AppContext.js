"use client";

import { useState, useEffect, useContext, createContext } from "react";

//todo lo que empieza con use, en React se conoce como hooks

//createContext, se usa una sola vez en toda la aplicación

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  //el context engloba toda la aplicación , o sea el children=

  //aca va mi logica y funciones custom

  useEffect(() => {
    console.log(favorites);
    //cada vez que favorites cambia, el use effect se ejecuta de nuevo
  }, [favorites]);

   const handleAddToFavorite = (title, image, id) => {
    const added = favorites.find((movie) => movie.id === id);
    if (!added) {
      setFavorites([...favorites, { title, image, id }]);
    }
  };

   const handleRemoveFavorite = (id) => {
    setFavorites(favorites.filter((movie) => movie.id !== id));
  };

  const handleChangeFavorite = (title, image, id) => {
    const exists = favorites.find((movie) => movie.id === id);
    if (exists) {
      handleRemoveFavorite(id);
    } else {
      handleAddToFavorite(title, image, id);
    }
  };

  const isFavorite = (id) => {
  return favorites.some((movie) => movie.id === id);
};

  return (
    <AppContext.Provider
      value={{
        favorites,
        handleAddToFavorite,
        handleRemoveFavorite,
        handleChangeFavorite,
        isFavorite
      }}
      //exporto todo lo que quiera que este disponible para el resto de componentes
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext: must be used within an AppContextProvider");
  //no puedo usar cosas que no esten dentro del context
  return context;
};

export default AppContext;
