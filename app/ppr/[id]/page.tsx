import { Suspense } from "react";
import DynamicComponents from "../_components/DynamicComponents";

export async function generateStaticParams() {
	// fetch data from jsonplaceholder
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const posts = (await res.json()) as { id: number; title: string }[];

	return posts.slice(0, 5).map((post: { id: number; title: string }) => ({
		id: post.id.toString(),
	}));
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params }: { params: { id: string } }) {
	const { id } = params;
	const post = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${id}`
	);
	const postData = (await post.json()) as { id: number; title: string };

	return (
		<div>
			Post {postData.id} - {postData.title}
			<Suspense fallback={<div>fetching joke Loading...</div>}>
				<DynamicComponents />
			</Suspense>
		</div>
	);
}
