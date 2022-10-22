//PropTypes
import PropTypes from 'prop-types';

const Header = () => {
	return <div>Header</div>;
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
