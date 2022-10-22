// Components imports
import FeedBackItem from './FeedbackItem';
// PropTypes
import { PropTypes } from 'prop-types';

const FeedBackList = ({ feedBacks, onDelete }) => {
	if (!feedBacks || feedBacks.length === 0) return <p>No feedback yet</p>;
	return (
		<div className='feedback-list'>
			{feedBacks.map(item => (
				<FeedBackItem key={item.id} item={item} onDelete={onDelete} />
			))}
		</div>
	);
};

FeedBackList.propTypes = {
	feedBacks: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			rating: PropTypes.number.isRequired,
		})
	),
};

export default FeedBackList;
