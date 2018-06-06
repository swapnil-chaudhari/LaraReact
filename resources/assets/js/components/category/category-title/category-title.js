import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormField from '../../../package/form-field/form-field';
import * as AppPropTypes from '../../../prop-types';
import { intlShape, intl } from 'react-intl';
import wrapFormatMessage from '../../../utils/wrap-format-message';
import { fieldMessages } from './i18n';


const propTypes = {
    onChange: PropTypes.func.isRequired,
    categoryTitle: PropTypes.string,
    errorMessage: PropTypes.oneOfType([PropTypes.string, AppPropTypes.messageDescriptor])
};

const CategoryTitle = ({
    categoryTitle,
    onChange,
    errorMessage
}, {
    intl: { formatMessage: intlFormatMessage }
}) => {
    const formatMessage = wrapFormatMessage(intlFormatMessage);
    return (
        <FormField
            errorMessage={ formatMessage(errorMessage) }
            help={ formatMessage(fieldMessages.categoryTitle.help) }
            isRequired
            label={ formatMessage(fieldMessages.categoryTitle.label) }
            id="category-title-input"
        >

        <input
            className="form-control"
            onChange={ onChange }
            value={ categoryTitle }
            placeholder={ formatMessage(fieldMessages.categoryTitle.placeholder) }
        />
        </FormField>
    );
};

CategoryTitle.propTypes = propTypes;

CategoryTitle.contextTypes = {
    intl: intlShape.isRequired
};

export default CategoryTitle;
