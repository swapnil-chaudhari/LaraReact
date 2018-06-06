/**
 * Wrap international formatting to be string-safe.
 *
 * @param {function} intlFormatMessage from context
 * @returns {function} taking a message and returning a translated message
 * if msg is a message descriptor, otherwise returns the value of msg.
 */
export default intlFormatMessage => msg => {
    if (!msg || typeof msg === 'string')
        return msg;

    const { defaultMessage, id, values } = msg;

    return intlFormatMessage({ defaultMessage, id }, values);
};
