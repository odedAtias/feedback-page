//PropTypes
import PropTypes from 'prop-types';

const Header = ({ bgColor, textColor }) => {
	// Header Style
	const headerStyles = {
		backgroundColor: bgColor,
		color: textColor,
	};
	return (
		<header style={headerStyles}>
			<div className='container'>
				<h2>Feedbacks User Interface</h2>
			</div>
		</header>
	);
};

Header.defaultProps = {
	bgColor: '#fff',
	textColor: 'rebeccapurple',
};

Header.propTypes = {
	text: PropTypes.string,
	bgColor: PropTypes.string,
	textColor: PropTypes.string,
};

export default Header;
