import React, { useEffect, useState } from "react";
import IconHeartFill from "../ui/IconHeartFill";

export default function Favorites() {
	const [favoriteList, setFavoriteList] = useState([]);
	const [dropdownNotification, setDropdownNotification] = useState(false);

	function handleClick() {
		setDropdownNotification(!dropdownNotification);
	}

	useEffect(() => {
		const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
		setFavoriteList(favorites);
	}, []);

	return (
		<>
			<div className="">
				<button
					onClick={handleClick}
					id="dropdownNotificationButton"
					className="relative z-10 border p-3 border-white rounded-full inline-flex items-center text-sm         font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white         dark:text-gray-400"
					type="button">
					<IconHeartFill size="16" />
					<div className="absolute block w-6 h-6 bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
						<span className="text-white text-[12px] font-bold relative">
							1
						</span>
					</div>
				</button>

				{}
			</div>
			{dropdownNotification &&
				favoriteList.map((item, index) => (
					<li key={index}>{item.titulo}</li>
				))}
		</>
	);
}
