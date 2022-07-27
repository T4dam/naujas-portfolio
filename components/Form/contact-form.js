import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const ContactForm = () => {
	const initialValues = {
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: '',
	};

	const validationSchema = yup.object({
		name: yup
			.string()
			.required('Įveskite savo vardą')
			.min(2, 'Įveskite savo pilną vardą')
			.max(16, 'Vardas negali viršyti 16 simbolių')
			.matches(
				/^[a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ]+$/,
				'Vardas negali turėti kitų simbolių apart raidžių',
			),
		message: yup
			.string()
			.required('Ivęskite žinutę')
			.max(300, 'Vardas negali viršyti 16 simbolių'),

		subject: yup
			.string()
			.required('Įveskite temą')
			.min(2, 'Aiškiai apibrėžkite pokalbio temą')
			.max(24, 'Sutrumpinkite temą')
			.matches(
				/^[a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ]+$/,
				'Temos laukelis negali turėti kitų simbolių apart raidžių',
			),
		email: yup
			.string()
			.required('Įveskite savo el.paštą')
			.email('Pasitikrinkite ar teisingai įvedėte savo el.paštą'),

		phone: yup
			.string()
			.required('Įveskite savo telefono numerį')
			.matches(
				/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
				'Patikrinkite ar teisingai suvedėte telefono numerį',
			)
			.min(8, 'Telefono numerį turi sudaryti bent 8 simboliai')
			.max(12, 'Telefono numeris negali viršyti 12 simbolių'),
	});
	const handleRegister = () => {
		alert('Form submitted');
	};

	const {
		values,
		handleChange,
		errors,
		touched,
		handleBlur,
		isSubmitting,
		handleSubmit,
		setFieldValue,
		setValues,
		isValid,
		dirty,
	} = useFormik({
		initialValues,
		validationSchema,
		onSubmit: handleRegister,
	});

	return (
		<>
			<form
				onSubmit={handleSubmit}
				action="https://formsubmit.co/t4dam94@gmail.com"
				className="max-w-[400px]"
			>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div className="form-control w-full max-w-xs">
						<label htmlFor="name" className="label">
							<span className="label-text text-lg text-white">Vardas</span>
						</label>
						<input
							type="text"
							id="name"
							placeholder="Name"
							name="name"
							value={values.name}
							onChange={handleChange}
							onBlur={handleBlur}
							disabled={isSubmitting}
							className="input text-lg text-black input-bordered rounded-none w-full max-w-xs"
						/>
						{errors.name && touched.name && (
							<p className="text-red-700 text-sm">{errors.name}</p>
						)}
					</div>
					<div className="form-control w-full max-w-xs">
						<label htmlFor="email" className="label">
							<span className="label-text text-lg text-white">El.paštas</span>
						</label>
						<input
							type="email"
							id="email"
							placeholder="Email"
							name="email"
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
							disabled={isSubmitting}
							className="input input-bordered text-lg text-black rounded-none w-full max-w-xs"
						/>
						{errors.email && touched.email && (
							<p className="text-red-700 text-sm">{errors.email}</p>
						)}
					</div>
					<div className="form-control w-full max-w-xs">
						<label htmlFor="subject" className="label">
							<span className="label-text text-lg text-white">Tema</span>
						</label>
						<input
							type="text"
							id="subject"
							placeholder="Subject"
							name="subject"
							value={values.subject}
							onChange={handleChange}
							onBlur={handleBlur}
							disabled={isSubmitting}
							className="input input-bordered text-lg text-black rounded-none w-full max-w-xs"
						/>
						{errors.subject && touched.subject && (
							<p className="text-red-700 text-sm">{errors.subject}</p>
						)}
					</div>
					<div className="form-control w-full max-w-xs">
						<label htmlFor="phone" className="label">
							<span className="label-text text-lg text-white">Telefonas</span>
						</label>
						<input
							type="tel"
							id="phone"
							placeholder="Phone"
							name="phone"
							value={values.phone}
							onChange={handleChange}
							onBlur={handleBlur}
							disabled={isSubmitting}
							className="input input-bordered text-lg text-black rounded-none w-full max-w-xs"
						/>
						{errors.phone && touched.phone && (
							<p className="text-red-700 text-sm">{errors.phone}</p>
						)}
					</div>
				</div>
				<div className="form-control">
					<label htmlFor="message" className="label">
						<span className="label-text text-lg text-white">Žinute</span>
					</label>

					<textarea
						className="textarea textarea-bordered  text-lg text-black rounded-none h-24 w-full"
						id="message"
						placeholder="Message"
						name="message"
						value={values.message}
						onChange={handleChange}
						onBlur={handleBlur}
						disabled={isSubmitting}
					></textarea>
					{errors.message && touched.message && (
						<p className="text-red-700 text-sm">{errors.message}</p>
					)}
				</div>
				<div className="flex justify-between items-center">
					<button
						type="submit"
						className="shadow-md bg-green-400 py-2 px-5 sm:px-10 uppercase font-medium rounded-[4px] hover:bg-green-400 text-black transform hover:scale-110 transition ease-out duration-300"
					>
						Send
					</button>
				</div>
			</form>
		</>
	);
};

export default ContactForm;
