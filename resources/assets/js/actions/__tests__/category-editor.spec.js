import { expect } from 'chai';
import { spy } from 'sinon';
import {
    CATEGORY_FIELD_UPDATED,
    CATEGORY_SAVE_ERROR
} from 'src/action-types';
import {
    categorySaveError,
    updateCategoryField
} from '../category-editor';

describe('category-editor action creators', () => {
    context('when categorySaveError is called', () => {
        const expectedAction = {
            type: CATEGORY_SAVE_ERROR,
            fieldErrors: { field: 'error' },
            errorCode: 'error_code'
        };
        let action;

        before(() => {
            action = categorySaveError({ field: 'error' }, 'error_code');
        });

        it('returns action with type of CATEGORY_SAVE_ERROR', () => {
            expect(action).to.eql(expectedAction);
        });
    });

    context('when updateCategoryField is called', () => {
        const dispatch = spy();
        const field = 'categoryTitle';
        const value = 'Test News Category Title';

        before(() => {
            updateCategoryField(field, value)(dispatch);
        });

        it('the correct action is dispatched with field and value', () => {
            expect(dispatch).to.be.calledWith(
                {
                    type: CATEGORY_FIELD_UPDATED,
                    field,
                    value
                }
            );
        });
    });
});
