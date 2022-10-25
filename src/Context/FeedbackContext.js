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
			rating: 10,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
		},
		{
			id: '2',
			rating: 9,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
		},
		{
			id: '3',
			rating: 5,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
		},
		{
			id: '4',
			rating: 7,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
		},
		{
			id: '5',
			rating: 2,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
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
