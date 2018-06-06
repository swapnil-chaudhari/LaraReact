import { saveCategory, categoryUpdated } from 'src/actions/save-category';
import { Category } from 'lib/test-helpers/factories';
import { expect } from 'chai';
import { stub, spy } from 'sinon';
import axios from 'axios';
import { CATEGORY_UPDATED } from 'src/action-types';
import { CATEGORY_ENDPOINT } from 'src/constants';
import Promise from 'bluebird';
import omit from 'lodash.omit';


describe('save category action creators', () => {

    describe('saveCategory', () => {

        describe('when the category has a id', () => {
           const category = Category();
           const dispatch = spy();
           const headers = {
               headers: {
                   'Content-Type': 'application/x-www-form-urlencoded'
               }
           };

           const updatedCategory = Category({ categoryTitle: 'updated title' });

           const updatedCategoryResponse = {
                data: {
                  results: updatedCategory
                }
            };

           before(() => {
               stub(axios, 'put').returns(Promise.resolve(updatedCategoryResponse));

               return saveCategory(category)(dispatch);
           });

           after(() => {
               axios.put.restore();
           });

            it('PUTs the category as an updated category', () => {
                expect(axios.put).to.have.been.calledOnce.calledWith(
                    CATEGORY_ENDPOINT + `?id=${category.id}`,
                    category,
                    headers
               );
           });

            it('Update new category', () => {
                expect(dispatch).to.have.been.calledWith(categoryUpdated(updatedCategory));
            });
       });

        describe('when the category has no id', () => {
            const category = { categoryTitle: 'Technology', categoryDescription: 'This is technology description.' };
            const dispatch = spy();
            const headers = {
               headers: {
                   'Content-Type': 'application/x-www-form-urlencoded'
               }
           };
            const updatedCategory = Category({ categoryTitle: 'updated title' });

           const updatedCategoryResponse = {
                data: {
                  results: updatedCategory
                }
            };

            before(() => {
                stub(axios, 'post').returns(Promise.resolve(updatedCategoryResponse));

                return saveCategory(category)(dispatch);
            });

            after(() => {
                axios.post.restore();
            });

            it('POSTs the category as a new category', () => {
                expect(axios.post).to.have.been.calledOnce.calledWith(
                    CATEGORY_ENDPOINT,
                    category,
                    headers
               );
            });

            it('Update new category', () => {
                expect(dispatch).to.have.been.calledWith(categoryUpdated(updatedCategory));
            });
        });
    });
});
