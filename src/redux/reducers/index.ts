import { combineReducers } from 'redux'
import storiesReducer from './storiesReducer'

const reducers = combineReducers({
  stories: storiesReducer
})

export default reducers
