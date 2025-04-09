"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className="bg-white shadow-sm">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					<Link href="/" className="flex items-center">
						<div className="relative h-10 w-10 mr-2">
							<div className="h-10 w-10 bg-teal-600 rounded-full flex items-center justify-center">
								<span className="text-white font-bold">JS</span>
							</div>
						</div>
						<span className="text-xl font-bold text-teal-700">JongerenSupport</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex space-x-8">
						<Link href="/" className="text-gray-600 hover:text-teal-700 font-medium">
							Home
						</Link>
						<Link href="/over-ons" className="text-gray-600 hover:text-teal-700 font-medium">
							Over ons
						</Link>
						<Link href="/contact" className="text-gray-600 hover:text-teal-700 font-medium">
							Contact
						</Link>
					</nav>

					{/* Mobile Menu Button */}
					<button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 text-gray-600"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden py-4 border-t">
						<nav className="flex flex-col space-y-4">
							<Link
								href="/"
								className="text-gray-600 hover:text-teal-700 font-medium"
								onClick={() => setIsMenuOpen(false)}
							>
								Home
							</Link>
							<Link
								href="/over-ons"
								className="text-gray-600 hover:text-teal-700 font-medium"
								onClick={() => setIsMenuOpen(false)}
							>
								Over ons
							</Link>
							<Link
								href="/contact"
								className="text-gray-600 hover:text-teal-700 font-medium"
								onClick={() => setIsMenuOpen(false)}
							>
								Contact
							</Link>
						</nav>
					</div>
				)}
			</div>
		</header>
	)
}
