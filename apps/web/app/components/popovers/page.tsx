"use client";

import { Button } from "@workspace/ui/sembilan/components/button";
import {
	Popover,
	PopoverContent,
	PopoverDescription,
	PopoverHeader,
	PopoverTitle,
	PopoverTrigger,
} from "@workspace/ui/sembilan/components/popover";
import { PlaneIcon } from "lucide-react";

export default function Page() {
	return (
		<div className="flex">
			<div>
				<Popover>
					<PopoverTrigger
						animate={{
							scale: 1,
						}}
						whileTap={{
							scale: 0.6,
						}}
						render={<Button variant="outline" />}
					>
						<PlaneIcon />
					</PopoverTrigger>
					<PopoverContent>
						<PopoverHeader>
							<PopoverTitle>Dimensions</PopoverTitle>
							<PopoverDescription>
								Set the dimensions for the layer.
							</PopoverDescription>
						</PopoverHeader>
					</PopoverContent>
				</Popover>
			</div>
		</div>
	);
}
