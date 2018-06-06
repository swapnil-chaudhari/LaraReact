import { Validator } from 'jsonschema';
import reduce from 'lodash.reduce';
import getIn from 'lodash.get';
import { ERROR_CODES } from '../constants';

/**
 * Runs the jsonschema validator with the supplied physical product and schema.
 *
 * @param {!Object} category - Product to validate.
 * @param {!Object} schema - A json schema.
 * @return {Object|null} If there are errors an object containing those errors, otherwise null.
 */
export const getErrors = (category, schema) => {
    const validator = new Validator();

    const validatorResponse = validator.validate(category, schema);
    if (validatorResponse.valid)
        return null;

    return _formatClientErrors(validatorResponse);
};

/**
 * _formatClientErrors formats the response of the jsonschema validator into the shape our
 * application expects.
 *
 * @param {!Array} - jsonschema validator response.
 */
const _formatClientErrors = clientValidatorResponse =>
    clientValidatorResponse.errors.reduce((errors, error) => {
        const field = error.property.split(`${clientValidatorResponse.propertyPath}.`)[1];
        const validator = error.name;
        const validatorValue = error.schema[validator];
        const validatorMessage = `${field} ${error.message}`;
        return _addErrorToErrors(errors, field, validator, validatorValue, validatorMessage);
    }, {});


/**
 * _addErrorToErrors is used by validator response formatter functions to create
 * errors objects with the same shape.
 *
 * @param {!Object} errors - An empty object or an object returned from a previous _addErrorToErrors
 * call.
 * @param {!String} field - Field that was validated.
 * @param {!String} validator - Validator that failed (e.g.: 'required' or 'type').
 * @param {!String} validatorValue - Value of validator that failed.
 * (e.g.: 'true' or 'integer' in { required: true, type: integer }).
 * @param {!String} validatorMessage - A message provided by the validator describing the error.
 * @return {Object} A copy of the errors object param with the added error.
 */
const _addErrorToErrors = (errors, field, validator, validatorValue, validatorMessage) =>
    ({ ...errors, [field]: { validator, validatorValue, validatorMessage } });

/**
 * _getFieldErrorMessage maps validation errors from validateAndSavePhysicalProduct to error
 * message descriptors defined by PhysicalProductForm.
 *
 * @param {!String} field - Field that was validated.
 * @param {!String} validator - Validator that failed (e.g.: 'required' or 'type').
 * @param {!String} validatorValue - Value of validator that failed.
 * (e.g.: 'true' or 'integer' in { required: true, type: integer }).
 * @param {!String} validatorMessage - A message provided by the validator describing the error.
 * @param {!Object} errorMessages - A mapping of error messages to their respective fields
 * @return {Message Descriptor|String} - Message descriptor corresponding to the
 * validateAndSavePhysicalProduct validator error if it can be found, otherwise a string with
 * the message returned by the validator.
 */
const _getFieldErrorMessage = (
        field,
        validator,
        validatorValue,
        validatorMessage,
        errorMessages
    ) =>
    getIn(
        errorMessages,
        [field, validator, validatorValue],
        getIn(
            errorMessages,
            [field, validator, 'default'],
            validatorMessage
        )
    );

/**
 * _getMessagesForErrors translates the supplied fieldErrors to error message strings or message
 * descriptors.
 *
 * @param {!Object} fieldErrors - Validation errors from validateAndSavePhysicalProduct.
 * @param {!Object} errorMessages - A mapping of error messages to their respective fields
 * @return {Object} Message descriptors or message strings for each error in fieldErrors.
 */
export const getMessagesForErrors = (fieldErrors, errorMessages) => {
    if (!fieldErrors) return {};

    return reduce(fieldErrors, (
        fieldErrorMessages, { validator, validatorValue, validatorMessage }, field) => ({
            ...fieldErrorMessages,
            [field]: _getFieldErrorMessage(field, validator, validatorValue, validatorMessage, errorMessages)
        }), {});
};
