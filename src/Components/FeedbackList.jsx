// Components imports
import FeedbackItem from './FeedbackItem';
// PropTypes
import { PropTypes } from 'prop-types';
// Framer motion
import { motion, AnimatePresence, animate } from 'framer-motion';

const FeedbackList = ({ feedbacks, onDeleteFeedback }) => {
	if (!feedbacks || feedbacks.length === 0) return <p>No feedback yet</p>;
	//Animations
	return (
		<AnimatePresence>
			<div className='feedback-list'>
				{feedbacks.map(item => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						layout>
						<FeedbackItem
							key={item.id}
							item={item}
							onDeleteFeedback={onDeleteFeedback}
						/>
					</motion.div>
				))}
			</div>
		</AnimatePresence>
	);
};

FeedbackList.propTypes = {
	feedbacks: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			rating: PropTypes.number.isRequired,
		})
	),
};

export default FeedbackList;
