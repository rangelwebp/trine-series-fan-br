import React, { useEffect, useState } from "react";
import Tag from "../ui/Tag";
import TagGreen from "./../ui/TagGreen";
import BtnFavorited from "../ui/BtnFavorited";
import BtnFavorite from "../ui/BtnFavorite";

export default function CardGame({ href, gameId, img, titulo, nota }) {
	const notaNumerica = parseInt(nota, 10);

	const [isFavorited, setIsFavorited] = useState(false);

	useEffect(() => {
		const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
		setIsFavorited(favorites.includes(gameId));
	}, [gameId]);

	const handleFavoriteChange = () => {
		setIsFavorited(!isFavorited); // Atualiza o estado baseado na ação do usuário
	};

	return (
		<div className="group max-w-[384px]">
			<figure className="mb-4 relative">
				{isFavorited ? (
					<BtnFavorited
						gameId={gameId}
						onFavoriteChange={handleFavoriteChange}
					/>
				) : (
					<BtnFavorite
						gameId={gameId}
						titulo={titulo}
						onFavoriteChange={handleFavoriteChange}
					/>
				)}
				<a href={href}>
					<img
						className="h-[180px] object-cover w-full rounded opacity-100 hover:opacity-50 cursor-pointer transition-all duration-500"
						src={img}
						alt={titulo}
					/>
				</a>
			</figure>
			<div className="flex justify-between items-center">
				<h4 className="font-bold group-hover:text-white transition-all duration-500">
					{titulo}
				</h4>
				{notaNumerica > 80 ? (
					<TagGreen>{nota}</TagGreen>
				) : (
					<Tag>{nota}</Tag>
				)}
			</div>
		</div>
	);
}
