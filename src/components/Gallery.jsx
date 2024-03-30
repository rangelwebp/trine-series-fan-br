import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Gallery({ sliders }) {
	return (
		<>
			<Swiper
				spaceBetween={32}
				slidesPerView={5}
				breakpoints={{
					320: {
						slidesPerView: 1,
						centeredSlides: true,
					},
					640: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 3,
					},
					1281: {
						slidesPerView: 4,
					},
					1441: {
						slidesPerView: 5,
					},
				}}
				loop={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				modules={[Autoplay, Pagination, Navigation]}
				navigation={true}
				className="slider-galeria overflow-hidden">
				{sliders.map((item, index) => {
					return (
						<SwiperSlide key={index}>
							<img
								className="w-[384px] h-[266px] object-cover rounded"
								src={item}
								alt={"Imagem " + index + ""}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
}
