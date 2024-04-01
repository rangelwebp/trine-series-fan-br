import React from "react";
import IconHeartFill from "./IconHeartFill";

export default function BtnFavorited({ gameId, onFavoriteChange }) {
	const handleClick = () => {
		let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
		// Remove o jogo especificado dos favoritos
		favorites = favorites.filter((favorite) => favorite.gameId !== gameId);
		localStorage.setItem("favorites", JSON.stringify(favorites));
		onFavoriteChange(); // Notifica o componente pai para atualizar o estado/UI
	};

	return (
		<>
			<a
				onClick={handleClick}
				className="absolute top-2 right-2 bg-red-600 text-red-200 rounded-full w-10 h-10 flex justify-center items-center z-50 cursor-pointer">
				<IconHeartFill />
			</a>
		</>
	);
}
