import { GET_ALL_EMPLOYEES } from './constants';

const initialState = {
    employees: [],
    logged: false,
}

export const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_EMPLOYEES:
            return {
                ...state,
                employees: [
                    { id: 1, name: "Monster", age: "30" },
                    { id: 1, name: "Hunter", age: "29" },
                    { id: 1, name: "Panda", age: "28" },
                    { id: 1, name: "K", age: "27" },
                    { id: 1, name: "Black", age: "20" },
                ]
            }
            default:
                return state;
    }
}