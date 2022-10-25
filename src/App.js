// Components imports
import Header from './Components/Header';
import FeedBackList from './Components/FeedbackList';
import FeedbackStats from './Components/FeedbackStats';
import FeedbackForm from './Components/FeedbackForm';
import About from './Pages/About';
import AboutIconLink from './Components/shared/AboutIconLink';
// npm dependencies imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Context's
import { FeedbackProvider } from './Context/FeedbackContext';

function App() {
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
									<FeedbackForm />
									<FeedbackStats />
									<FeedBackList />
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
