import { GET_ALL_EMPLOYEES } from './constants';

export const getAllEmployees = () => async(dispatch, getState) => {
    try {
        dispatch({
            type: GET_ALL_EMPLOYEES,
            payload: [],
        })
        
    } catch (error) {

    }
}