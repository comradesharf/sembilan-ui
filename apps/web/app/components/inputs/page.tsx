"use client";

import { Input } from "@workspace/ui/sembilan/components/input";
import { parseAsString, useQueryState } from "nuqs";

export default function Page() {
	const [placeholder] = useQueryState("placeholder", parseAsString);

	return (
		<div className="h-svh w-svw">
			<Input placeholder={placeholder ?? undefined} />
		</div>
	);
}
