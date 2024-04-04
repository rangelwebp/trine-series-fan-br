import React, { useEffect, useState } from "react";
import CardGame from "./CardGame";
import TitleSection from "../ui/TitleSection";
import { api } from "../data/api";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import ArrowLeft from "../ui/ArrowLeft";
import ArrowRight from "../ui/ArrowRight";
import Spinner from "../ui/Spinner";

export default function Trines() {
	const [trines, setTrines] = useState([]);
	const [loading, setLoading] = useState(true);
	const base_api = api;
	const endpoint = "seriestrines";

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(base_api + endpoint);
			const data = await response.json();
			setLoading(false);
			setTrines(data.t);
		}
		fetchData();
	}, []);

	return (
		<div className="relative pb-8 mt-28">
			{loading && <Spinner />}
			<TitleSection>Trines Series</TitleSection>
			<div className="w-full flex flex-wrap gap-8">
				<Swiper
					slidesPerView={3}
					spaceBetween={32}
					breakpoints={{
						320: {
							slidesPerView: 1,
							centeredSlides: true,
						},
						640: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 3,
						},
					}}
					loop={true}
					modules={[Navigation, EffectFade]}
					navigation={{
						nextEl: ".arrow-left",
						prevEl: ".arrow-right",
					}}>
					{trines.map((trine) => (
						<SwiperSlide key={trine.id}>
							<CardGame
								key={trine.slug}
								gameId={trine.id}
								href={"/game/" + trine.slug}
								img={trine.thumb}
								titulo={trine.nome}
								nota={trine.nota}
							/>
						</SwiperSlide>
					))}
				</Swiper>
				<div className="setas flex gap-2 items-center absolute top-0 right-0">
					<button className="arrow-left arrow text-white">
						<ArrowLeft />
					</button>
					<button className="arrow-right arrow text-white">
						<ArrowRight />
					</button>
				</div>
			</div>
		</div>
	);
}
