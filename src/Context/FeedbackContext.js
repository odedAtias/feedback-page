//	Hooks imports
import { createContext, useState, useEffect } from 'react';
// 	npm dependencies imports
import { v4 as uuidv4 } from 'uuid';
//	Our context
const FeedbackContext = createContext();

//Our component
export const FeedbackProvider = ({ children }) => {
	//Feedbacks data
	const [feedbacks, setFeedbacks] = useState([]);
	//Feedback Edit
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});
	//Loading boolean flag
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchFeedback();
	}, []);

	//Fetch Feedbacks
	const fetchFeedback = async () => {
		const response = await fetch(
			`http://localhost:5000/feedbacks?_sort=id&_order=desc`
		);
		const data = await response.json();
		setFeedbacks(data);
		setIsLoading(false);
	};

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
	//Set item to be updated
	const editFeedback = item => {
		setFeedbackEdit({ item, edit: true });
	};
	//Update feedback
	const updateFeedback = (id, updatedItem) => {
		setFeedbacks(
			feedbacks.map(item =>
				item.id === id ? { ...item, ...updatedItem } : item
			)
		);
	};

	//Render
	return (
		<FeedbackContext.Provider
			value={{
				feedbacks,
				feedbackEdit,
				isLoading,
				deleteFeedback,
				addFeedback,
				editFeedback,
				updateFeedback,
			}}>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
