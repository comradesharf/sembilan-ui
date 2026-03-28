"use client";

import type { useRender } from "@base-ui/react/use-render";
import * as SField from "@workspace/ui/original/components/field";
import type { MotionProps } from "motion/react";
import * as motion from "motion/react-m";
import type React from "react";

const FieldSet = motion.create(SField.FieldSet) as React.ComponentType<
	MotionProps & useRender.ComponentProps<typeof SField.FieldSet>
>;

const FieldLegend = motion.create(SField.FieldLegend) as React.ComponentType<
	MotionProps & useRender.ComponentProps<typeof SField.FieldLegend>
>;

const FieldGroup = motion.create(SField.FieldGroup) as React.ComponentType<
	MotionProps & useRender.ComponentProps<typeof SField.FieldGroup>
>;

const FieldContent = motion.create(SField.FieldContent) as React.ComponentType<
	MotionProps & useRender.ComponentProps<typeof SField.FieldContent>
>;

const FieldLabel = motion.create(SField.FieldLabel) as React.ComponentType<
	MotionProps & useRender.ComponentProps<typeof SField.FieldLabel>
>;

const FieldTitle = motion.create(SField.FieldTitle) as React.ComponentType<
	MotionProps & useRender.ComponentProps<typeof SField.FieldTitle>
>;

const FieldDescription = motion.create(
	SField.FieldDescription,
) as React.ComponentType<
	MotionProps & useRender.ComponentProps<typeof SField.FieldDescription>
>;

const FieldSeparator = motion.create(
	SField.FieldSeparator,
) as React.ComponentType<
	MotionProps & useRender.ComponentProps<typeof SField.FieldSeparator>
>;

const FieldError = motion.create(SField.FieldError) as React.ComponentType<
	MotionProps & useRender.ComponentProps<typeof SField.FieldError>
>;

const Field = motion.create(SField.Field) as React.ComponentType<
	MotionProps & useRender.ComponentProps<typeof SField.Field>
>;

export {
	Field,
	FieldContent,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldLegend,
	FieldSeparator,
	FieldSet,
	FieldTitle,
};
