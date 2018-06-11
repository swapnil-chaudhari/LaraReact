import axios from 'axios';
import { CATEGORY_UPDATED } from 'js/action-types';
import { APP_ENDPOINT } from 'js/constants';
import { getToken } from 'js/actions/authentication/auth.js';
import { categories } from 'js/services/urls/index.js';

export const categoryUpdated = category => ({
    type: CATEGORY_UPDATED,
    category
});

const sendCategory = category => {
    const formData = new FormData();

    if (category.categoryIcon && category.categoryIcon.name)
        formData.append('categoryIcon', category.categoryIcon, category.categoryIcon.name);

    formData.append('categoryTitle', category.categoryTitle);
    formData.append('categoryDescription', category.categoryDescription);
    if (!category.id) {
        return axios.post(`${APP_ENDPOINT}${categories()}`, formData);
    }

    formData.append('_method', 'PUT');
    return axios.post(`${APP_ENDPOINT}${categories()}/${category.id}`, formData);
}

export const saveCategory = category => dispatch => {
    return sendCategory(category)
    .then((response) => {
        // let updatedCategory = response.data.results;
        console.log(category);
        dispatch(categoryUpdated(category));
        return category;
    });
};