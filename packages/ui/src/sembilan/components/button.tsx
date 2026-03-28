"use client";

import type { useRender } from "@base-ui/react/use-render";
import * as SButton from "@workspace/ui/original/components/button";
import type { MotionProps } from "motion/react";
import * as motion from "motion/react-m";
import type * as React from "react";

const Button = motion.create(SButton.Button) as React.ComponentType<
	useRender.ComponentProps<typeof SButton.Button> & MotionProps
>;

export { Button };
