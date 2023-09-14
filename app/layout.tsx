import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { navigation } from './utils/navigations'
import { LiaRupeeSignSolid } from 'react-icons/lia'
import { BsSearch } from 'react-icons/bs'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import Link from 'next/link'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500'] })

export const metadata: Metadata = {
	title: 'E-Commerce',
	description: 'E-Commerce',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	console.log(navigation)
	return (
		<html lang="en">
			<body className={roboto.className}>
				<div className="bg-white">
					<header className="relative bg-white">
						<p className="flex h-8 items-center justify-center bg-indigo-700 px-4 text-sm font-thin text-white sm:px-6 lg:px-8">
							Get free delivery on orders over &nbsp;
							<LiaRupeeSignSolid
								size={18}
							/>
							1000
						</p>
						<nav className="h-16 bg-white-500">
							<div className="flex justify-between w-full">
								<ul className="flex justify-evenly items-center w-2/6 h-16">
									<li>
										<img 
											className="w-10"
											src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/w4n7ive2c3mwporkodk3" 
											alt="brand-icon" 
										/>
									</li>
									<li>
										<Link href={'/'}>Women</Link>
									</li>
									<li>
										<Link href={'/'}>Men</Link>
									</li>
									<li>
										<Link href={'/'}>Company</Link>
									</li>
									<li>
										<Link href={'/'}>Stores</Link>
									</li>
								</ul>
								<ul className="flex justify-evenly items-center w-1/4 h-16">
									<li>
										<Link href={'/'}>Sign In</Link>
									</li>
									<li className="h-6 w-px bg-gray-300"></li>
									<li>
										<Link href={'/'}>Create Account</Link>
									</li>
									<li>
										<BsSearch
											size={20}
											className="cursor-pointer"
										/>
									</li>
									<li>
										<HiOutlineShoppingBag
											size={22}
											className="cursor-pointer"
										/>
									</li>
								</ul>
							</div>
						</nav>
						{children}
					</header>
				</div>
			</body>
		</html>
	)
}
