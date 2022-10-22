//Hooks imports
import { useState } from 'react';
// Components imports
import Header from './Components/Header';
import FeedBackItem from './Components/FeedbackItem';
// Services imports
import FeedbackData from './services/FeedbackData';

function App() {
	//App States
	const [feedbacks, setFeedbacks] = useState(FeedbackData);

	return (
		<>
			<Header />
			<div className='container'>
				<FeedBackItem item={feedbacks[0]} />
			</div>
		</>
	);
}

export default App;
