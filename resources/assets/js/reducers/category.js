import { CATEGORY_FETCHED, CATEGORY_UPDATED, CATEGORY_STATE_CLEARED } from '../action-types';

const initialState = {};

export default (state = initialState, action) => {
    const { category, type } = action;
    switch (type) {
        case CATEGORY_FETCHED:
        case CATEGORY_UPDATED:
            return category;
        case CATEGORY_STATE_CLEARED:
            return initialState;
        default:
            return state;
    }

};
