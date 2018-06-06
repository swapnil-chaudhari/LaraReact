import { expect } from 'chai';
import { CATEGORY_STATE_CLEARED } from 'src/action-types';
import { clearCategoryState } from '../clear-category-state';

describe('clear-category-state action creators', () => {
    context('when clearCategoryState is called', () => {
        let action;

        before(() => {
            action = clearCategoryState();
        });

        it(`returns an action of type ${CATEGORY_STATE_CLEARED}`, () => {
            expect(action).to.eql({ type: CATEGORY_STATE_CLEARED});
        });
    });

});
