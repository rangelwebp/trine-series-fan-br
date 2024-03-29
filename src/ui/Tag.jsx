import React from "react";

export default function Tag({ children }) {
	return (
		<span className="bg-zinc-800 text-zinc-400 text-sm font-semibold py-1 px-2 rounded">
			{children}
		</span>
	);
}
