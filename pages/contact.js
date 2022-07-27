import React from 'react';
import Layout from '../components/layouts';
import ContactsHero from '../components/sections/contact/contacts-hero';
import ContactDetails from '../components/sections/contact/contact-details';
import ContactForm from '../components/Form/contact-form';
import NewContactsD from '../components/sections/contact/new-contacts-d';

const Contact = () => {
	return (
		<Layout>
			<ContactsHero />
			<NewContactsD />
			{/* <ContactForm /> */}
		</Layout>
	);
};

export default Contact;
