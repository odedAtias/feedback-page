//Hooks imports
import { useState } from 'react';
// Components imports
import Card from './shared/Card';
import Button from './shared/Button';

//Our Component
const FeedbackForm = () => {
	const [text, setText] = useState('');
	const handleTextChange = ({ target: input }) => {
		setText(input.value);
	};
	return (
		<Card>
			<form>
				<h2>How would you rate your service with us?</h2>
				<div className='input-group'>
					<input
						onChange={handleTextChange}
						type='text'
						placeholder='Write a review'
						value={text}
					/>
					<Button type='submit'>Send</Button>
				</div>
			</form>
		</Card>
	);
};

export default FeedbackForm;
