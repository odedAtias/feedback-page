// npm dependencies imports
import { AiFillInfoCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const AboutIconLink = () => {
	return (
		<div className='about-link'>
			<Link
				//Nice clean to pass url with parameters, hashes and more properties
				to={{
					pathname: '/about',
					search: '?sort=name',
					hash: '#hello',
				}}>
				<AiFillInfoCircle size={40} />
			</Link>
		</div>
	);
};

export default AboutIconLink;
