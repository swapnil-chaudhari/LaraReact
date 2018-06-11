import axios from 'axios';
import { clearCategoryState } from './clear-category-state';
import getCategories from './get-categories';
import { APP_ENDPOINT } from 'js/constants';
import { enableLoadingState } from './loading-state';
import { categories } from 'js/services/urls/index.js';

export const deleteCategory = id => dispatch => {
    return axios.delete(`${APP_ENDPOINT}${categories()}/${id}`).then((response) => {
        dispatch(clearCategoryState());
        dispatch(enableLoadingState());

        return dispatch(getCategories());
    });
};
