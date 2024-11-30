import PropTypes from 'prop-types'

const PurpleButton = ({ btnTxt }) => {
    return (
        <button className='btn btn-sm bg-purple text-lavender border-none dark:bg-lavender dark:text-purple transition-all duration-700'>
            {btnTxt}
        </button>
    );
};

PurpleButton.propTypes = {
    btnTxt: PropTypes.string
}

export default PurpleButton;