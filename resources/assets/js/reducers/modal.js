import { CATEGORY_ADD_MODAL_OPENED, CATEGORY_ADD_MODAL_RESET } from '../action-types';

const initialState = {
    isOpen: false,
};

export default (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case CATEGORY_ADD_MODAL_OPENED:
            return { ...state, isOpen: true};
        case CATEGORY_ADD_MODAL_RESET:
            return { ...initialState };
        default:
            return state;
    }

};
