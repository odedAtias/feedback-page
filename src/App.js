//Hooks imports
import { useState } from 'react';
// Components imports
import Header from './Components/Header';
import FeedBackList from './Components/FeedbackList';
import FeedbackStats from './Components/FeedbackStats';
import FeedbackForm from './Components/FeedbackForm';
// Services imports
import FeedbackData from './services/FeedbackData';
// npm dependencies imports
import { v4 as uuidv4 } from 'uuid';

function App() {
	//App States
	const [feedbacks, setFeedbacks] = useState(FeedbackData);
	//App Event Handlers

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

	return (
		<>
			<Header />
			<div className='container'>
				<FeedbackForm onAddFeedback={addFeedback} />
				<FeedbackStats feedbacks={feedbacks} />
				<FeedBackList feedBacks={feedbacks} onDeleteFeedback={deleteFeedback} />
			</div>
		</>
	);
}

export default App;
