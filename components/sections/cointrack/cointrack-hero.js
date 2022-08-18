import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
// import dogma from '/public/images/dogma.jpeg';
import CoinTrackerBannerImg from '/public/images/cointrackhero.jpg';

const CoinTrackHero = () => {
	return (
		<section className="bg-slate-900 h-full w-full text-white">
			<div className="container flex-col w-full h-full mx-auto flex p-4 sm:p-0 md:p-4 items-center">
				<motion.div
					whileHover={{
						position: 'relative',
						zIndex: 1,
						scale: [1, 1.4, 1.2],
						rotate: [0, 10, -10, 0],
						transition: {
							duration: 0.2,
						},
					}}
					className="mt-6 self-start"
				>
					<Link href={'/portfolio'}>
						<button className="flex">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 mr-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
								/>
							</svg>
							Go back
						</button>
					</Link>
				</motion.div>
				<div className="h-[500px] w-full max-w-5xl mx-auto  mt-14 mb-24 relative rounded-xl overflow-hidden">
					<Image
						src={CoinTrackerBannerImg}
						alt="Cover art of Dogma group members"
						layout="fill"
						objectFit="cover"
						loading={'lazy'}
						placeholder="blur"
					/>
				</div>
			</div>
		</section>
	);
};

export default CoinTrackHero;
