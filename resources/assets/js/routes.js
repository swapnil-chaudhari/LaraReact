import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route } from 'react-router';
import Category from './components/category/category';
import Demo from './components/demo/demo';
import Dashboard from './components/dashboard/dashboard';
import Login from './components/authentication/login';
import { enableLoadingState } from './actions/category/loading-state';

const Routes = ({ dispatch, history }) => (
        <Router history={ history }>
            <Route>
                <Route
                    path="/"
                    component={ Login }
                    onEnter={ (replace, done) => {
                        dispatch(enableLoadingState());
                        done();
                    } }
                />
                <Route
                    path="/dashboard"
                    component={ Dashboard }
                    onEnter={ (replace, done) => {
                        dispatch(enableLoadingState());
                        done();
                    } }
                />
                <Route
                    path="/categories"
                    component={ Category }
                    onEnter={ (replace, done) => {
                        dispatch(enableLoadingState());
                        done();
                    } }
                />
                <Route
                    path="/demo"
                    component={ Demo }
                    onEnter={ (replace, done) => {
                        dispatch(enableLoadingState());
                        done();
                    } }
                />
            </Route>
        </Router>
);

Routes.propTypes = {
    history: PropTypes.object
};

export default Routes;
