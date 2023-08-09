import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Montserrat } from "next/font/google";
import type { AppProps } from "next/app";
import Header from "@/root/components/header";
import Footer from "@/root/components/footer";

const MontSerrat = Montserrat({
	subsets: ["latin"],
	weight: "600",
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div
			className={`flex flex-col max-w-lg overflow-hidden h-screen bg-slate-100 justify-self-center mx-auto text-black ${MontSerrat.className}`}
		>
			<ChakraProvider>
				<div className="top-0 relative">
					<Header />
				</div>
				<div className="flex-1 overflow-y-auto">
					<Component {...pageProps} />
				</div>
				<div className="w-full sticky bottom-0">
					<Footer />
				</div>
			</ChakraProvider>
		</div>
	);
}
