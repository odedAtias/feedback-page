//PropTypes
import { PropTypes } from 'prop-types';
//Average Calculate
const avg = feedbacks => {
	let sum = feedbacks.reduce((sum, current) => sum + current.rating, 0);
	//2 fixed(x) return to us x digits after the '.'
	//parse float removing all the trailing zeros after the '.'
	return parseFloat((sum / feedbacks.length).toFixed(2));
};

const FeedbackStats = ({ feedbacks }) => {
	return (
		<div className='feedback-stats'>
			<h4>{feedbacks.length} Reviews</h4>
			<h4>Average Rating: {avg(feedbacks)}</h4>
		</div>
	);
};

FeedbackStats.propTypes = {
	feedbacks: PropTypes.array.isRequired,
};
export default FeedbackStats;
