"use client";

import { LazyMotion } from "motion/react";
import type * as React from "react";

const loadFeatures = () => import("motion/react").then((mod) => mod.domMax);

export function MotionProvider(props: React.PropsWithChildren) {
	return (
		<LazyMotion strict features={loadFeatures}>
			{props.children}
		</LazyMotion>
	);
}
