//	Hooks imports
import { useContext } from 'react';
// Components imports
import Card from './shared/Card';
// Icons imports
import { RiDeleteBinLine, RiEditBoxLine } from 'react-icons/ri';
// PropTypes
import { PropTypes } from 'prop-types';
// Contexts imports
import FeedbackContext from '../Context/FeedbackContext';

const FeedbackItem = ({ item }) => {
	const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
	const { rating, text } = item;
	return (
		<Card reverse={false}>
			{/* Delete button */}
			<button onClick={() => deleteFeedback(item.id)} className='close'>
				<RiDeleteBinLine color='purple' size='20px' />
			</button>
			{/* Edit button */}
			<button onClick={() => editFeedback(item)} className='edit'>
				<RiEditBoxLine color='purple' size='20px' />
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
