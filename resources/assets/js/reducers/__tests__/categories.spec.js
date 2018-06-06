import { createNewStore } from 'src/store';
import { expect } from 'chai';
import { Category } from 'lib/test-helpers/factories';
import { CATEGORIES_FETCHED, CATEGORIES_FETCHED_FAILURE } from 'src/action-types';

describe('categories reducer', () => {
    context(`when ${CATEGORIES_FETCHED} is dispatched`, () => {
        const categories = [Category(), Category()];
        let state;

        before(() => {
            const store = createNewStore();

            store.dispatch({
                type: CATEGORIES_FETCHED,
                payload: categories,
            });

            state = store.getState().categories;
        });

        it('sets the state from action.category', () => {
            expect(state).to.deep.equal(categories);
        });
    });

    context(`when ${CATEGORIES_FETCHED_FAILURE} is dispatched`, () => {
        const categories = [];
        let state;

        before(() => {
            const store = createNewStore();

            store.dispatch({
                type: CATEGORIES_FETCHED_FAILURE,
                payload: {},
            });

            state = store.getState().categories;
        });

        it('sets the state from action.category', () => {
            expect(state).to.deep.equal(categories);
        });
    });

    context('when an unhandled action is dispatched', () => {
        context('and there is a state', () => {
            const initialState = [Category()];
            let state;

            before(() => {
                const store = createNewStore({ categories: initialState });

                store.dispatch({ type: 'NOT_AN_ACTION' });
                state = store.getState().categories;
            });

            it('returns the state', () => {
                expect(state).to.equal(initialState);
            });
        });

        context('and there is no state', () => {
            let state;

            before(() => {
                const store = createNewStore();

                store.dispatch({ type: 'NOT_AN_ACTION' });
                state = store.getState().categories;
            });

            it('returns an empty object', () => {
                expect(state).to.eql([]);
            });
        });
    });
});
