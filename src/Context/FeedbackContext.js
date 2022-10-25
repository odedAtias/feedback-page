import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedbacks, setFeedbacks] = useState([
		{
			id: '1',
			text: 'The item from the context component',
			rating: 3,
		},
	]);
	return (
		<FeedbackContext.Provider value={{ feedbacks }}>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
