[1mdiff --git a/src/Components/FeedbackForm.jsx b/src/Components/FeedbackForm.jsx[m
[1mindex 344b3dd..ba75f89 100644[m
[1m--- a/src/Components/FeedbackForm.jsx[m
[1m+++ b/src/Components/FeedbackForm.jsx[m
[36m@@ -1,5 +1,5 @@[m
 //Hooks imports[m
[31m-import { useState, useContext } from 'react';[m
[32m+[m[32mimport { useState, useContext, useEffect } from 'react';[m
 // Components imports[m
 import Card from './shared/Card';[m
 import Button from './shared/Button';[m
[36m@@ -11,7 +11,7 @@[m [mimport FeedbackContext from '../Context/FeedbackContext';[m
 [m
 //Our Component[m
 const FeedbackForm = () => {[m
[31m-	const { addFeedback } = useContext(FeedbackContext);[m
[32m+[m	[32mconst { addFeedback, feedbackEdit } = useContext(FeedbackContext);[m
 	//App States[m
 	const [text, setText] = useState('');[m
 	const [rating, setRating] = useState(10);[m
[1mdiff --git a/src/Components/FeedbackItem.jsx b/src/Components/FeedbackItem.jsx[m
[1mindex db0740c..41fe172 100644[m
[1m--- a/src/Components/FeedbackItem.jsx[m
[1m+++ b/src/Components/FeedbackItem.jsx[m
[36m@@ -10,14 +10,16 @@[m [mimport { PropTypes } from 'prop-types';[m
 import FeedbackContext from '../Context/FeedbackContext';[m
 [m
 const FeedbackItem = ({ item }) => {[m
[31m-	const { deleteFeedback } = useContext(FeedbackContext);[m
[32m+[m	[32mconst { deleteFeedback, editFeedback } = useContext(FeedbackContext);[m
 	const { rating, text } = item;[m
 	return ([m
 		<Card reverse={false}>[m
[32m+[m			[32m{/* Delete button */}[m
 			<button onClick={() => deleteFeedback(item.id)} className='close'>[m
 				<RiDeleteBinLine color='purple' size='20px' />[m
 			</button>[m
[31m-			<button className='edit'>[m
[32m+[m			[32m{/* Edit button */}[m
[32m+[m			[32m<button onClick={() => editFeedback(item)} className='edit'>[m
 				<RiEditBoxLine color='purple' size='20px' />[m
 			</button>[m
 			<div className='num-display'>{rating}</div>[m
[1mdiff --git a/src/Context/FeedbackContext.js b/src/Context/FeedbackContext.js[m
[1mindex 5e8892e..ab1991f 100644[m
[1m--- a/src/Context/FeedbackContext.js[m
[1m+++ b/src/Context/FeedbackContext.js[m
[36m@@ -7,6 +7,7 @@[m [mconst FeedbackContext = createContext();[m
 [m
 //Our component[m
 export const FeedbackProvider = ({ children }) => {[m
[32m+[m	[32m//Feedbacks data[m
 	const [feedbacks, setFeedbacks] = useState([[m
 		{[m
 			id: '1',[m
[36m@@ -34,6 +35,11 @@[m [mexport const FeedbackProvider = ({ children }) => {[m
 			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',[m
 		},[m
 	]);[m
[32m+[m	[32m//Feedback Edit[m
[32m+[m	[32mconst [FeedbackEdit, setFeedbackEdit] = useState({[m
[32m+[m		[32mitem: {},[m
[32m+[m		[32medit: false,[m
[32m+[m	[32m});[m
 [m
 	//Delete feedback[m
 	const deleteFeedback = id => {[m
[36m@@ -47,10 +53,20 @@[m [mexport const FeedbackProvider = ({ children }) => {[m
 		//adding the new feedback to the start[m
 		setFeedbacks([newFeedback, ...feedbacks]);[m
 	};[m
[32m+[m	[32m//Set item to be updated[m
[32m+[m	[32mconst editFeedback = item => {[m
[32m+[m		[32msetFeedbackEdit({ item, edit: true });[m
[32m+[m	[32m};[m
 	//Render[m
 	return ([m
 		<FeedbackContext.Provider[m
[31m-			value={{ feedbacks, deleteFeedback, addFeedback }}>[m
[32m+[m			[32mvalue={{[m
[32m+[m				[32mfeedbacks,[m
[32m+[m				[32mdeleteFeedback,[m
[32m+[m				[32maddFeedback,[m
[32m+[m				[32meditFeedback,[m
[32m+[m				[32mfeedbackEdit,[m
[32m+[m			[32m}}>[m
 			{children}[m
 		</FeedbackContext.Provider>[m
 	);[m
