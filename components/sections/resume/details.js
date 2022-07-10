import React, { useState } from 'react';
import Image from 'next/image';
import Script from 'next/script';
// import ResumeDownloadModal from '../../modal/resume-download-modal';
// import { AnimatePresence } from 'framer-motion';

const Details = () => {
	// const [modalOpen, setModalOpen] = useState(false);

	// const close = () => setModalOpen(false);
	// const open = () => setModalOpen(true);

	const buttonModal = () => {
		// modalOpen ? close() : open();
		frame();
	};

	let end = Date.now() + 3 * 1000;
	let colors = ['#9333eb', '#ffffff'];
	const frame = () => {
		confetti({
			particleCount: 2,
			angle: 60,
			spread: 55,
			origin: { x: 0 },
			colors: colors,
		});
		confetti({
			particleCount: 2,
			angle: 120,
			spread: 55,
			origin: { x: 1 },
			colors: colors,
		});

		if (Date.now() < end) {
			requestAnimationFrame(frame);
		}
	};

	return (
		<section className="bg-slate-900 h-full w-full  text-white">
			<div className=" w-full h-full mx-auto flex justify-center p-4 sm:p-0 md:p-4 items-center max-w-[640px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:lg:max-w-[1152px] ">
				<div className=" container w-full flex flex-col  md:flex-row justify-center items-center mb-12 gap-12">
					<div className="md:basis-full w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[400px]lg:w-[700px] lg:h-[500px] relative">
						<Image
							src="/images/files.svg"
							alt="Illustrtion of CV document"
							layout="fill"
						/>
					</div>
					<div className="basis-full">
						<div className="flex-col justify-center items-center mx-auto max-w-[370px] lg:max-w-[420px]">
							<div className="font-bold  text-4xl mb-3 text-end sm:text-left">
								A developer with a passion for code
							</div>
							<div className="flex-grow text-justify sm:text-left mb-4">
								Front-end developer with a desire to write quality code and to
								create an amazing user experience. I{`'`}m looking for
								opportunities to grow and create something meaningful.
								<br />
								If you feel like you{`'`}re looking to hire someone like me,
								please don{`'`}t hesitate. Grab a copy of my resume and let{`'`}
								s talk.
							</div>
							<Script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></Script>
							<a href="/T.Delininkaitis.pdf" attributes-list download>
								<button
									onClick={() => buttonModal()}
									className=" flex items-center shadow-md bg-green-400 py-2 px-5 sm:px-10 uppercase font-medium rounded-[4px] hover:bg-green-400 text-black transform hover:scale-110 transition ease-out duration-300"
								>
									<p>Download Resume</p>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 ml-1"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
										/>
									</svg>
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* <AnimatePresence
				//išjungti bet kokią pradinę animaciją vaikams, esantiems pirmą kartą atvaizduojant komponentą.
				initial={false}
				// vienu metu atvaizduokite tik vieną komponentą
				//Išeinantis komponentas baigs savo išėjimą
				//animaciją prieš atvaizduojant įeinantį komponentą
				exitBeforeEnter={true}
				//įvyksta, kai visi išeinantys nodes baigia animaciją.
				onExitComplete={() => null}
			>
				{modalOpen && (
					<ResumeDownloadModal modalOpen={modalOpen} handleClose={close} />
				)}
			</AnimatePresence> */}
		</section>
	);
};

export default Details;
