import { LOGIN_ACTION, LOGOUT_ACTION } from './constants'

export const loginAction = (data) => async(dispatch, getState) => {
    try {
        dispatch({
            type: LOGIN_ACTION,
            payload: data,
        })
    } catch (error) {

    }
}

export const logoutAction = () => async(dispatch, getState) => {
    try {
        dispatch({
            type: LOGOUT_ACTION,
        })
    } catch (error) {

    }
}