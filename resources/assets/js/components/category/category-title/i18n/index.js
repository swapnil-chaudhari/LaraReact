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
    categoryTitleHelp: {
        defaultMessage: 'This is typically the title of the category. Example: "Science"',
        id: 'category-title.help'
    },
    categoryTitleLabel: {
        defaultMessage: 'CATEGORY TITLE',
        id: 'category-title.label'
    },
    categoryTitlePlaceholder: {
        defaultMessage: 'Category Title',
        id: 'category-title.placeholder'
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
    categoryTitle: {
        help: messages.categoryTitleHelp,
        label: messages.categoryTitleLabel,
        placeholder: messages.categoryTitlePlaceholder
    }
};
