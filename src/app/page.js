import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="container mx-auto px-4 py-8">
			{/* Hero Section */}
			<section className="py-12 md:py-20">
				<div className="grid md:grid-cols-2 gap-8 items-center">
					<div>
						<h1 className="text-4xl md:text-5xl font-bold text-teal-700 mb-4">
							Ondersteuning voor jongeren die een steuntje in de rug nodig
							hebben
						</h1>
						<p className="text-lg text-gray-600 mb-8">
							Wij helpen jongeren met documenten, het vinden van werk of een
							opleiding, en bieden persoonlijke begeleiding bij diverse
							uitdagingen.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Link
								href="/contact"
								className="text-white bg-teal-600 hover:bg-teal-700 font-bold py-2 px-6 rounded-lg transition-colors duration-300 text-center"
							>
								Neem contact op
							</Link>
							<Link
								href="/over-ons"
								className="bg-white border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-bold py-2 px-6 rounded-lg transition-colors duration-300 text-center"
							>
								Meer over ons
							</Link>
						</div>
					</div>
					<div className="relative h-64 md:h-96">
						<Image
							src="https://zakenn.nl/wp-content/uploads/2023/09/Schermafbeelding-2023-09-12-om-15.40.13-1089x730.jpg"
							alt="Jongeren die samen werken"
							fill
							className="object-cover rounded-lg"
							priority
						/>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="py-12 md:py-16">
				<h2 className="section-title text-center">Onze diensten</h2>
				<div className="grid md:grid-cols-3 gap-8 mt-8">
					<div className="card">
						<div className="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 text-teal-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
								/>
							</svg>
						</div>
						<h3 className="text-xl font-semibold mb-2 text-teal-700">
							Hulp met documenten
						</h3>
						<p className="text-gray-600">
							Wij helpen bij het invullen en begrijpen van officiële documenten
							en formulieren.
						</p>
					</div>

					<div className="card">
						<div className="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 text-teal-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<h3 className="text-xl font-semibold mb-2 text-teal-700">
							Werk vinden
						</h3>
						<p className="text-gray-600">
							Ondersteuning bij het zoeken naar werk, het schrijven van CVs en
							voorbereiding op sollicitatiegesprekken.
						</p>
					</div>

					<div className="card">
						<div className="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 text-teal-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path d="M12 14l9-5-9-5-9 5 9 5z" />
								<path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
								/>
							</svg>
						</div>
						<h3 className="text-xl font-semibold mb-2 text-teal-700">
							School en opleiding
						</h3>
						<p className="text-gray-600">
							Advies over opleidingsmogelijkheden en hulp bij het vinden van de
							juiste school of cursus.
						</p>
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="py-12 md:py-16 bg-teal-50 rounded-xl my-8">
				<div className="container mx-auto px-4">
					<h2 className="section-title text-center">
						Wat jongeren over ons zeggen
					</h2>
					<div className="grid md:grid-cols-2 gap-8 mt-8">
						<div className="bg-white p-6 rounded-lg shadow">
							<p className="italic text-gray-600 mb-4">
								Dankzij de hulp van JongerenSupport heb ik eindelijk mijn
								administratie op orde en een baan gevonden die bij me past.
							</p>
							<p className="font-semibold">- Thomas, 22 jaar</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow">
							<p className="italic text-gray-600 mb-4">
								Ze hebben me geholpen met het vinden van een opleiding en alle
								papierwerk dat daarbij kwam kijken. Zonder hen was het me niet
								gelukt.
							</p>
							<p className="font-semibold">- Lisa, 19 jaar</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-12 md:py-16 text-center">
				<h2 className="section-title">Klaar om de volgende stap te zetten?</h2>
				<p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
					Neem vandaag nog contact met ons op voor een vrijblijvend gesprek over
					hoe wij jou kunnen helpen.
				</p>
				<Link href="/contact" className="btn-primary inline-block">
					Contact opnemen
				</Link>
			</section>
		</div>
	);
}
