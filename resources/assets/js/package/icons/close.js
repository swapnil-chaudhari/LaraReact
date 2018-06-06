import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon/icon';
import { ICON_IDS } from '../svg-definitions/svgs';
import cx from 'classnames';

const propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
};

const Close = ({ className, onClick }) =>
    <Icon
        className={ cx('Icons-close', className) }
        id={ ICON_IDS.CLOSE }
        onClick={ onClick }
    />;

export default Close;

Close.propTypes = propTypes;