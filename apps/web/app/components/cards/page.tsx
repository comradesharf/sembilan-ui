"use client";

import { Button } from "@workspace/ui/sembilan/components/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@workspace/ui/sembilan/components/card";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldSet,
} from "@workspace/ui/sembilan/components/field";
import { Input } from "@workspace/ui/sembilan/components/input";
import * as motion from "motion/react-m";
import { parseAsStringEnum, useQueryState } from "nuqs";

export default function Page() {
	const [size] = useQueryState(
		"size",
		parseAsStringEnum(["default", "sm"]).withDefault("default"),
	);

	return (
		<div className="h-svh w-svw">
			<Card size={size}>
				<CardHeader>
					<CardTitle>Login to your account</CardTitle>
					<CardDescription>
						Enter your email below to login to your account
					</CardDescription>
					<CardAction>
						<Button variant="link">Sign Up</Button>
					</CardAction>
				</CardHeader>
				<CardContent>
					<motion.form id="form">
						<FieldSet>
							<FieldGroup>
								<Field>
									<FieldLabel htmlFor="email">Email</FieldLabel>
									<Input
										id="email"
										type="email"
										placeholder="m@example.com"
										required
									/>
									<FieldError>Please enter a valid email address.</FieldError>
									<FieldDescription>
										Choose a unique username for your account.
									</FieldDescription>
								</Field>

								<Field>
									<FieldLabel htmlFor="password">Password</FieldLabel>
									<Input id="password" type="password" required />
								</Field>
							</FieldGroup>
						</FieldSet>
					</motion.form>
				</CardContent>
				<CardFooter className="flex-col gap-2">
					<Button type="submit" form="form" className="w-full">
						Login
					</Button>
					<Button className="w-full" variant="outline">
						Login with Google
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
