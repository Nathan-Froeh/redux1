import counterReducer from './counter';
import loggedReducer from './isLogged';
import addIdea from './addIdea'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  logged: loggedReducer,
  idea: addIdea
})

export default allReducers;