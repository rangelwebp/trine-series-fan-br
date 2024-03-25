import React, { useState } from "react";
import IconExplorar from "../ui/IconExplorar";
import IconHeartBorder from "../ui/IconHeartBorder";
import IconLike from "../ui/IconLike";
import IconBrazil from "./../ui/IconBrazil";

export default function SliderContent({
	id,
	nome,
	descricao,
	slug,
	categoria_principal,
	traducao,
	nota,
	classificacao,
	indicacao,
	imagem,
}) {
	return (
		<>
			<div className="absolute z-20 inset-0 w-full h-full flex flex-col items-center justify-center">
				<div className="w-full max-w-[1216px] px-4 flex justify-between">
					<div className="max-w-3xl flex flex-col h-[400px] justify-between">
						<h1 className="text-7xl font-bold text-white text-title">
							{nome}
						</h1>
						<div className="max-w-2xl mb-6">
							<p className="text-white leading-6 mt-4">
								{descricao}
							</p>
						</div>
						<div className="flex gap-2 items-center mb-14">
							<span className="bg-amber-400 text-sm font-semibold py-1 px-3 rounded text-amber-600">
								{categoria_principal}
							</span>
							{traducao.length > 0 && (
								<ul className="flex gap-2 items-center">
									{Array.isArray(traducao) ? (
										traducao.map((item, index) => (
											<li
												key={index}
												className="bg-indigo-600 text-sm font-semibold py-1 px-3 rounded text-indigo-300 flex gap-1 items-center">
												{item} <IconBrazil />
											</li>
										))
									) : (
										<li className="bg-indigo-600 text-sm font-semibold py-1 px-3 rounded text-indigo-300 flex gap-1 items-center">
											{traducao} <IconBrazil />
										</li>
									)}
								</ul>
							)}

							<span className="bg-emerald-500 text-emerald-800 text-sm font-semibold flex items-center gap-1 py-1 px-2 rounded">
								<IconLike />
								{nota}
							</span>
						</div>
						<div className="flex gap-3 items-center justify-start">
							<a
								href={`/game/${slug}`}
								className="bg-white hover:bg-zinc-950 transition-all duration-500
                                     py-3 px-6 rounded-full text-zinc-950 hover:text-white flex justify-between items-center min-w-64">
								<span className="font-semibold">
									Explorar jogo
								</span>
								<IconExplorar />
							</a>
							<a
								className="flex justify-center w-12 h-12 items-center bg-zinc-950/70 text-white rounded-full hover:bg-white hover:text-zinc-950 transition-all duration-500"
								href="#">
								<IconHeartBorder size={16} />
							</a>
						</div>
					</div>
					<div className="flex flex-col items-center max-w-20 text-center">
						<span className="text-white text-sm mb-2">
							Classificação
						</span>
						<div className="bg-blue-500 h-[72px] w-[72px] flex justify-center items-center rounded">
							<span className="text-white font-bold text-3xl">
								{classificacao}
							</span>
						</div>
						<span className="text-white text-sm mt-1">
							{indicacao}
						</span>
					</div>
				</div>
			</div>
			<div className="bg-gradient-to-t h-full min-h-[768px] object-cover absolute z-10 w-full from-zinc-950 via-zinc-950/30 to-zinc-950"></div>
			<img
				className="w-full h-[768px] object-cover backdrop-blur-lg"
				src={imagem}
			/>
		</>
	);
}
