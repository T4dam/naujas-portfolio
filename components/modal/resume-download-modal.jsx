// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import HelloThere from '/public/images/hellothere.jpeg';
// import MainButton from '../button/main-button';

// // import Backdrop from '../backdrop';
// // import Box from '../box';

// const dropIn = {
// 	hidden: {
// 		y: '-100vh',
// 		opacity: 0,
// 	},
// 	visible: {
// 		y: 250,
// 		opacity: 1,
// 		transition: {
// 			duration: 0.1,
// 			type: 'spring',
// 			damping: 25,
// 			stiffness: 500,
// 		},
// 	},
// 	exit: {
// 		y: '100vh',
// 		opacity: 0,
// 	},
// };
// const backdropVariants = {
// 	hidden: {
// 		y: '-100vw',
// 	},
// 	visible: {
// 		y: 0,
// 		transition: {
// 			delay: 0,
// 			when: 'beforeChildren',
// 			staggerChildren: 0.1,
// 		},
// 	},
// };

// const ResumeDownloadModal = ({ handleClose, title, text }) => {
// 	return (
// 		<motion.div
// 			className="h-screen w-screen fixed z-[1] top-0 left-0 bg-slate-900/90"
// 			variants={backdropVariants}
// 			initial="hidden"
// 			animate="visible"
// 			onClick={handleClose}
// 		>
// 			<motion.div
// 				drag
// 				dragConstraints={{
// 					top: 200,
// 					bottom: 300,
// 					left: -20,
// 					right: 80,
// 				}}
// 				//sekanti eilute neileizia uzsidaryti betkur paspaudus modalo viduje
// 				onClick={(e) => e.stopPropagation()}
// 				variants={dropIn}
// 				initial="hidden"
// 				animate="visible"
// 				exit="exit"
// 				className="bg-white w-[275px] h-[450px] sm:w-[500px] sm:h-[250px] md:w-[700px] md:h-[350px] m-auto rounded-2xl  content-center overflow-hidden relative"
// 			>
// 				<div className="w-full h-full flex flex-col md:flex-row">
// 					<div className="w-full h-[25%] md:w-[35%] md:h-full">
// 						<Image
// 							src={HelloThere}
// 							alt={'Hands holding "Hello There" sign'}
// 							objectFit="cover"
// 							loading={'lazy'}
// 							placeholder="blur"
// 						></Image>
// 					</div>
// 					<div className="w-full h-[75%] md:w-[65%] md:h-full">
// 						<motion.button
// 							whileHover={{
// 								scale: [1, 1.4, 1.2],
// 								rotate: [0, 10, -10, 0],
// 								transition: {
// 									duration: 0.2,
// 								},
// 							}}
// 							onClick={handleClose}
// 							className="absolute top-2 right-2 text-black"
// 						>
// 							<svg
// 								xmlns="http://www.w3.org/2000/svg"
// 								className="h-8 w-8"
// 								fill="none"
// 								viewBox="0 0 24 24"
// 								stroke="currentColor"
// 								strokeWidth={2}
// 							>
// 								<path
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 									d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
// 								/>
// 							</svg>
// 						</motion.button>
// 						<h3 className="text-black text-2xl font-black mx-6 mt-12 mb-4 text-center">
// 							a
// 							{/* Congratualations! We are now one step closer to creating something
// 							great together */}
// 						</h3>
// 						<p className="text-black mb-4 text-lg mx-5">
// 							{/* Thank you for taking the time to review my resume. I'm open for
// 							job opportunities and will be waiting for your call. */}
// 						</p>

// 						<div className="w-full flex justify-center ">
// 							<button
// 								onClick={handleClose}
// 								className="shadow-md bg-green-400 py-2 px-5 sm:px-10 uppercase font-medium rounded-[4px] hover:bg-green-400 text-black transform hover:scale-110 transition ease-out duration-300"
// 							>
// 								GO back
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 				{/*
//                 <button onClick={handleClose}>Close</button>

// 				<p>{text}</p> */}
// 			</motion.div>
// 		</motion.div>
// 	);
// };

// export default ResumeDownloadModal;
