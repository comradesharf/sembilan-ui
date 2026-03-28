"use client";

import type { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import * as SPopover from "@workspace/ui/original/components/popover";
import type { MotionProps } from "motion/react";
import * as motion from "motion/react-m";
import type * as React from "react";

const Popover = SPopover.Popover;

const PopoverTrigger = motion.create(
	SPopover.PopoverTrigger,
) as React.ComponentType<
	Omit<PopoverPrimitive.Trigger.Props, keyof MotionProps> & MotionProps
>;

const PopoverContent = motion.create(
	SPopover.PopoverContent,
) as React.ComponentType<
	Omit<
		React.ComponentProps<typeof SPopover.PopoverContent>,
		keyof MotionProps
	> &
		MotionProps
>;

const PopoverHeader = motion.create(
	SPopover.PopoverHeader,
) as React.ComponentType<
	Omit<React.ComponentProps<typeof SPopover.PopoverHeader>, keyof MotionProps> &
		MotionProps
>;

const PopoverTitle = motion.create(
	SPopover.PopoverTitle,
) as React.ComponentType<
	Omit<React.ComponentProps<typeof SPopover.PopoverTitle>, keyof MotionProps> &
		MotionProps
>;

const PopoverDescription = motion.create(
	SPopover.PopoverDescription,
) as React.ComponentType<
	Omit<
		React.ComponentProps<typeof SPopover.PopoverDescription>,
		keyof MotionProps
	> &
		MotionProps
>;

export {
	Popover,
	PopoverContent,
	PopoverDescription,
	PopoverHeader,
	PopoverTitle,
	PopoverTrigger,
};
