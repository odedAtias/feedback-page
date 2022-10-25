//Hooks imports
import { useState } from 'react';
// Components imports
import Header from './Components/Header';
import FeedBackList from './Components/FeedbackList';
import FeedbackStats from './Components/FeedbackStats';
import FeedbackForm from './Components/FeedbackForm';
import About from './Pages/About';
import AboutIconLink from './Components/shared/AboutIconLink';
// Services imports
import FeedbackData from './Services/FeedbackData';
// npm dependencies imports
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Context's
import { FeedbackProvider } from './Context/FeedbackContext';

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
		<FeedbackProvider>
			<Router>
				<Header />
				<div className='container'>
					<Routes>
						{/* First route */}
						<Route
							exact
							path='/'
							element={
								<>
									<FeedbackForm onAddFeedback={addFeedback} />
									<FeedbackStats feedbacks={feedbacks} />
									<FeedBackList onDeleteFeedback={deleteFeedback} />
								</>
							}></Route>
						{/* Second route */}
						<Route path='/about' element={<About />} />
					</Routes>
				</div>
				<AboutIconLink />
			</Router>
		</FeedbackProvider>
	);
}

export default App;
