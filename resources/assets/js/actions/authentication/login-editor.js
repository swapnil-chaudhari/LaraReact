import {
    CLEAR_LOGIN_EDITOR,
    LOGIN_FIELD_UPDATED,
    LOGIN_ERROR
} from 'js/action-types';

export const clearLoginEditor = () => ({ type: CLEAR_LOGIN_EDITOR });

const _updateLoginField = (field, value) => ({
    type: LOGIN_FIELD_UPDATED,
    field,
    value
});

export const updateLoginField = (field, value) => dispatch =>
    dispatch(_updateLoginField(field, value));

export const loginError = (fieldErrors, errorCode) => ({
    type: LOGIN_ERROR,
    fieldErrors,
    errorCode
});
