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
    loginPasswordHelp: {
        defaultMessage: 'This is typically the password of the user. Example: "ThisIsMyPassword"',
        id: 'login-password.help'
    },
    loginPasswordLabel: {
        defaultMessage: 'PASSWORD',
        id: 'login-password.label'
    },
    loginPasswordPlaceholder: {
        defaultMessage: 'Password',
        id: 'login-password.placeholder'
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
    loginPassword: {
        help: messages.loginPasswordHelp,
        label: messages.loginPasswordLabel,
        placeholder: messages.loginPasswordPlaceholder
    }
};
