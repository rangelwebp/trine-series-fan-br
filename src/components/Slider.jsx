import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
	const progressCircle = useRef(null);
	const progressContent = useRef(null);
	const onAutoplayTimeLeft = (s, time, progress) => {
		progressCircle.current.style.setProperty("--progress", 1 - progress);
		progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
	};
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				onAutoplayTimeLeft={onAutoplayTimeLeft}
				className="mySwiper overflow-hidden">
				<SwiperSlide className="">
					<img
						className="min-h-[768px] object-cover"
						src="https://www.hyperhype.es/wp-content/uploads/2019/12/Deathwing_Key_Art-scaled-e1575544364525.jpg"
					/>
				</SwiperSlide>
				<SwiperSlide className="">
					<img
						className="min-h-[768px] object-cover"
						src="https://sun9-8.userapi.com/impf/vqncdMCRid5h4McGn_Ovn3g_rUa8FRtZFhj5Jw/EERmUmn6rz4.jpg?size=1920x768&quality=95&crop=0,69,1902,759&sign=879521b17e7b0df6684cf9fca08dc3e8&type=cover_group"
						alt=""
					/>
				</SwiperSlide>

				<div className="autoplay-progress" slot="container-end">
					<svg viewBox="0 0 48 48" ref={progressCircle}>
						<circle cx="24" cy="24" r="20"></circle>
					</svg>
					<span ref={progressContent}></span>
				</div>
			</Swiper>
		</>
	);
}
