import {
    CATEGORY_ADD_MODAL_OPENED,
    CATEGORY_ADD_MODAL_RESET
} from '../action-types';

export const opened = () => ({ type: CATEGORY_ADD_MODAL_OPENED });

export const reset = () => ({ type: CATEGORY_ADD_MODAL_RESET });
