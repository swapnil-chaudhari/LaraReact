import {
    CLEAR_LOGIN_EDITOR,
    LOGIN_FIELD_UPDATED,
    LOGIN_ERROR
} from 'js/action-types';

const initialState = {
    errorCode: null,
    fieldErrors: {},
    loginEdits: {},
};

export default (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case LOGIN_FIELD_UPDATED: {
            const { field, value } = action;
            return {
                ...state,
                loginEdits: {
                    ...state.loginEdits,
                    [field]: value
                }
            };
        }
        case CLEAR_LOGIN_EDITOR:
            return initialState;
        case LOGIN_ERROR: {
            return {
                ...state,
                fieldErrors: {
                    ...action.fieldErrors,
                },
                errorCode: action.errorCode
            };
        }
        default: {
            return state;
        }
    }

};
