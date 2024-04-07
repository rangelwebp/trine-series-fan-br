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
			{dropdownNotification && (
				<>
					<div
						id="dropdownNotification"
						className="absolute top-28 xl:right-10 2xl:right-48 z-20 w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700"
						aria-labelledby="dropdownNotificationButton">
						<div className="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
							Jogos favoritados
						</div>
						<div className="divide-y divide-gray-100 dark:divide-gray-700">
							{favoriteList.map((item, index) => (
								<a
									key={index}
									href="#"
									className="flex items-center px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
									<div className="flex-shrink-0">
										<img
											className="rounded-full w-11 h-11"
											src="/assets/user.png"
											alt="Jese image"
										/>
									</div>
									<div className="w-full ps-3">
										<div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
											Você favoritou o jogo:{" "}
											<span className="font-semibold text-gray-900 dark:text-white">
												{item.titulo}
											</span>
										</div>
									</div>
								</a>
							))}
						</div>
						<a
							href="/favorites"
							className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
							<div className="inline-flex items-center ">
								<svg
									className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 14">
									<path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
								</svg>
								Veja todos
							</div>
						</a>
					</div>
				</>
			)}
		</>
	);
}
