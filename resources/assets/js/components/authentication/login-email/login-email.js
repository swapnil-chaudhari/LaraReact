import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormField from '../../../package/form-field/form-field';
import * as AppPropTypes from '../../../prop-types';
import { intlShape, intl } from 'react-intl';
import wrapFormatMessage from '../../../utils/wrap-format-message';
import { fieldMessages } from './i18n';


const propTypes = {
    onChange: PropTypes.func.isRequired,
    loginEmail: PropTypes.string,
    errorMessage: PropTypes.oneOfType([PropTypes.string, AppPropTypes.messageDescriptor])
};

const LoginEmail = ({
    loginEmail,
    onChange,
    errorMessage
}, {
    intl: { formatMessage: intlFormatMessage }
}) => {
    const formatMessage = wrapFormatMessage(intlFormatMessage);
    return (
        <FormField
            errorMessage={ formatMessage(errorMessage) }
            help={ formatMessage(fieldMessages.loginEmail.help) }
            isRequired
            label={ formatMessage(fieldMessages.loginEmail.label) }
            id="category-title-input"
        >

        <input
            className="form-control"
            onChange={ onChange }
            value={ loginEmail }
            placeholder={ formatMessage(fieldMessages.loginEmail.placeholder) }
        />
        </FormField>
    );
};

LoginEmail.propTypes = propTypes;

LoginEmail.contextTypes = {
    intl: intlShape.isRequired
};

export default LoginEmail;
