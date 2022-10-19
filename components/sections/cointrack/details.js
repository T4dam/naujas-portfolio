import React from 'react';

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
								<div>August 2022</div>
							</div>
						</div>
						<div className="flex self-center sm:self-start h-1 w-full sm:w-32 bg-green-400 mt-3"></div>
					</div>
					<div className="flex flex-col">
						<div className="text-2xl font-bold mb-2">
							CoinTacker - live cryptocurrency price tracker
						</div>
						<div className="text-lg text-justify sm:text-left">
							{' '}
							This is live cryptocurrency price tracker application which was
							created for demo purposes. It uses Axios to fetch Coingecko API
							and get live cryptocurrency price data. Also the project uses
							react-chart.js-2 library to create beautiful charts with
							animations. Website is made fully responsive on smaller screens
							and has beautiful loading animations. All this was done in
							React.js.
							<br />
							<br />
							Technologies used for this project: HTML, CSS, Javascript,
							React.js, Coingecko API, React-chartjs-2, react-icons, Axios,
							React Router, Dompurify, Moment.js
							<br />
							<br />
							<p>
								You can check out the website here:{' '}
								<a
									href="https://cointrack-rho.vercel.app/"
									className="underline underline-offset-2"
								>
									demo page
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Details;
