import {combineReducers} from 'redux'

import { employeeReducer } from './Employee/reducers';
import { authenticationReducer } from './Authentication/reducers';

const rootReducer = combineReducers({
  employee: employeeReducer,
  authentication: authenticationReducer,  
})

export default rootReducer
