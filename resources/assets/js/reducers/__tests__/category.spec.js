import { createNewStore } from 'src/store';
import { expect } from 'chai';
import { Category } from 'lib/test-helpers/factories';
import { CATEGORY_FETCHED, CATEGORY_UPDATED, CATEGORY_STATE_CLEARED } from 'src/action-types';

describe('category reducer', () => {
    context(`when ${CATEGORY_FETCHED} is dispatched`, () => {
       const category = Category();
       let state;

       before(() => {
           const store = createNewStore();

           store.dispatch({
               type: CATEGORY_FETCHED,
               category
           });

           state = store.getState().category;
       });

       it('sets the state from action.category', () => {
           expect(state).to.equal(category);
       });
   });

   context(`when ${CATEGORY_UPDATED} is dispatched`, () => {
        const category = Category({ id: 201 });
        let state = Category({ id: 200 });

        before(() => {
            const store = createNewStore();

            store.dispatch({
                type: CATEGORY_UPDATED,
                category
            });

            state = store.getState().category;
        });

        it('updates the state with the new category', () => {
            expect(state).to.equal(category);
        });
    });

    context('when an unhandled action is dispatched', () => {

        context('and there is a state', () => {
            const initialState = Category();
            let state;

            before(() => {
                const store = createNewStore({ category: initialState });

                store.dispatch({ type: 'NOT_AN_ACTION' });

                state = store.getState().category;
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

                state = store.getState().category;
            });

            it('returns an empty object', () => {
                expect(state).to.eql({});
            });
        });
    });

    context('When category state is cleared', () => {
        let state;

        before(() => {
            const store = createNewStore();
            store.dispatch({ type: CATEGORY_STATE_CLEARED });
            state = store.getState().category;
        });

        it('returns an empty object', () => {
            expect(state).to.eql({});
        });
    });
});
