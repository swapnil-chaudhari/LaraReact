import { expect } from 'chai';
import { createNewStore } from 'src/store';
import { CATEGORY_ADD_MODAL_OPENED, CATEGORY_ADD_MODAL_RESET } from 'src/action-types';

describe('modal reducer', () => {
    context(`when a ${CATEGORY_ADD_MODAL_OPENED} action is dispatched`, () => {
        let store;

        before(() => {
            store = createNewStore({ modal: { isOpen: false } });
            store.dispatch({ type: CATEGORY_ADD_MODAL_OPENED });
        });

        it('resets state to initial state then updates isOpen to true', () => {
            expect(store.getState().modal).to.eql({ isOpen: true });
        });
    });

    context(`when a ${CATEGORY_ADD_MODAL_RESET} action is dispatched`, () => {
        let store;

        before(() => {
            store = createNewStore({ modal: { isOpen: true } });
            store.dispatch({ type: CATEGORY_ADD_MODAL_RESET });
        });

        it('resets state to initial state', () => {
            expect(store.getState().modal).to.eql({ isOpen: false });
        });
    });
});
