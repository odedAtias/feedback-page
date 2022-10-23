//Hooks imports
import { useState } from 'react';
// Components imports
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
// Joi-Validation import
import Joi from 'joi-browser';

//Our Component
const FeedbackForm = () => {
	//App States
	const [text, setText] = useState('');
	const [rating, setRating] = useState(10);
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState('');

	//Joi Validation Schema
	const schema = Joi.object({
		text: Joi.string().min(10).required().label('Feedback'),
	});

	//FeedbackForm Event Handlers
	//Text change
	const handleTextChange = ({ target: input }) => {
		setText(input.value);
		const { error } = Joi.validate({ text: text }, schema);
		if (error) {
			setMessage(error.details[0].message);
			setBtnDisabled(true);
		} else {
			setMessage('');
			setBtnDisabled(false);
		}
	};
	//Rating change
	const handleSelectChange = rating => {
		setRating(rating);
	};
	//submit implement
	const handleSubmit = event => {
		//Submit button by default take round trip to the server ...
		event.preventDefault();
		//Add new feedback
		const newFeedback = {
			//text, = text: text
			text,
			rating,
		};
		console.log(newFeedback);
	};

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate your service with us?</h2>
				<RatingSelect onSelectChange={handleSelectChange} />
				<div className='input-group'>
					<input
						onChange={handleTextChange}
						type='text'
						placeholder='Write a review'
						value={text}
					/>
					<Button type='submit' isDisabled={btnDisabled}>
						Send
					</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	);
};

export default FeedbackForm;
