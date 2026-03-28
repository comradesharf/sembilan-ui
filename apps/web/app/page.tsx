import * as motion from "motion/react-m";
import { NextLink } from "@/components/sembilan/link";

export default function Page() {
	return (
		<motion.div>
			<NextLink href="/components/inputs" variant="link">
				Go to inputs
			</NextLink>
		</motion.div>
	);
}
