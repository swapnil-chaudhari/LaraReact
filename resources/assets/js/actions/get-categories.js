import axios from 'axios';
import { disableLoadingState } from './loading-state';
import {
    CATEGORIES_FETCHED,
    CATEGORIES_FETCHED_FAILURE,
} from '../action-types';
import { APP_ENDPOINT } from '../constants';
import { getToken } from '../actions/authentication/auth.js';
import { categories } from '../services/urls/index.js';

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
