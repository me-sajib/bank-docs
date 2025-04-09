import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "JongerenSupport - Hulp voor jongeren",
	description:
		"Wij bieden ondersteuning aan jongeren met documenten, werk zoeken, school vinden en meer.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="nl">
			<body className={inter.className}>
				<div className="min-h-screen flex flex-col">
					<Navbar />
					<main className="flex-grow">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
