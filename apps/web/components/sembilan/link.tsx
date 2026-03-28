"use client";

import { cn } from "@workspace/ui/lib/utils";
import { buttonVariants } from "@workspace/ui/original/components/button";
import type { VariantProps } from "class-variance-authority";
import type { MotionProps } from "motion/react";
import * as motion from "motion/react-m";
import Link from "next/link";
import type React from "react";

const NextLink = motion.create(function NextLink({
	variant,
	size,
	className,
	...props
}: React.ComponentProps<typeof Link> & VariantProps<typeof buttonVariants>) {
	return (
		<Link
			{...props}
			className={cn(
				buttonVariants({
					variant,
					size,
					className,
				}),
			)}
		/>
	);
}) as React.ComponentType<
	React.ComponentProps<typeof Link> &
		VariantProps<typeof buttonVariants> &
		MotionProps
>;

export { NextLink };
