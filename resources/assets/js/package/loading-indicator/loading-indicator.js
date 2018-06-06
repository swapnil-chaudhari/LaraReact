import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './loading-indicator.scss';

const LoadingIndicator = (props) => {
    const dotsClasses = classNames('LoadingIndicator-dots',
                                   { 'LoadingIndicator-dots-small': props.small });

    const dotClasses = classNames('LoadingIndicator-loader-dot',
                                  { 'LoadingIndicator-loader-dot-small': props.small });

    const top = props.top || 0;

    return (
        <div className="LoadingIndicator">
            <div className="LoadingIndicator-outer" style={ { top } }>
                <div className={ dotsClasses }>
                    <div className={ dotClasses } />
                    <div className={ dotClasses } />
                    <div className={ dotClasses } />
                    <div className={ dotClasses } />
                    <div className={ dotClasses } />
                </div>
            </div>
        </div>
    );
};

LoadingIndicator.displayName = 'LoadingIndicator';

LoadingIndicator.propTypes = {
    small: PropTypes.bool,
    top: PropTypes.number,
};

export default LoadingIndicator;