import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { Overlay, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';
import Info from '../icons/info';

const Help = (
    {
        children,
        id,
        message,
        overlayClassName,
        overlayType,
        rootClose,
        tooltipPlacement,
        trigger,
        triggerOverride
    }
) => {
    const OverlayClass = overlayType === 'tooltip' ? Tooltip : Popover;
    const content = children || <span><Info /></span>;
    const overlay = (
        <OverlayClass
            id={ id }
            className={ overlayClassName }
        >
            { message }
        </OverlayClass>
    );

    let target;
    if (triggerOverride)
        return (
            <span>
                <Overlay
                    show={ triggerOverride === 'show' }
                    placement={ tooltipPlacement }
                    target={ () => ReactDOM.findDOMNode(target) }
                >
                    { overlay }
                </Overlay>
                <span ref={ element => (target = element) }>
                    { content }
                </span>
            </span>
        );
    return (
        <OverlayTrigger
            overlay={ overlay }
            placement={ tooltipPlacement }
            rootClose={ rootClose }
            trigger={ trigger }
        >
            { content }
        </OverlayTrigger>
    );
};

Help.displayName = 'Help';

Help.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string.isRequired,
    message: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string
    ]),
    overlayClassName: PropTypes.string,
    overlayType: PropTypes.oneOf(['popover', 'tooltip']),
    rootClose: PropTypes.bool,
    tooltipPlacement: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
    trigger: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string
    ]),
    triggerOverride: PropTypes.string
};

Help.defaultProps = {
    overlayType: 'tooltip',
    rootClose: false,
    tooltipPlacement: 'top',
    trigger: ['hover', 'focus']
};

export default Help;