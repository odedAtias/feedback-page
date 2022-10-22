//Hooks imports
import { useState } from 'react';
// Components imports
import Header from './Components/Header';
// Services imports
import FeedbackData from './services/FeedbackData';

function App() {
	//App States
	const [feedbacks, setFeedbacks] = useState(FeedbackData);

	return (
		<>
			<Header />
			<div className='container'></div>
		</>
	);
}

export default App;
