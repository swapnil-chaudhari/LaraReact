import {
    CLEAR_CATEGORY_EDITOR,
    CATEGORY_FIELD_UPDATED,
    CATEGORY_SAVE_ERROR
} from 'js/action-types';

const initialState = {
    errorCode: null,
    fieldErrors: {},
    categoryEdits: {},
};

export default (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case CATEGORY_FIELD_UPDATED: {
            const { field, value } = action;
            return {
                ...state,
                categoryEdits: {
                    ...state.categoryEdits,
                    [field]: value
                }
            };
        }
        case CLEAR_CATEGORY_EDITOR:
            return initialState;
        case CATEGORY_SAVE_ERROR: {
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
