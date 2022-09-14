import React from 'react';
import robot3 from '/public/images/robot3.svg';
import Image from 'next/image';

const Details = () => {
	return (
		<section className="bg-slate-900 h-full w-full text-white">
			<div className="containter h-auto mx-auto flex justify-center">
				<div className=" text-center mb-24 sm:text-left flex flex-col sm:flex-row gap-12  sm:max-w-2xl md:max-w-3xl lg:max-w-5xl justify-center p-4">
					<div className="flex flex-col">
						<div className="flex felx-row justify-center sm:gap-0 sm:flex-col sm:justify-start items-center sm:items-start">
							<div className="sm:mb-4 sm:w-40 basis-full ">
								<div className="text-2xl font-bold">Type</div>
								<div>Front-End</div>
							</div>
							<div className="basis-full">
								<div className="text-2xl font-bold">When</div>
								<div>September 2022</div>
							</div>
						</div>
						<div className="flex self-center sm:self-start h-1 w-full sm:w-32 bg-green-400 mt-3"></div>
					</div>
					<div className="flex flex-col">
						<div className="text-2xl font-bold mb-2">
							Aiddron - new AI powered smart drones
						</div>
						<div className="text-lg text-justify sm:text-left">
							{' '}
							This is a fictional company Aiddron sells drones and offers AI to
							make them self-aware. This project uses 3D object in the hero
							section that can be interacted with. I utilized MidJourney AI to
							create futuristic looking content images. The cards below also use
							3D effects so they can be dragged around and rotated. Furthermore,
							lots of other cool animations were implemented in the process so
							it all combined makes a very futuristic website which is also
							responsive on all screen sizes.
							<br />
							<br />
							Artist who made the 3D model:{' '}
							<a
								href="https://sketchfab.com/3d-models/drone-ce248709dea64ec1844e8dd9b614f7c0"
								target="_blank"
							>
								Renafox
							</a>
							<br />
							Technologies used for this project: HTML, CSS, Javascript, Vite,
							React, React-three-fiber, Framer-motion, Midjourney, TailwindCSS,
							Swiper, Sass.
							<br />
							<br />
							<div className="flex flex-1 justify-start items-center gap-6 flex-wrap">
								<p className="max-w-[300px]">
									Also to make the website more appealing I designed and drew a
									logo using Affinity Designer:
								</p>

								<Image
									src={robot3}
									alt="logo of aiddron page"
									width={250}
									height={200}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Details;
