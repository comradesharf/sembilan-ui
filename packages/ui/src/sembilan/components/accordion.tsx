"use client";

import {
	Accordion as SAccordion,
	AccordionContent as SAccordionContent,
	AccordionItem as SAccordionItem,
	AccordionTrigger as SAccordionTrigger,
} from "@workspace/ui/original/components/accordion";
import type { MotionProps } from "motion/react";
import * as motion from "motion/react-m";
import type * as React from "react";

const Accordion = motion.create(SAccordion) as React.ComponentType<
	Omit<React.ComponentProps<typeof SAccordion>, keyof MotionProps> & MotionProps
>;

const AccordionContent = motion.create(
	SAccordionContent,
) as React.ComponentType<
	Omit<React.ComponentProps<typeof SAccordionContent>, keyof MotionProps> &
		MotionProps
>;

const AccordionTrigger = motion.create(
	SAccordionTrigger,
) as React.ComponentType<
	Omit<React.ComponentProps<typeof SAccordionTrigger>, keyof MotionProps> &
		MotionProps
>;

const AccordionItem = motion.create(SAccordionItem) as React.ComponentType<
	Omit<React.ComponentProps<typeof SAccordionItem>, keyof MotionProps> &
		MotionProps
>;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
