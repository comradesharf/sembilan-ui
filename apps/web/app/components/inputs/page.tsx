"use client";

import { Button } from "@workspace/ui/sembilan/components/button";
import {
	Card,
	CardAction,
	CardHeader,
	CardTitle,
} from "@workspace/ui/sembilan/components/card";
import { Input } from "@workspace/ui/sembilan/components/input";
import { SlidersHorizontal } from "lucide-react";
import { parseAsString, useQueryState } from "nuqs";

export default function Page() {
	const [placeholder] = useQueryState("placeholder", parseAsString);

	return (
		<div className="flex h-svh w-svw items-center justify-center">
			<Card className="fixed top-10 right-10 w-md">
				<CardHeader>
					<CardTitle>Config</CardTitle>
					<CardAction>
						<Button variant="outline" size="icon">
							<SlidersHorizontal />
						</Button>
					</CardAction>
				</CardHeader>
			</Card>
			<div className="w-md max-w-md">
				<Input placeholder={placeholder ?? undefined} />
			</div>
		</div>
	);
}
