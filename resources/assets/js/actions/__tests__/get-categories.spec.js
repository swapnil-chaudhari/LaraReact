import getCategories from 'src/actions/get-categories';
import axios from 'axios';
import { stub, spy } from 'sinon';
import { expect } from 'chai';
import { CATEGORY_ENDPOINT } from 'src/constants';
import { Category } from 'lib/test-helpers/factories';
import { CATEGORIES_FETCHED, LOADING_STATE_DISABLED } from 'src/action-types';

describe('get-categories action creators', () => {
    context('when it is called', () => {
        const dispatch = spy();
        const mockApiResponse = [[Category(), Category()], [{}, {}, {}]];

        before(() => {
            stub(axios, 'get').returns(Promise.resolve(mockApiResponse));
            return getCategories()(dispatch);
        });

        after(() => {
            axios.get.restore();
        });

        it('does a GET with the correct URL', () => {
            expect(axios.get).to.have.been.calledWith(CATEGORY_ENDPOINT);
        });
    });

    context('when it resolves successfully', () => {
        const dispatch = spy();
        const categoryOne = Category({ id: 101 });
        const categoryTwo = Category({ id: 102 });

        const categoryApiResponse = {
                data: [categoryOne, categoryTwo],
            };

        const expectedPayload = [
            {
                id: categoryOne.id,
                categoryTitle: categoryOne.categoryTitle,
                categoryDescription: categoryOne.categoryDescription
            },
            {
                id: categoryTwo.id,
                categoryTitle: categoryTwo.categoryTitle,
                categoryDescription: categoryTwo.categoryDescription
            }
        ];

        before(() => {
            stub(axios, 'get').returns(Promise.resolve(categoryApiResponse));
            return getCategories()(dispatch);
        });

        after(() => {
            axios.get.restore();
        });

        it(`dispatches ${CATEGORIES_FETCHED} with the categories`, () => {
            expect(dispatch.firstCall).to.have.been.calledWith({
                type: CATEGORIES_FETCHED,
                payload: expectedPayload
            });
        });

        it(`dispatches ${LOADING_STATE_DISABLED}`, () => {
            expect(dispatch.secondCall).to.have.been.calledWith({
                type: LOADING_STATE_DISABLED
            });
        });
    });
});
