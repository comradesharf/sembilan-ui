"use client";

import { mergeProps } from "@base-ui/react";
import { useRender } from "@base-ui/react/use-render";
import { cn } from "@workspace/ui/lib/utils";
import type * as SCard from "@workspace/ui/original/components/card";
import type { MotionProps } from "motion/react";
import * as motion from "motion/react-m";
import type React from "react";

const Card = motion.create(function Card({
	render,
	className,
	size = "default",
	...props
}: useRender.ComponentProps<typeof SCard.Card>) {
	const defaultProps: useRender.ElementProps<typeof SCard.Card> = {
		className: cn(
			"group/card flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-card-foreground text-sm ring-1 ring-foreground/10 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
			className,
		),
	};

	return useRender({
		render,
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		state: {
			slot: "card",
			size,
		},
	});
}) as React.ComponentType<
	MotionProps & useRender.ComponentProps<typeof SCard.Card>
>;

const CardHeader = motion.create(function Card({
	render,
	className,
	...props
}: useRender.ComponentProps<typeof SCard.CardHeader>) {
	const defaultProps: useRender.ElementProps<typeof SCard.CardHeader> = {
		className: cn(
			"group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] group-data-[size=sm]/card:px-3 [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3",
			className,
		),
	};

	return useRender({
		render,
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		state: {
			slot: "card-header",
		},
	});
}) as React.ComponentType<
	MotionProps & useRender.ComponentProps<typeof SCard.CardHeader>
>;

const CardTitle = motion.create(function Card({
	render,
	className,
	...props
}: useRender.ComponentProps<typeof SCard.CardTitle>) {
	const defaultProps: useRender.ElementProps<typeof SCard.CardTitle> = {
		className: cn(
			"font-heading font-medium text-base leading-snug group-data-[size=sm]/card:text-sm",
			className,
		),
	};

	return useRender({
		render,
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		state: {
			slot: "card-title",
		},
	});
}) as React.ComponentType<
	MotionProps & useRender.ComponentProps<typeof SCard.CardTitle>
>;

const CardDescription = motion.create(function Card({
	render,
	className,
	...props
}: useRender.ComponentProps<typeof SCard.CardDescription>) {
	const defaultProps: useRender.ElementProps<typeof SCard.CardDescription> = {
		className: cn("text-muted-foreground text-sm", className),
	};

	return useRender({
		render,
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		state: {
			slot: "card-description",
		},
	});
}) as React.ComponentType<
	MotionProps & useRender.ComponentProps<typeof SCard.CardDescription>
>;

const CardAction = motion.create(function Card({
	render,
	className,
	...props
}: useRender.ComponentProps<typeof SCard.CardAction>) {
	const defaultProps: useRender.ElementProps<typeof SCard.CardAction> = {
		className: cn(
			"col-start-2 row-span-2 row-start-1 self-start justify-self-end",
			className,
		),
	};

	return useRender({
		render,
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		state: {
			slot: "card-action",
		},
	});
}) as React.ComponentType<
	MotionProps & useRender.ComponentProps<typeof SCard.CardAction>
>;

const CardContent = motion.create(function Card({
	render,
	className,
	...props
}: useRender.ComponentProps<typeof SCard.CardContent>) {
	const defaultProps: useRender.ElementProps<typeof SCard.CardContent> = {
		className: cn("px-4 group-data-[size=sm]/card:px-3", className),
	};

	return useRender({
		render,
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		state: {
			slot: "card-content",
		},
	});
}) as React.ComponentType<
	MotionProps & useRender.ComponentProps<typeof SCard.CardContent>
>;

const CardFooter = motion.create(function Card({
	render,
	className,
	...props
}: useRender.ComponentProps<typeof SCard.CardFooter>) {
	const defaultProps: useRender.ElementProps<typeof SCard.CardFooter> = {
		className: cn(
			"flex items-center rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/card:p-3",
			className,
		),
	};

	return useRender({
		render,
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		state: {
			slot: "card-footer",
		},
	});
}) as React.ComponentType<
	MotionProps & useRender.ComponentProps<typeof SCard.CardFooter>
>;

export {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
};
