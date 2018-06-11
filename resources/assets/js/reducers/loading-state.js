import { LOADING_STATE_ENABLED, LOADING_STATE_DISABLED } from 'js/action-types';

const initialState = false;

export default (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case LOADING_STATE_ENABLED:
            return true;
        case LOADING_STATE_DISABLED:
            return false;
        default:
            return state;
    }

};
