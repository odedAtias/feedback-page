//	Hooks imports
import { useContext } from 'react';
// Components imports
import Card from './shared/Card';
// Icons imports
import { AiOutlineDelete } from 'react-icons/ai';
// PropTypes
import { PropTypes } from 'prop-types';
// Contexts imports
import FeedbackContext from '../Context/FeedbackContext';

const FeedbackItem = ({ item }) => {
	const { deleteFeedback } = useContext(FeedbackContext);
	const { rating, text } = item;
	return (
		<Card reverse={false}>
			<button onClick={() => deleteFeedback(item.id)} className='close'>
				<AiOutlineDelete color='purple' size='20px' />
			</button>
			<div className='num-display'>{rating}</div>
			<div className='text-display'>{text}</div>
		</Card>
	);
};

FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired,
};

export default FeedbackItem;
