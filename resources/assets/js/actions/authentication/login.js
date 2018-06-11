import axios from 'axios';
import {
    LOGIN_ENDPOINT,
    CLIENT_ID,
    CLIENT_SECRET,
    GRANT_TYPE
} from 'js/constants';
import { LOGIN_SUCCESS } from 'js/action-types.js'
import { setToken } from './auth.js';

const checkLogin = loginData => {
    var oauthData = {
        client_id : CLIENT_ID,
        client_secret : CLIENT_SECRET,
        grant_type : GRANT_TYPE,
        username : loginData.loginEmail,
        password : loginData.loginPassword
    }

    return axios.post(LOGIN_ENDPOINT + 'oauth/token', oauthData);
}

const loginSuccess = oauthToken => ({
    type: LOGIN_SUCCESS,
    oauthToken
});

export const login = loginData => dispatch => {
    return checkLogin(loginData)
    .then((response) => {
        dispatch(loginSuccess(response.data));
        return loginData;
    });
};

