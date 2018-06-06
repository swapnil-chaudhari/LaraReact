/**
 * @file Provide Product Form Fields with translations for errors and form text.
 */

import { defineMessages } from 'react-intl';


/**
 * We define all messages using message descriptors:
 * https://github.com/yahoo/react-intl/wiki/Components#message-descriptor
 * A message descriptor's description property is optional.
 *
 * We wrap our map of message descriptors with defineMessages so our babel plugin
 * babel-plugin-react-intl can find them. We use babel-plugin-react-intl aggregate
 * all of our application's i18n text so it can be exported for translation.
 *
 * defineMessages returns the object it is called with unmodified i.e.: object => object
 *
 * @type {Object}
 */
/* eslint-disable max-len */
const messages = defineMessages({
    loginEmailHelp: {
        defaultMessage: 'This is typically the email address of user. Example: "sample@gmail.com"',
        id: 'login-email.help'
    },
    loginEmailLabel: {
        defaultMessage: 'EMAIL',
        id: 'login-email.label'
    },
    loginEmailPlaceholder: {
        defaultMessage: 'Email',
        id: 'login-email.placeholder'
    }
});

/**
 *
 * The structure for form field strings like help, label, and note:
 * {
 *     [field]: {
 *         [messageName]: messages.fieldMessageName
 *     }
 * }
 *
 * @type {Object}
 */
export const fieldMessages = {
    loginEmail: {
        help: messages.loginEmailHelp,
        label: messages.loginEmailLabel,
        placeholder: messages.loginEmailPlaceholder
    }
};
