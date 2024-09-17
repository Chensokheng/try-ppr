import { Suspense } from "react";
import DynamicComponents from "./_components/DynamicComponents";
import StaticComponent from "./_components/StaticComponent";

export default function Page() {
	return (
		<>
			<h1>Testing</h1>
			<StaticComponent />
			<Suspense fallback={<div> fetching joke Loading...</div>}>
				<DynamicComponents />
			</Suspense>
		</>
	);
}
