import { Geist_Mono, Inter } from "next/font/google";

import "@workspace/ui/globals.css";
import { cn } from "@workspace/ui/lib/utils";
import { MotionProvider } from "@workspace/ui/sembilan/components/motion-provider";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={cn(
				"antialiased",
				fontMono.variable,
				"font-sans",
				inter.variable,
			)}
		>
			<MotionProvider>
				<NuqsAdapter>
					<body>
						<ThemeProvider>{children}</ThemeProvider>
					</body>
				</NuqsAdapter>
			</MotionProvider>
		</html>
	);
}
