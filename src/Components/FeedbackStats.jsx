//Hooks imports
import { useContext } from 'react';
// Contexts imports
import FeedbackContext from '../Context/FeedbackContext';

//Average Calculate
const avg = feedbacks => {
	let sum = feedbacks.reduce(
		(sum, current) => sum + parseInt(current.rating),
		0
	);
	//2 fixed(x) return to us x digits after the '.'
	//parse float removing all the trailing zeros after the '.'
	return parseFloat((sum / feedbacks.length).toFixed(2));
};

const FeedbackStats = () => {
	const { feedbacks } = useContext(FeedbackContext);
	return (
		<div className='feedback-stats'>
			<h4>{feedbacks.length} Reviews</h4>
			<h4>Average Rating: {avg(feedbacks)}</h4>
		</div>
	);
};

export default FeedbackStats;
