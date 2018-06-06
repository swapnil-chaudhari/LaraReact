import { expect } from 'chai';
import { createNewStore } from 'src/store';
import {
    CLEAR_CATEGORY_EDITOR,
    CATEGORY_FIELD_UPDATED,
    CATEGORY_SAVE_ERROR
} from 'src/action-types';
import { PHYSICAL_EDITOR_STATUS } from 'src/constants';

describe('categoryEditor reducer', () => {

    context('when store is created', () => {
        let state;

        before(() => {
            const store = createNewStore();
            state = store.getState().categoryEditor;
        });

        it('sets state to the correct initial state', () => {
            expect(state).to.eql({
                errorCode: null,
                fieldErrors: {},
                categoryEdits: {}
            });
        });
    });

    context(`when ${CATEGORY_SAVE_ERROR} dispatched with no errors in state`, () => {
        const categoryEditor = {
            fieldErrors: {},
            categoryEdits: {
                foo: 'bar'
            }
        };
        let state;

        before(() => {
            const store = createNewStore({ categoryEditor });

            store.dispatch({
                type: CATEGORY_SAVE_ERROR,
                fieldErrors: {
                    categoryTitle: { validatorMessage: 'categoryTitle is required' },
                    categoryDescription: { validatorMessage: 'categoryDescription is required' }
                },
                errorCode: 'validation_error'
            });

            state = store.getState().categoryEditor;
        });

        it('returns the field errors', () => {
            expect(state.fieldErrors).to.eql({
                categoryTitle: { validatorMessage: 'categoryTitle is required' },
                categoryDescription: { validatorMessage: 'categoryDescription is required' }
            });
        });

        it('returns a validation error for the errorCode', () => {
            expect(state.errorCode).to.eql('validation_error');
        });

        it('returns the current state of the categoryEdits', () => {
            expect(state.categoryEdits).to.eql(categoryEditor.categoryEdits);
        });
    });

    context(`when ${CATEGORY_FIELD_UPDATED}`, () => {
        const field = 'categoryTitle';
        const value = 'News Category';
        const categoryEditor = {
            categoryEdits: {
                [field]: value
            }
        };
        let notInitialState;
        let state;

        before(() => {
            const store = createNewStore({ categoryEditor });

            notInitialState = store.getState().categoryEditor;

            store.dispatch({
                type: CATEGORY_FIELD_UPDATED,
                field,
                value
            });

            state = store.getState().categoryEditor;
        });

        it('sets state to newly edited category field', () => {
            expect(notInitialState).to.eql(categoryEditor);
            expect(state.categoryEdits).to.eql({
                [field]: value
            });
        });
    });

    context('When category editor is cleared', () => {
        const categoryEditor = {
            categoryEdits: {
                foo: 'bar'
            }
        };
        let state;

        before(() => {
            const store = createNewStore({ categoryEditor });
            store.dispatch({ type: CLEAR_CATEGORY_EDITOR });
            state = store.getState().categoryEditor;
        });

        it('returns an empty object', () => {
            expect(state).to.eql({
                errorCode: null,
                fieldErrors: {},
                categoryEdits: {}
            });
        });
    });

});
