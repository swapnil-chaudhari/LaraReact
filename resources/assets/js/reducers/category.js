import {
    CATEGORY_FETCHED,
    CATEGORY_UPDATED,
    CATEGORIES_COUNT_FETCHED,
    CATEGORY_STATE_CLEARED
} from '../action-types';

const initialState = {};

export default (state = initialState, action) => {
    const { category, categoriesCount, type } = action;
    switch (type) {
        case CATEGORY_FETCHED:
        case CATEGORY_UPDATED:
            return category;
        case CATEGORY_STATE_CLEARED:
            return initialState;
        case CATEGORIES_COUNT_FETCHED: {
            return {'categoriesCount': categoriesCount};
        }
        default:
            return state;
    }
};
