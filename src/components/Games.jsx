import React, { useEffect, useState } from "react";
import { api } from "../data/api";
import CardGame from "./CardGame";
import TitleSection from "../ui/TitleSection";

export default function Games() {
	const [game, setGame] = useState([]);

	const base_api = api;
	const anothers_games = "anothers";

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(base_api + anothers_games);
			const data = await response.json();
			setGame(data.games);
		}
		fetchData();
	}, []);

	return (
		<div className="w-full pt-16 border-t border-zinc-800 mt-28">
			<TitleSection>Outros jogos da Frozenbyte</TitleSection>
			<div className="grid grid-cols-3 gap-8">
				{game.map((item) => (
					<CardGame
						key={item.id}
						gameId={item.id}
						href={"/game/" + item.slug}
						img={item.thumb}
						titulo={item.nome}
						nota={item.nota}
					/>
				))}
			</div>
		</div>
	);
}
