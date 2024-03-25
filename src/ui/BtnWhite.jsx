import React from "react";

export default function BtnWhite({ href, titulo, icone }) {
	return (
		<a
			href={href}
			className="bg-white hover:bg-zinc-950 transition-all duration-500
    py-3 px-6 rounded-full text-zinc-950 hover:text-white flex flex-start justify-between items-center min-w-64">
			{titulo}
			<img src={icone} alt={titulo} />
		</a>
	);
}
