import Image from "next/image"

export default function AboutUs() {
	return (
		<div className="container mx-auto px-4 py-12">
			<h1 className="section-title text-center">Over Ons</h1>

			<div className="grid md:grid-cols-2 gap-12 items-center my-12">
				<div className="relative h-64 md:h-96">
					<Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1orw58sF1YsDub-xRVeXiS_qh1nyI7ZEvQ&s" alt="Ons team" fill className="object-cover rounded-lg" />
				</div>
				<div>
					<h2 className="text-2xl font-bold text-teal-700 mb-4">Onze missie</h2>
					<p className="text-gray-600 mb-6">
						Bij JongerenSupport geloven we dat elke jongere het verdient om de juiste ondersteuning te krijgen. Onze
						missie is om jongeren die een steuntje in de rug nodig hebben te helpen met praktische zaken zoals het
						vinden van werk of een opleiding, het regelen van administratie en het bieden van een luisterend oor.
					</p>
					<p className="text-gray-600">
						We zijn opgericht in 2018 en hebben sindsdien al honderden jongeren geholpen om hun weg te vinden in de
						maatschappij. Ons team bestaat uit ervaren begeleiders die met passie en toewijding werken om het verschil
						te maken in het leven van jongeren.
					</p>
				</div>
			</div>

			<div className="my-12">
				<h2 className="text-2xl font-bold text-teal-700 mb-6">Wat we doen</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<div className="card">
						<h3 className="text-xl font-semibold mb-2 text-teal-700">Persoonlijke begeleiding</h3>
						<p className="text-gray-600">
							We bieden één-op-één begeleiding aan jongeren die worstelen met verschillende uitdagingen. Onze
							begeleiders luisteren, adviseren en helpen bij het zetten van concrete stappen.
						</p>
					</div>

					<div className="card">
						<h3 className="text-xl font-semibold mb-2 text-teal-700">Workshops en trainingen</h3>
						<p className="text-gray-600">
							We organiseren regelmatig workshops over onderwerpen als financiële zelfredzaamheid,
							sollicitatievaardigheden en persoonlijke ontwikkeling.
						</p>
					</div>

					<div className="card">
						<h3 className="text-xl font-semibold mb-2 text-teal-700">Administratieve ondersteuning</h3>
						<p className="text-gray-600">
							We helpen jongeren met het invullen van formulieren, het aanvragen van toeslagen en het op orde brengen
							van hun administratie.
						</p>
					</div>

					<div className="card">
						<h3 className="text-xl font-semibold mb-2 text-teal-700">Bemiddeling</h3>
						<p className="text-gray-600">
							We bemiddelen tussen jongeren en instanties zoals scholen, werkgevers en overheidsinstanties om ervoor te
							zorgen dat ze de juiste ondersteuning krijgen.
						</p>
					</div>
				</div>
			</div>

			<div className="my-12">
				<h2 className="text-2xl font-bold text-teal-700 mb-6">Ons team</h2>
				<div className="grid md:grid-cols-3 gap-8">
					{[1, 2, 3].map((i) => (
						<div key={i} className="card text-center">
							<div className="relative h-40 w-40 mx-auto mb-4 rounded-full overflow-hidden">
								<Image
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSlfS6ETT-HkZawX7WOyuA8U7d0JG-h11QoJ_OIiwbUsWVkz4w25ep4xVls0f9bNrdDP0&usqp=CAU"
									alt={`Teamlid ${i}`}
									fill
									className="object-cover"
								/>
							</div>
							<h3 className="text-xl font-semibold text-teal-700">Jan de Vries</h3>
							<p className="text-gray-500 mb-2">Jongerenbegeleider</p>
							<p className="text-gray-600">
								Heeft 10+ jaar ervaring in het werken met jongeren en is gespecialiseerd in loopbaanbegeleiding.
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
