// FavoriteContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const FavoriteContext = createContext();

export function useFavorites() {
	return useContext(FavoriteContext);
}

export const FavoriteProvider = ({ children }) => {
	const [favoriteList, setFavoriteList] = useState([]);

	useEffect(() => {
		const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
		setFavoriteList(favorites);
	}, []);

	// Função para atualizar os favoritos, que pode ser chamada de outros componentes
	const updateFavorites = () => {
		const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
		setFavoriteList(favorites);
	};

	return (
		<FavoriteContext.Provider value={{ favoriteList, updateFavorites }}>
			{children}
		</FavoriteContext.Provider>
	);
};
