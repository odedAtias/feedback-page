//Hooks imports
import { useContext } from 'react';
// Components imports
import FeedbackItem from './FeedbackItem';
// Framer motion
import { motion, AnimatePresence } from 'framer-motion';
// Context's imports
import FeedbackContext from '../Context/FeedbackContext';

const FeedbackList = () => {
	const { feedbacks } = useContext(FeedbackContext);
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
						<FeedbackItem key={item.id} item={item} />
					</motion.div>
				))}
			</div>
		</AnimatePresence>
	);
};

export default FeedbackList;
