import axios from 'axios';
import { TOKEN_EXPIRED } from '../../action-types.js'

export const  setAuthorizationToken = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer  ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

export const isValidToken = (token, expires) => {
    if (Date.now() < parseInt(expires)) {
        return true;
    }
    return false;
};

export const tokenExpired = () => ({
    type: TOKEN_EXPIRED,
    status: 'invalid'
});