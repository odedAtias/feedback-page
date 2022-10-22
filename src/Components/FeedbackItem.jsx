// Components imports
import Card from './common/Card';
// Icons imports
import { AiOutlineDelete } from 'react-icons/ai';
// PropTypes
import { PropTypes } from 'prop-types';

const FeedBackItem = ({ item, onDelete }) => {
	const { rating, text } = item;
	return (
		<Card reverse={false}>
			<button onClick={() => onDelete(item.id)} className='close'>
				<AiOutlineDelete color='purple' size='20px' />
			</button>
			<div className='num-display'>{rating}</div>
			<div className='text-display'>{text}</div>
		</Card>
	);
};

FeedBackItem.propTypes = {
	item: PropTypes.object.isRequired,
};

export default FeedBackItem;
