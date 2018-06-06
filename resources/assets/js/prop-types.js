import PropTypes from 'prop-types';

/**
 * A react-intl message descriptor:
 * https://github.com/yahoo/react-intl/wiki/Components#message-descriptor
 *
 * @type {Function} A React.PropTypes function
 */
export const messageDescriptor = PropTypes.shape({
    defaultMessage: PropTypes.string.isRequired,
    description: PropTypes.string,
    id: PropTypes.string.isRequired
});
