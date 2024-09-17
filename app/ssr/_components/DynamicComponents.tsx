import { unstable_noStore } from "next/cache";
import React from "react";

export default async function DynamicComponents() {
	unstable_noStore();
	// fetch data random joke
	const res = await fetch(
		"https://official-joke-api.appspot.com/jokes/random"
	);
	const data = await res.json();
	return (
		<div>
			DynamicComponents
			<p>{data.setup}</p>
			<p>{data.punchline}</p>
		</div>
	);
}
