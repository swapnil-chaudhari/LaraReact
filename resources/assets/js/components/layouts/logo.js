import React, { Component, PropTypes } from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { isAuthenticated } from '../../actions/authentication/auth.js';

class Logo extends Component {
    componentWillMount() {
        // if (! isAuthenticated()) {
        //       hashHistory.push('/');
        // }
    }

    render() {
        const { user } = this.props;
        return(
            <header className="main-header">
                <a href="../../index2.html" className="logo">
                  <span className="logo-mini"><b>LR</b></span>
                  <span className="logo-lg"><b>LaraReact</b> Boilerplate</span>
                </a>
                <nav className="navbar navbar-static-top">
                  <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </a>

                  <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                      <li className="dropdown user user-menu">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                          <img src="https://4.bp.blogspot.com/-lb-biLntI-8/VNhRn80sRxI/AAAAAAAADxk/4kPUY9h35EY/s1600/Patel%2BInfosoft%2BURL%2BShortening%2BWork.png" className="user-image" alt="User Image" />
                          <span className="hidden-xs">{ user.username ? user.username : ''}</span>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="user-header">
                            <img src="https://4.bp.blogspot.com/-lb-biLntI-8/VNhRn80sRxI/AAAAAAAADxk/4kPUY9h35EY/s1600/Patel%2BInfosoft%2BURL%2BShortening%2BWork.png" className="img-circle" alt="User Image" />

                            <p>
                              { user.username ? user.username : ''} - Web Developer
                              <small>Member since Nov. 2013</small>
                            </p>
                          </li>
                          <li className="user-body">
                            <div className="row">
                              <div className="col-xs-4 text-center">
                                <a href="#">Followers</a>
                              </div>
                              <div className="col-xs-4 text-center">
                                <a href="#">Sales</a>
                              </div>
                              <div className="col-xs-4 text-center">
                                <a href="#">Friends</a>
                              </div>
                            </div>
                          </li>
                          <li className="user-footer">
                            <div className="pull-left">
                              <a href="#" className="btn btn-default btn-flat">Profile</a>
                            </div>
                            <div className="pull-right">
                              <a href="javascript:void(0);" className="btn btn-default btn-flat">Sign out</a>
                            </div>
                          </li>
                        </ul>
                      </li>
                      
                    </ul>
                  </div>
                </nav>
              </header>
        )
    }
}

const mapStateToProps = (store) => ({
    user: store.user
});

export default connect(mapStateToProps)(Logo);
