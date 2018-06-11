import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLoggedInUser } from 'js/actions/authentication//user.js';
import { setAuthorizationToken, isValidToken, tokenExpired } from 'js/actions/authentication/auth.js';
import { hashHistory } from 'react-router';

class SideBar extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        user: PropTypes.object
    };

    componentWillMount() {
        const { dispatch, user, auth } = this.props;
        
        setAuthorizationToken(auth.access_token); // will be available for all API requests.

        if (!isValidToken(auth.access_token, auth.expires_in)) {
            dispatch(tokenExpired());
            hashHistory.push('/'); // if token is not valid, then redirect to login.
        }
        if (!user.username && auth.access_token) {
            dispatch(getLoggedInUser());
        }
    }

    render() {
        const { user } = this.props;
        return (
            <aside className="main-sidebar">
                <section className="sidebar" style={{height: 'auto'}}>
                <div className="user-panel">
                    <div className="pull-left image">
                        <img src="https://4.bp.blogspot.com/-lb-biLntI-8/VNhRn80sRxI/AAAAAAAADxk/4kPUY9h35EY/s1600/Patel%2BInfosoft%2BURL%2BShortening%2BWork.png" className="img-circle" alt="User Image" />
                    </div>
                    <div className="pull-left info">
                        <p>{ user.username ? user.username : ''}</p>
                        <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                    </div>
                </div>
                <form action="#" method="get" className="sidebar-form">
                    <div className="input-group">
                        <input type="text" name="q" className="form-control" placeholder="Search..." />
                        <span className="input-group-btn">
                        <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                        </button>
                        </span>
                    </div>
                </form>
                <ul className="sidebar-menu tree" data-widget="tree">
                    <li className="header">MAIN NAVIGATION</li>
                    <li>
                        <a href="#/dashboard">
                        <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#/categories">
                        <i className="fa fa-files-o"></i>
                        <span>Categories</span>
                        <span className="pull-right-container">
                        </span>
                        </a>
                    </li>
                    <li>
                        <a href="#/demo">
                        <i className="fa fa-dashboard"></i> <span>Demo</span>
                        </a>
                    </li>
                </ul>
                </section>
            </aside>
        );
    }
}

const mapStateToProps = (store) => ({
    user: store.user,
    auth: store.auth
});

export default connect(mapStateToProps)(SideBar);
