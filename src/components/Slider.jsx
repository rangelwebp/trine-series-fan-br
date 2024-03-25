import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "../styles/slider.css";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { api } from "../data/api";
import SliderContent from "./SliderContent";

export default function App() {
	const progressCircle = useRef(null);
	const progressContent = useRef(null);
	const [slider, setSlider] = useState([]);
	const [loading, setLoading] = useState(true);

	const base_api = api;
	const endpoint = "sliders";

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(base_api + endpoint);
			const data = await response.json();
			setSlider(data.sliders);
			setLoading(false);
		}
		fetchData();
	}, []);

	const onAutoplayTimeLeft = (s, time, progress) => {
		progressCircle.current.style.setProperty("--progress", 1 - progress);
		progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
	};
	return (
		<>
			<Swiper
				spaceBetween={30}
				slidesPerView={1}
				centeredSlides={true}
				loop={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation, EffectFade]}
				effect="fade"
				onAutoplayTimeLeft={onAutoplayTimeLeft}
				className="mySwiper overflow-hidden">
				{slider.map((item) => (
					<SwiperSlide key={item.id}>
						<SliderContent
							id={item.id}
							nome={item.nome}
							descricao={item.descricao}
							slug={item.slug}
							categoria_principal={item.categoria_principal}
							traducao={item.traducao}
							nota={item.nota}
							classificacao={item.classificacao}
							indicacao={item.indicacao}
							imagem={item.imagem}
						/>
					</SwiperSlide>
				))}

				<div
					className="autoplay-progress absolute right-[32px] 2xl:right-96 bottom-[32px] 2xl:bottom-40 z-10 w-[48px] h-[48px] flex items-center justify-center font-bold"
					slot="container-end">
					<svg
						className="absolute left-[0] top-0 z-10 w-full h-full stroke-[4px] -rotate-90"
						viewBox="0 0 48 48"
						ref={progressCircle}>
						<circle cx="24" cy="24" r="20"></circle>
					</svg>
					<span ref={progressContent}></span>
				</div>
			</Swiper>
		</>
	);
}
