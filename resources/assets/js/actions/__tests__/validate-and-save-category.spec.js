import { expect } from 'chai';
import { spy, stub } from 'sinon';
import { Category } from 'lib/it-helpers/factories';
import { ERROR_CODES } from 'src/constants';
import { validateAndSaveCategory } from 'src/actions/validate-and-save-category';
import * as saveCategoryActions from 'src/actions/save-category';
// import * as categoryEditorActions from 'src/actions/category-editor';
import omit from 'lodash.omit';
import Promise from 'bluebird';
import * as errorHandling from 'src/utils/error-handling';
import { toCamel } from 'src/utils/object-keys';
import categorySchema from 'src/actions/data/category-schema.json';
import { reset } from 'src/actions/category-modal';
import { enableLoadingState } from 'src/actions/loading-state';
import getCategories from 'src/actions/get-categories';

describe.only('validateAndSaveCategory', () => {
    describe('when called for a new, valid category without any edits', () => {
        const category = omit(Category(), ['id']);
        const getState = stub().returns({
            category,
            categoryEditor: {
                fieldErrors: {},
                categoryEdits: {}
            }
        });
        const dispatch = spy(() => Promise.resolve(
            Object.assign({}, category, { id: 1234 })
        ));
        const expectedValidationPayload = omit(category, [
            'id'
        ]);
        let errorHandlingSpy;

        const updatedCategory = Category({ categoryTitle: 'updated title' });

       const updatedCategoryResponse = {
            data: {
              results: updatedCategory
            }
        };

        before(() => {
            stub(saveCategoryActions, 'saveCategory').callsFake(
                cat => Promise.resolve(updatedCategory));
            errorHandlingSpy = spy(errorHandling, 'getErrors');
            return validateAndSaveCategory()(dispatch, getState);
        });

        after(() => {
            saveCategoryActions.saveCategory.restore();
            errorHandling.getErrors.restore();
        });

        it('calls getErrors with extraneous properties omittied and create schema',() => {
                except(errorHandlingSpy).to.have.been
                    .calledWith(expectedValidationPayload, toCamel(categoryCreateSchema));
            }
        );

        // it('dispatches saveCategory with the original category', () => {
        //     except(saveCategoryActions.saveCategory).to.have.been.calledWith(category);
        // });

        // it('clears any previous edits or errors', () => {
        //     except(dispatch).to.have.been.calledWith(categoryEditorActions.clearCategoryEditor());
        // });

        // it('reset modal box if success', () => {
        //     except(dispatch).to.have.been.calledWith(reset());
        // });

        // it('enables loading', () => {
        //     except(dispatch).to.have.been.calledWith(enableLoadingState());
        // });

        // it('fetches all categories', () => {
        //     except(dispatch).to.have.been.calledWith(getCategories());
        // });
    });
});