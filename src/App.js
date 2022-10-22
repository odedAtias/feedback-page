//Hooks imports
import { useState } from 'react';
// Components imports
import Header from './Components/Header';
import FeedBackList from './Components/FeedbackList';
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
				<FeedBackList feedBacks={feedbacks} onDelete={handleFeedbackDelete} />
			</div>
		</>
	);
}

export default App;
