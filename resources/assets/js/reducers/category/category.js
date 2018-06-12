import {
    CATEGORY_FETCHED,
    CATEGORY_UPDATED,
    VIEW_CATEGORY,
    CATEGORIES_COUNT_FETCHED,
    CATEGORY_STATE_CLEARED
} from 'js/action-types';

const initialState = {};

export default (state = initialState, action) => {
    const { category, categoriesCount, type } = action;
    switch (type) {
        case CATEGORY_FETCHED:
        case CATEGORY_UPDATED:
            return {...category, ...{action: 'edit'} };
        case VIEW_CATEGORY:
            return {...category, ...{action: 'view', isOpen: true} };
        case CATEGORY_STATE_CLEARED:
            return initialState;
        case CATEGORIES_COUNT_FETCHED: {
            return {'categoriesCount': categoriesCount};
        }
        default:
            return state;
    }
};
