import axios from 'axios';
import { disableLoadingState } from './loading-state';
import {
    CATEGORIES_FETCHED,
    CATEGORIES_FETCHED_FAILURE,
    CATEGORIES_COUNT_FETCHED,
    VIEW_CATEGORY,
} from 'js/action-types';
import { APP_ENDPOINT } from 'js/constants';
import { getToken } from 'js/actions/authentication/auth.js';
import { categories, categoriesCount } from 'js/services/urls/index.js';

// export const headers = {
//     headers: {
//         'Authorization': `Bearer  ${getToken()}`,
//     }
// };

const categoriesFetched = categories => ({
    type: CATEGORIES_FETCHED,
    payload: categories,
});

const categoriesFetchedFailure = error => ({
    type: CATEGORIES_FETCHED_FAILURE,
    payload: error,
});

export const viewCategory = category => ({
    type: VIEW_CATEGORY,
    category,
});

const categoriesCountFetched = categoriesCount => ({
    type: CATEGORIES_COUNT_FETCHED,
    categoriesCount,
});

export const getCategoriesCount = () => {
    return (dispatch) =>
        axios.get(`${APP_ENDPOINT}${categoriesCount()}`)
        .then(response => { 
            const categoriesCount = response.data.results;
            dispatch(categoriesCountFetched(categoriesCount));
            dispatch(disableLoadingState());
        });
}

export default function getCategories() {
    return (dispatch) =>

        axios.get(`${APP_ENDPOINT}${categories()}`)
        .then(response => { 
            const categories = response.data.results;
            return categories;
        })
        .then(categories => {
            dispatch(categoriesFetched(categories));
            dispatch(disableLoadingState());
        })
        .catch(error => {
            dispatch(categoriesFetchedFailure(error.response.data.error))
            dispatch(disableLoadingState());
        }
        );

}
