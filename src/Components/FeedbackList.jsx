//Hooks imports
import { useContext } from 'react';
// Components imports
import FeedbackItem from './FeedbackItem';
// Framer motion
import { motion, AnimatePresence } from 'framer-motion';
// Context's imports
import FeedbackContext from '../Context/FeedbackContext';
//Icons imports

const FeedbackList = () => {
	const { feedbacks, isLoading } = useContext(FeedbackContext);
	if (!isLoading && (!feedbacks || feedbacks.length === 0))
		return <p>No feedback yet</p>;

	//Animations
	return isLoading ? (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				marginTop: '50px',
			}}>
			<div class='lds-ring'>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	) : (
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
