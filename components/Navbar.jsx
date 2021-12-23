import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link  from "next/link";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<nav className=" shadow-sm fixed w-full z-10" style={{backdropFilter: 'blur(8px)'}} > 
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center  mx-20  justify-between w-full">
							<div className="flex justify-center items-center flex-shrink-0 font-bold text-xl cursor-pointer">
								<Link href="/">
									Alisic Family
								</Link>
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
                                    <Link href="/family/hamza" className="cursor-pointer hover:bg-primary px-3 py-2 rounded-md text-sm font-medium">
                                    Hamza
                                    </Link>
                                    <Link href="/family/esma" className="cursor-pointer hover:bg-primary px-3 py-2 rounded-md text-sm font-medium">
                                    Esma
                                    </Link>
                                    <Link href="/family/halima" className="cursor-pointer hover:bg-primary px-3 py-2 rounded-md text-sm font-medium">
                                    Halima
                                    </Link>
                                    <Link href="/family/tahira" className="cursor-pointer hover:bg-primary px-3 py-2 rounded-md text-sm font-medium">
                                    Tahira
                                    </Link>
                                    <Link href="/family/haris" className="cursor-pointer hover:bg-primary px-3 py-2 rounded-md text-sm font-medium">
                                    Haris
                                    </Link>
									<div tabIndex="0" className="rounded-btn flex-none border-none">
									<select data-choose-theme tabIndex="0" defaultValue="Choose A Color Theme" className="select select-bordered w-full max-w-xs">
									<option disabled="disabled">Choose A Color Theme</option> 
									<option value="light">Light</option>
									<option value="dark">Dark</option>
									<option value="cupcake">Cupcake</option>
									<option value="bumblebee">bumblebee</option>
									<option value="emerald">emerald</option>
									<option value="corporate">corporate</option>
									<option value="synthwave">synthwave</option>
									<option value="retro">retro</option>
									<option value="cyberpunk">cyberpunk</option>
									<option value="valentine">valentine</option>
									<option value="halloween">halloween</option>
									<option value="garden">garden</option>
									<option value="forest">forest</option>
									<option value="aqua">aqua</option>
									<option value="lofi">lofi</option>
									<option value="pastel">pastel</option>
									<option value="fantasy">fantasy</option>
									<option value="wireframe">wireframe</option>
									<option value="black">black</option>
									<option value="luxury">luxury</option>
									<option value="dracula">dracula</option>
									</select>
									</div>
								</div>
							</div>
						</div>
						<div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div ref={ref} className="ml-10 mr-10 flex items-baseline space-x-4 justify-center ">
								<ul>
									<Link href="/family/hamza" >
										<li className="cursor-pointer btn w-full max-w-xs">
											Hamza
										</li>
									</Link>
									
									<Link href="/family/esma" >
										<li className="cursor-pointer btn w-full max-w-xs">
											Esma
										</li>
									</Link>
									<Link href="/family/halima" >
										<li className="cursor-pointer btn w-full max-w-xs">
											Halima
										</li>
									</Link>
									<Link href="/family/haris" >
										<li className="cursor-pointer btn w-full max-w-xs">
											Haris
										</li>
									</Link>
									<Link href="/family/tahira" >
										<li className="cursor-pointer btn w-full max-w-xs">
											Tahira
										</li>
									</Link>
									<li> {/* FIXME: For some reason theme change doesnt work here since there are two select menus??? */}
											<select data-choose-theme  defaultValue="Choose A Color Theme" className="select select-bordered w-full max-w-xs">
												<option disabled="disabled">Choose A Color Theme</option> 
												<option value="light">Light</option>
												<option value="dark">Dark</option>
												<option value="cupcake">Cupcake</option>
												<option value="bumblebee">bumblebee</option>
												<option value="emerald">emerald</option>
												<option value="corporate">corporate</option>
												<option value="synthwave">synthwave</option>
												<option value="retro">retro</option>
												<option value="cyberpunk">cyberpunk</option>
												<option value="valentine">valentine</option>
												<option value="halloween">halloween</option>
												<option value="garden">garden</option>
												<option value="forest">forest</option>
												<option value="aqua">aqua</option>
												<option value="lofi">lofi</option>
												<option value="pastel">pastel</option>
												<option value="fantasy">fantasy</option>
												<option value="wireframe">wireframe</option>
												<option value="black">black</option>
												<option value="luxury">luxury</option>
												<option value="dracula">dracula</option>
											</select>
									</li>
								</ul>
							</div>
						</div>
					)}
				</Transition>
			</nav>
			
		</div>
	);
}

export default Navbar;