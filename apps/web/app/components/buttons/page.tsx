"use client";

import { Button } from "@workspace/ui/sembilan/components/button";
import { parseAsStringEnum, useQueryState } from "nuqs";

export default function Page() {
	const [variant] = useQueryState(
		"variant",
		parseAsStringEnum([
			"default",
			"secondary",
			"ghost",
			"outline",
			"destructive",
			"link",
		]).withDefault("default"),
	);

	const [size] = useQueryState(
		"size",
		parseAsStringEnum([
			"default",
			"xs",
			"sm",
			"lg",
			"icon",
			"icon-xs",
			"icon-sm",
			"icon-lg",
		]).withDefault("default"),
	);

	return (
		<div className="h-svh w-svw">
			<Button variant={variant} size={size}>
				Button
			</Button>
		</div>
	);
}
