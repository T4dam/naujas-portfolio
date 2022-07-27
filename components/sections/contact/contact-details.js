import React from 'react';
import Image from 'next/image';
import { ContactForm } from '../../Form/contact-form';

const ContactDetails = () => {
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
						{/* <div className="flex-col justify-center items-center mx-auto max-w-[370px] lg:max-w-[420px]"> */}
						<ContactForm />
						{/* </div> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactDetails;
