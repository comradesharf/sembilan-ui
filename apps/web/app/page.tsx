import * as motion from "motion/react-m";
import { NextLink } from "@/components/sembilan/link";

export default function Page() {
	return (
		<motion.div>
			<NextLink href="/components/inputs" variant="link">
				Go to inputs
			</NextLink>
			<NextLink href="/components/popovers" variant="link">
				Go to popovers
			</NextLink>
			<NextLink href="/components/cards" variant="link">
				Go to cards
			</NextLink>
		</motion.div>
	);
}
