import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const LoadingButton = ({ children, isLoading, onClick, type, dangerStyle, defaultStyle, disabled, classes }) => {
    const classNames = cx(
        'LoadingButton',
        'btn',
        { 'btn-save': classes },
        { 'btn-success': !dangerStyle && !defaultStyle },
        { 'LoadingButton-loading': isLoading },
        { 'btn-danger': defaultStyle }
    );

    const loadingDotClassNames = cx(
        'LoadingButton-loader-dot',
        { 'LoadingButton-loader-dot-dark': dangerStyle || defaultStyle }
    );
    return (
        <button
            className={ classNames }
            disabled={ disabled || isLoading }
            onClick={ onClick }
            type={ type }
        >
            { children }
            <div className="LoadingButton-outer">
                <div className="LoadingButton-dots">
                    <div className={ loadingDotClassNames } />
                    <div className={ loadingDotClassNames } />
                    <div className={ loadingDotClassNames } />
                    <div className={ loadingDotClassNames } />
                    <div className={ loadingDotClassNames } />
                </div>
            </div>
        </button>
    );
};

LoadingButton.propTypes = {
    children: PropTypes.any,
    isLoading: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit']),
    dangerStyle: PropTypes.bool,
    defaultStyle: PropTypes.bool,
    disabled: PropTypes.bool
};

LoadingButton.defaultProps = {
    isLoading: false,
    disabled: false,
    defaultStyle: false,
    type: 'button'
};

export default LoadingButton;
