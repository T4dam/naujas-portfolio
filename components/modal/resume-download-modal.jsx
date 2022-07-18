import React, { useEffect, useState } from 'react';
import { motion, transform } from 'framer-motion';
import Image from 'next/image';
import HelloThere from '/public/images/hellothere.jpeg';
import MainButton from '../button/main-button';

// import Backdrop from '../backdrop';
// import Box from '../box';

const backdropVariants = {
	hidden: {
		y: '-100vw',
	},
	visible: {
		y: 0,
		transition: {
			delay: 0,
			when: 'beforeChildren',
			staggerChildren: 0.1,
		},
	},
};

const ResumeDownloadModal = ({ handleClose, title, text }) => {
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);
	const updateDimensions = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	};

	useEffect(() => {
		window.addEventListener('resize', updateDimensions);
		return () => window.removeEventListener('resize', updateDimensions);
	}, []);

	const dropIn = {
		hidden: {
			y: 250,
			opacity: 0,
		},
		visible: {
			y: width > 700 && height > 400 ? '50%' : '15%',
			opacity: 1,
			transition: {
				duration: 0.1,
				type: 'spring',
				damping: 25,
				stiffness: 500,
			},
		},
		exit: {
			y: '100vh',
			opacity: 0,
		},
	};

	return (
		<motion.div
			className="h-screen w-screen fixed z-[1] top-0 left-0 bg-slate-900/90"
			variants={backdropVariants}
			initial="hidden"
			animate="visible"
			onClick={handleClose}
		>
			<motion.div
				drag
				dragConstraints={{
					top: 200,
					bottom: 300,
					left: -20,
					right: 80,
				}}
				//sekanti eilute neileizia uzsidaryti betkur paspaudus modalo viduje
				onClick={(e) => e.stopPropagation()}
				variants={dropIn}
				initial="hidden"
				animate="visible"
				exit="exit"
				className="bg-white w-[275px] h-[460px] sm:w-[320px] sm:h-[470px] md:w-[630px] md:h-[320px] m-auto rounded-2xl  content-center overflow-hidden relative"
			>
				<div className="w-full h-full flex flex-col md:flex-row">
					<div className="w-full h-[29%] md:w-[45%] md:h-full relative">
						<Image
							src={HelloThere}
							alt={'Hands holding "Hello There" sign'}
							objectFit="cover"
							layout="fill"
							loading={'lazy'}
							placeholder="blur"
						></Image>
					</div>
					<div className="w-full h-[75%] md:w-[65%] md:h-full">
						<motion.button
							whileHover={{
								scale: [1, 1.4, 1.2],
								rotate: [0, 10, -10, 0],
								transition: {
									duration: 0.2,
								},
							}}
							onClick={handleClose}
							className="absolute top-2 right-2 text-black"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-8 w-8"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</motion.button>

						<div className="text-black sm:text-xl  font-black mx-6 mt-4 sm:mt-6 md:mt-12 mb-4 text-left">
							<div class="uppercase tracking-wide text-sm text-[#9333ea] font-semibold">
								The journey begins
							</div>
							<h3 className=" leading-[20px] sm:leading-[25px]">
								Congratulations! We are now one step closer to creating
								something great together
							</h3>
						</div>
						<p className="text-black mb-4 sm:text-md mx-5">
							Thank you for taking the time to review my resume. I look forward
							to any opportunity to discuss what I can do for your company.
						</p>

						<div className="w-full flex justify-center ">
							<button
								onClick={handleClose}
								className="shadow-md bg-green-400 py-2 px-5 sm:px-10 uppercase font-medium rounded-[4px] hover:bg-green-400 text-black transform hover:scale-110 transition ease-out duration-300 mb-4 sm:mb-6 md:mb-12"
							>
								GO back
							</button>
						</div>
					</div>
				</div>
				{/*
                <button onClick={handleClose}>Close</button>

				<p>{text}</p> */}
			</motion.div>
		</motion.div>
	);
};

export default ResumeDownloadModal;
