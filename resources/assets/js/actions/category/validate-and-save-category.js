import { saveCategory } from './save-category';
import {
    clearCategoryEditor,
    categorySaveError,
} from './category-editor';
import { reset } from './category-modal';
import { clearCategoryState } from './clear-category-state';
import getCategories from './get-categories';
import categorySchema from './data/category-schema.json';
import { toCamel } from 'js/utils/object-keys';
import { getErrors } from 'js/utils/error-handling';
import omit from 'lodash.omit';
import { ERROR_CODES } from 'js/constants';
import { enableLoadingState } from './loading-state';

export const validateAndSaveCategory = () => (dispatch, getState) => {

    const {
        category: categoryToUpdate,
        categoryEditor: { categoryEdits }
    } = getState();

    const categoryToSave = {
        ...categoryToUpdate,
        ...categoryEdits
    };

    let categoryToValidate = omit(categoryToSave, [
        'id'
    ]);
    let schema;
    schema = toCamel(categorySchema);

    const errors = getErrors(categoryToValidate, schema);

    if (errors) {
        return dispatch(
            categorySaveError(
                errors,
                ERROR_CODES.VALIDATION_ERROR
            )
        );
    }

    return dispatch(saveCategory(categoryToSave))
        .then((savedCategory) => {
            dispatch(clearCategoryEditor());
            dispatch(clearCategoryState());
            dispatch(reset());
            dispatch(enableLoadingState());
            dispatch(getCategories());
        })
        .catch((err) => {
            console.log(err.response);
            dispatch(categorySaveError(err.response.data.results, err.response.status));
        });
}
