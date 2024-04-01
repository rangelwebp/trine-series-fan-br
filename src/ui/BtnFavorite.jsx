import React from "react";
import IconHeartBorder from "./IconHeartBorder"; // Certifique-se de que o caminho do import está correto

export default function BtnFavorite({ gameId, titulo, onFavoriteChange }) {
	// Corrigido para gameId
	const handleClick = () => {
		const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
		if (!favorites.some((favorite) => favorite.gameId === gameId)) {
			favorites.push({ gameId, titulo }); // Armazena um objeto com gameId e titulo
			localStorage.setItem("favorites", JSON.stringify(favorites));
		}
		onFavoriteChange(); // Notifica o componente pai para atualizar o estado/UI
	};

	return (
		<a
			onClick={handleClick}
			className="absolute top-2 right-2 bg-zinc-800 rounded-full w-10 h-10 flex justify-center items-center z-50 cursor-pointer hover:bg-zinc-200">
			<IconHeartBorder />
		</a>
	);
}
