//	Hooks imports
import { createContext, useState } from 'react';
// 	npm dependencies imports
import { v4 as uuidv4 } from 'uuid';
//	Our context
const FeedbackContext = createContext();

//Our component
export const FeedbackProvider = ({ children }) => {
	const [feedbacks, setFeedbacks] = useState([
		{
			id: '1',
			text: 'The item from the context component',
			rating: 3,
		},
	]);

	//Delete feedback
	const deleteFeedback = id => {
		if (window.confirm('Are you sure you want to delete ? '))
			setFeedbacks(feedbacks.filter(f => f.id !== id));
	};
	//Add new feedback
	const addFeedback = newFeedback => {
		//set id to the new feedback
		newFeedback.id = uuidv4();
		//adding the new feedback to the start
		setFeedbacks([newFeedback, ...feedbacks]);
	};
	//Render
	return (
		<FeedbackContext.Provider
			value={{ feedbacks, deleteFeedback, addFeedback }}>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
