import { deleteCategory } from '../delete-category';
import { Category } from 'lib/test-helpers/factories';
import axios from 'axios';
import { expect } from 'chai';
import { stub, spy } from 'sinon';
import {
    CATEGORY_STATE_CLEARED,
    LOADING_STATE_ENABLED,
    CATEGORIES_FETCHED
 } from 'src/action-types';
 import { categoriesFetched } from 'src/actions/get-categories';
import Promise from 'bluebird';
import { push } from 'react-router-redux';

describe('delete category actions', () => {
    context('when deleteCategory action is called', () => {
        const category = Category();
        const dispatch = spy();

        before(() => {
            stub(axios, 'delete').returns(Promise.resolve({}));

            return deleteCategory(category.id)(dispatch);
        });

        after(() => {
            axios.delete.restore();
        });

        it('dispatches an action of CATEGORY_STATE_CLEARED', () => {
            expect(dispatch.firstCall).to.have.been.calledWith({ type: CATEGORY_STATE_CLEARED });
        });

        it('dispatches an action of LOADING_STATE_ENABLED', () => {
            expect(dispatch.secondCall).to.have.been.calledWith({ type: LOADING_STATE_ENABLED });
        });
    });

    // context('when getCategories is called', () => {
    //     const dispatch = spy();
    //     const categories = [Category(), Category()];
    //     let action;
    //     before(() => {
    //         action = categoriesFetched(categories)(dispatch);
    //     });
    //
    //     it('makes a GET with the correct URL and headers', () => {
    //        expect(action).to.be.calledWith({ type: CATEGORIES_FETCHED, payload: categories });
    //     });
    // });
});
