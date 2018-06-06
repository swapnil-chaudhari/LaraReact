import { expect } from 'chai';
import { createNewStore } from 'src/store';
import { LOADING_STATE_ENABLED, LOADING_STATE_DISABLED } from 'src/action-types';

describe('loadingState reducer', () => {
    context('when store is created', () => {
        let state;

        before(() => {
            const store = createNewStore();
            state = store.getState().loadingState;
        });

        it('sets state to the correct initial state', () => {
            expect(state).to.equal(false);
        });
    });

    context(`when ${LOADING_STATE_ENABLED}`, () => {
        const loadingState = false;
        let state;

        before(() => {
            const store = createNewStore({ loadingState });

            store.dispatch({
                type: LOADING_STATE_ENABLED
            });

            state = store.getState().loadingState;
        });

        it('sets loadingState to true value', () => {
            expect(state).to.equal(true);
        });
    });

    context(`when ${LOADING_STATE_DISABLED}`, () => {
        const loadingState = true;
        let state;

        before(() => {
            const store = createNewStore({ loadingState });

            store.dispatch({
                type: LOADING_STATE_DISABLED
            });

            state = store.getState().loadingState;
        });

        it('sets loadingState to true value', () => {
            expect(state).to.equal(false);
        });
    });
});
