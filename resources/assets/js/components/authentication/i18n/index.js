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

export const loginFormMessages = defineMessages({
    loginEmailErrorLength: {
        defaultMessage: 'Login Email does not meet the maximum length of 35',
        id: 'login-form.login-email-error-length'
    },
    loginPasswordErrorLength: {
        defaultMessage: 'Login Password does not meet the maximum length of 16',
        id: 'login-form.login-password-error-length'
    }
});

export const fieldErrorMessages = {
    loginEmail: {
        required: {
            true: errorMessages.requiredField
        },
        minLength: {
            1: errorMessages.requiredField
        },
        maxLength: {
            35: loginFormMessages.loginEmailErrorLength
        }
    },
    loginPassword: {
        required: {
            true: errorMessages.requiredField
        },
        minLength: {
            1: errorMessages.requiredField
        },
        maxLength: {
            16: loginFormMessages.loginPasswordErrorLength
        }
    }
};
