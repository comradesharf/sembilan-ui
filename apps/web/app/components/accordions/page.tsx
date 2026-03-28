import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@workspace/ui/sembilan/components/accordion";

export default function Page() {
	return (
		<Accordion defaultValue={["item-1"]}>
			<AccordionItem value="item-1">
				<AccordionTrigger>Is it accessible?</AccordionTrigger>
				<AccordionContent>
					Yes. It adheres to the WAI-ARIA design pattern.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
