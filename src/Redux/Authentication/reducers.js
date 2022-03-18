import { LOGIN_ACTION, LOGOUT_ACTION } from './constants';

const initialState = {
    logged_in: false,
}

export const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_ACTION:
            return {
                ...state,
                logged_in: true,
            }
        case LOGOUT_ACTION:
            // console.log('kk')
            return {
                ...state,
                logged_in: false,
            }
        default:
            return state;
    }
}