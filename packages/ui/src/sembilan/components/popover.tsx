"use client";

import { mergeProps } from "@base-ui/react";
import { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import { cn } from "@workspace/ui/lib/utils";
import * as SPopover from "@workspace/ui/original/components/popover";
import { AnimatePresence, type MotionProps } from "motion/react";
import * as motion from "motion/react-m";
import * as React from "react";
import { use } from "react";

const DialogContext = React.createContext<{
	open: boolean;
	setOpen: React.Dispatch<boolean>;
}>({
	open: false,
	setOpen: () => {},
});

function Popover(props: React.ComponentProps<typeof SPopover.Popover>) {
	const [open, setOpen] = React.useState(false);

	return (
		<DialogContext value={{ open, setOpen }}>
			<SPopover.Popover
				{...mergeProps(props, {
					open,
					onOpenChange: setOpen,
				})}
			/>
		</DialogContext>
	);
}

const PopoverTrigger = motion.create(
	SPopover.PopoverTrigger,
) as React.ComponentType<
	Omit<PopoverPrimitive.Trigger.Props, keyof MotionProps> & MotionProps
>;

const $Popover = motion.create(PopoverPrimitive.Popup) as React.ComponentType<
	Omit<PopoverPrimitive.Popup.Props, keyof MotionProps> & MotionProps
>;

function PopoverContent({
	className,
	align = "center",
	alignOffset = 0,
	side = "bottom",
	sideOffset = 4,
	...props
}: PopoverPrimitive.Popup.Props &
	Pick<
		PopoverPrimitive.Positioner.Props,
		"align" | "alignOffset" | "side" | "sideOffset"
	> &
	MotionProps) {
	const { open } = use(DialogContext);
	return (
		<AnimatePresence>
			{open ? (
				<PopoverPrimitive.Portal keepMounted>
					<PopoverPrimitive.Positioner
						align={align}
						alignOffset={alignOffset}
						side={side}
						sideOffset={sideOffset}
						className="isolate z-50"
					>
						<$Popover
							data-slot="popover-content"
							className={cn(
								"z-50 flex w-72 origin-(--transform-origin) flex-col gap-2.5 rounded-lg bg-popover p-2.5 text-popover-foreground text-sm shadow-md outline-hidden ring-1 ring-foreground/10",
								className,
							)}
							{...props}
						/>
					</PopoverPrimitive.Positioner>
				</PopoverPrimitive.Portal>
			) : null}
		</AnimatePresence>
	);
}

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
	DialogContext,
	Popover,
	PopoverContent,
	PopoverDescription,
	PopoverHeader,
	PopoverTitle,
	PopoverTrigger,
};
