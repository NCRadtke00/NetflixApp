import React from 'react';
import Accordion from "../components/Accordion";
import { FAQS } from '../constants/constants';
import SignupScreen from '../components/SignupScreen/SignupScreen'

function FaqsContainer() {
	return (
		<Accordion>
			<Accordion.Title>Frequently Asked Questions</Accordion.Title>
			{FAQS.map(({ id, header, body }) => (
				<Accordion.Item key={id} id={id}>
					<Accordion.Header id={id}>{header}</Accordion.Header>
					<Accordion.Body id={id}>{body}</Accordion.Body>
				</Accordion.Item>
			))}
			<SignupScreen />
		</Accordion>
	);
}

export default FaqsContainer;
