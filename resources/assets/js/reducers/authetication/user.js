import { USER_FETCHED, USER_FETCHED_FAILURE } from '../../action-types';

const initialState = {};

export default (state = initialState, action) => {
    const { user, type } = action;
    switch (type) {
        case USER_FETCHED:
            return user;
        case USER_FETCHED_FAILURE:
            return initialState;
        default:
            return state;
    }
};
