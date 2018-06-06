import PropTypes from 'prop-types';
import React from 'react';
import { ICON_IDS } from '../svg-definitions/svgs';
import values from 'lodash.values';

const Icon = ({
    className,
    id,
    width,
    height,
    x,
    y,
    onClick
}) =>
    <svg
        className={ className }
        onClick={ onClick }
        width={ width }
        height={ height }
        x={ x }
        y={ y }
    >
        <use xlinkHref={ `#${id}` } />
    </svg>;

Icon.displayName = 'Icon';

Icon.propTypes = {
    className: PropTypes.string,
    // these map to the IDs in the svg definitions
    id: PropTypes.oneOf(values(ICON_IDS)),
    width: PropTypes.number,
    height: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    onClick: PropTypes.func
};

Icon.defaultProps = {
    className: ''
};

export default Icon;