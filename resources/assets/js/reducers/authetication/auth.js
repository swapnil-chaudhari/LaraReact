import { LOGIN_SUCCESS, TOKEN_EXPIRED } from 'js/action-types';

const initialState = {
    access_token: '',
    expires_in: '',
    status: 'valid'
};

export default (state = initialState, action) => {
    const { oauthToken, status, type } = action;
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                access_token: oauthToken.access_token,
                expires_in: Date.now() + (oauthToken.expires_in * 1000),
                status: 'valid'
            };
        case TOKEN_EXPIRED:
            return {
                ...state,
                status: status
            };
        default:
            return state;
    }
};
