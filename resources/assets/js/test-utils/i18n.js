/**
 * formatMessage is a mock version the react-intl formatMessage function.
 *
 * @param {Object} messageDescriptor - A react-intl message descriptor.
 * @returns {String} Value set for the messageDescriptor parameter's defaultMessage key.
 */
export const formatMessage = messageDescriptor => messageDescriptor.defaultMessage;
