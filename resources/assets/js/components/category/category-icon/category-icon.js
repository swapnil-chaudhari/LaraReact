import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormField from '../../../package/form-field/form-field';
import ImageUpload from '../../../package/image-upload/image-upload';
import * as AppPropTypes from '../../../prop-types';
import { intlShape, intl } from 'react-intl';
import wrapFormatMessage from '../../../utils/wrap-format-message';
import { fieldMessages } from './i18n';


const propTypes = {
    onChange: PropTypes.func.isRequired,
    categoryIcon: PropTypes.string,
    errorMessage: PropTypes.oneOfType([PropTypes.string, AppPropTypes.messageDescriptor])
};

const CategoryIcon = ({
    categoryIcon,
    onChange,
    errorMessage
}, {
    intl: { formatMessage: intlFormatMessage }
}) => {
    const formatMessage = wrapFormatMessage(intlFormatMessage);
    return (
        <FormField
            errorMessage={ formatMessage(errorMessage) }
            help={ formatMessage(fieldMessages.categoryIcon.help) }
            isRequired
            label={ formatMessage(fieldMessages.categoryIcon.label) }
            id="category-icon-input"
        >
            <ImageUpload
                categoryIcon={ categoryIcon }
                onChange={ onChange }
            />
        </FormField>
    );
};

CategoryIcon.propTypes = propTypes;

CategoryIcon.contextTypes = {
    intl: intlShape.isRequired
};

export default CategoryIcon;
