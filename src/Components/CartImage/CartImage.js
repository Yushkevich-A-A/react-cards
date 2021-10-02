import React from 'react'
import PropTypes from 'prop-types'

function CartImage(props) {
    const { link } = props;
    return (
        <img src={link} alt="" />
    )
}

CartImage.propTypes = {
    link: PropTypes.string.isRequired,
}

export default CartImage;

