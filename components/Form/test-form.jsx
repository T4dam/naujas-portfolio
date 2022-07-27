import React from 'react';

const TestForm = () => {
	return (
		<form
			action="https://formsubmit.co/8a35cbbd78c7c0d799a9abb22ad65087"
			method="POST"
		>
			<input type="text" placeholder="message" name="message" required />
			<input type="email" placeholder="email" name="email" required />
			<input type="hidden" name="_captcha" value="false"></input>
			<button className="text-white" type="submit">
				Send
			</button>
		</form>
	);
};

export default TestForm;
