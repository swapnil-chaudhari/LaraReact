import PropTypes from 'prop-types';
import React from 'react';
import { Button as BsButton } from 'react-bootstrap';

const Button = (props) => (
    <BsButton { ...props } />
);

Button.displayName = 'Button';

Button.propTypes = {
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    onClick: PropTypes.func,
    /**
     * Defines HTML button type attribute
     * @defaultValue 'button'
     */
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
    bsSize: PropTypes.oneOf(['large', 'medium', 'small', 'xsmall']),
    bsStyle: PropTypes.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger', 'link'])
};

export default Button;