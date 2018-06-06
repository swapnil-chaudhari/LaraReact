import { login } from '../../actions/authentication/login';
import {
    clearLoginEditor,
    loginError,
} from '../../actions/authentication/login-editor';
import loginSchema from '../../actions/authentication/data/login-schema.json';
import { toCamel } from '../../utils/object-keys';
import { getErrors } from '../../utils/error-handling';
import omit from 'lodash.omit';
import { ERROR_CODES } from '../../constants';
import { enableLoadingState } from '../../actions/loading-state';
import { dashboard } from '../../services/urls/index.js';
import { hashHistory } from 'react-router';

export const validateAndLogin = () => (dispatch, getState) => {

    const {
        loginEditor: { loginEdits }
    } = getState();

    const loginToValidate = {
        ...loginEdits
    };

    let schema;
    schema = toCamel(loginSchema);

    const errors = getErrors(loginToValidate, schema);

    if (errors) {
        return dispatch(loginError(
            errors,
            ERROR_CODES.VALIDATION_ERROR
        ));
    }

    return dispatch(login(loginToValidate))
        .then((savedCategory) => {
            hashHistory.push(dashboard());
        })
        .catch((err) => {
            dispatch(loginError(err.response.data.results, err.response.status));
        });
}
