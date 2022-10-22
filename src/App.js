//Hooks imports
import { useState } from 'react';
// Components imports
import Header from './Components/Header';
import FeedBackList from './Components/FeedbackList';
import FeedbackStats from './Components/FeedbackStats';
import FeedbackForm from './Components/FeedbackForm';
// Services imports
import FeedbackData from './services/FeedbackData';

function App() {
	//App States
	const [feedbacks, setFeedbacks] = useState(FeedbackData);
	//App Event Handlers
	const handleFeedbackDelete = id => {
		if (window.confirm('Are you sure you want to delete ? '))
			setFeedbacks(feedbacks.filter(f => f.id !== id));
	};

	return (
		<>
			<Header />
			<div className='container'>
				<FeedbackForm />
				<FeedbackStats feedbacks={feedbacks} />
				<FeedBackList feedBacks={feedbacks} onDelete={handleFeedbackDelete} />
			</div>
		</>
	);
}

export default App;
