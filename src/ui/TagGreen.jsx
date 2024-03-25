import React from "react";

export default function TagGreen({ children }) {
	return (
		<span className="bg-emerald-500 text-emerald-800 text-sm font-semibold py-1 px-2 rounded">
			{children}
		</span>
	);
}
