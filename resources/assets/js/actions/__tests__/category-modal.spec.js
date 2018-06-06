import { expect } from 'chai';
import {
    CATEGORY_ADD_MODAL_OPENED,
    CATEGORY_ADD_MODAL_RESET
} from 'src/action-types';
import {
    opened,
    reset
} from '../category-modal';

describe('category-modal action creators', () => {
    context('when opened is called', () => {
        let action;

        before(() => {
            action = opened();
        });

        it(`returns an action of type ${CATEGORY_ADD_MODAL_OPENED}`, () => {
            expect(action).to.eql({ type: CATEGORY_ADD_MODAL_OPENED});
        });
    });

    context('when reset is called', () => {
        let action;

        before(() => {
            action = reset();
        });

        it(`returns an action of type ${CATEGORY_ADD_MODAL_RESET}`, () => {
            expect(action).to.eql({ type: CATEGORY_ADD_MODAL_RESET});
        });
    });

});
