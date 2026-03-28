"use client";

import type { useRender } from "@base-ui/react/use-render";
import * as SInput from "@workspace/ui/original/components/input";
import type { MotionProps } from "motion/react";
import * as motion from "motion/react-m";
import type * as React from "react";

const Input = motion.create(SInput.Input) as React.ComponentType<
	useRender.ComponentProps<typeof SInput.Input> & MotionProps
>;

export { Input };
