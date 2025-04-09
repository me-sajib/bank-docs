"use client"

import { useState } from "react"

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	})

	const [isSubmitted, setIsSubmitted] = useState(false)

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		// In a real application, you would send this data to your backend
		console.log(formData)
		setIsSubmitted(true)
		setFormData({
			name: "",
			email: "",
			phone: "",
			message: "",
		})
	}

	return (
		<div className="container mx-auto px-4 py-12">
			<h1 className="section-title text-center">Contact</h1>

			<div className="grid md:grid-cols-2 gap-12 my-12">
				<div>
					<h2 className="text-2xl font-bold text-teal-700 mb-6">Neem contact met ons op</h2>
					<p className="text-gray-600 mb-8">
						Heb je vragen of wil je meer informatie over onze diensten? Vul het contactformulier in of neem direct
						contact met ons op via onderstaande gegevens.
					</p>

					<div className="space-y-4">
						<div className="flex items-start">
							<div className="h-10 w-10 bg-teal-100 rounded-full flex items-center justify-center mr-4 mt-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 text-teal-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
							</div>
							<div>
								<h3 className="font-semibold text-teal-700">Adres</h3>
								<p className="text-gray-600">
									Hoofdstraat 123
									<br />
									1234 AB Amsterdam
								</p>
							</div>
						</div>

						<div className="flex items-start">
							<div className="h-10 w-10 bg-teal-100 rounded-full flex items-center justify-center mr-4 mt-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 text-teal-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>
							</div>
							<div>
								<h3 className="font-semibold text-teal-700">Telefoon</h3>
								<p className="text-gray-600">020 - 123 4567</p>
							</div>
						</div>

						<div className="flex items-start">
							<div className="h-10 w-10 bg-teal-100 rounded-full flex items-center justify-center mr-4 mt-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 text-teal-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<div>
								<h3 className="font-semibold text-teal-700">E-mail</h3>
								<p className="text-gray-600">info@jongerensupport.nl</p>
							</div>
						</div>

						<div className="flex items-start">
							<div className="h-10 w-10 bg-teal-100 rounded-full flex items-center justify-center mr-4 mt-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 text-teal-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<div>
								<h3 className="font-semibold text-teal-700">Openingstijden</h3>
								<p className="text-gray-600">
									Maandag t/m vrijdag: 9:00 - 17:00
									<br />
									Weekend: Gesloten
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="bg-white p-8 rounded-lg shadow-md">
					{isSubmitted ? (
						<div className="text-center py-8">
							<div className="h-16 w-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-8 w-8 text-teal-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-teal-700 mb-2">Bedankt voor je bericht!</h3>
							<p className="text-gray-600 mb-4">We nemen zo snel mogelijk contact met je op.</p>
							<button onClick={() => setIsSubmitted(false)} className="text-teal-600 hover:text-teal-800 underline">
								Nieuw bericht versturen
							</button>
						</div>
					) : (
						<form onSubmit={handleSubmit}>
							<h2 className="text-2xl font-bold text-teal-700 mb-6">Stuur ons een bericht</h2>

							<div className="mb-4">
								<label htmlFor="name" className="block text-gray-700 font-medium mb-2">
									Naam
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
									required
								/>
							</div>

							<div className="mb-4">
								<label htmlFor="email" className="block text-gray-700 font-medium mb-2">
									E-mail
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
									required
								/>
							</div>

							<div className="mb-4">
								<label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
									Telefoonnummer
								</label>
								<input
									type="tel"
									id="phone"
									name="phone"
									value={formData.phone}
									onChange={handleChange}
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
								/>
							</div>

							<div className="mb-6">
								<label htmlFor="message" className="block text-gray-700 font-medium mb-2">
									Bericht
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									rows="4"
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
									required
								></textarea>
							</div>

							<button type="submit" className="btn-primary w-full">
								Versturen
							</button>
						</form>
					)}
				</div>
			</div>

		</div>
	)
}
