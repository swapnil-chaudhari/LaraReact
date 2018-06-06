import { defineMessages } from 'react-intl';
import errorMessages from '../../../i18n/errors.js';

export const deleteConfirmationMessages = defineMessages({
    header: {
        defaultMessage: 'Delete Category',
        id: 'category-form.delete-confirmation.header'
    },
    main: {
        defaultMessage: 'Are you sure you want to delete your category?',
        id: 'category-form.delete-confirmation.main'
    }
});

export const categoryFormMessages = defineMessages({
    categoryTitleErrorLength: {
        defaultMessage: 'Category title does not meet the maximum length of 50',
        id: 'category-form.category-title-error-length'
    },
    categoryDescriptionErrorLength: {
        defaultMessage: 'Category description does not meet the maximum length of 255',
        id: 'category-form.category-description-error-length'
    }
});

export const fieldErrorMessages = {
    categoryTitle: {
        required: {
            true: errorMessages.requiredField
        },
        minLength: {
            1: errorMessages.requiredField
        },
        maxLength: {
            50: categoryFormMessages.categoryTitleErrorLength
        }
    },
    categoryDescription: {
        required: {
            true: errorMessages.requiredField
        },
        minLength: {
            1: errorMessages.requiredField
        },
        maxLength: {
            255: categoryFormMessages.categoryDescriptionErrorLength
        }
    }
};
