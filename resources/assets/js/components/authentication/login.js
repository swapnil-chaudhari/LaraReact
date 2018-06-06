import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../package/button/button';
import Checkbox from '../../package/checkbox/checkbox';
import { intlShape, FormattedMessage } from 'react-intl';
import LoginEmail from './login-email/login-email.js';
import LoginPassword from './login-password/login-password.js';
import { getMessagesForErrors } from '../../utils/error-handling';
import { updateLoginField, clearLoginEditor } from '../../actions/authentication/login-editor.js';
import { validateAndLogin } from '../../actions/authentication/validate-and-login.js';
import { connect } from 'react-redux';
import { fieldErrorMessages } from './i18n';
import { hashHistory } from 'react-router';
import isEmpty from 'lodash.isempty';


class Login extends Component {
    componentWillUpdate() {
        const { auth } = this.props;
        if (!isEmpty(auth.access_token) && auth.status === 'valid') {
            hashHistory.push('/dashboard'); // if already loggedIn, then redirect to dashboard.
        }
    }

    handleFieldChange(field, event) {
        const { dispatch } = this.props;
        return dispatch(
            updateLoginField(field, event.target.value)
        );
    }

    render() {
        const {
            loginEditor = {},
            dispatch
        } = this.props;

        const { fieldErrors, loginEdits } = loginEditor;

        const errorMessages = getMessagesForErrors(fieldErrors, fieldErrorMessages);
        
        const loginDetails = {
            ...loginEdits
        };

        const {
            loginEmail = '',
            loginPassword = '',
        } = loginDetails;

        return (
            <div className="form-wrapper">
                <form className="form-signin">
                    <h2 className="form-signin-heading">Login to Your Account</h2>
                    
                    <LoginEmail
                        loginEmail={ loginEmail }
                        onChange ={ this.handleFieldChange.bind(this, 'loginEmail') }
                        errorMessage={ errorMessages.loginEmail }
                    />

                    <LoginPassword
                        loginPassword={ loginPassword }
                        onChange ={ this.handleFieldChange.bind(this, 'loginPassword') }
                        errorMessage={ errorMessages.loginPassword }
                    />

                    <label className="checkbox">
                        <Checkbox className="TrackRowCheckbox" children='Remember Me'/>
                    </label>

                    <Button
                        type="button"
                        className="btn btn-lg btn-primary btn-block"
                        id="login-submit"
                        onClick={ () => dispatch(validateAndLogin()) }
                    >
                        <FormattedMessage
                            id="login-message"
                            defaultMessage="Login"
                        />
                    </Button>

                </form>
            </div>
        )
    }
}

const mapStateToProps = (store) => ({
    loginEditor: store.loginEditor,
    auth: store.auth
});

export default connect(mapStateToProps)(Login);
