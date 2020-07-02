import { combineReducers } from 'redux'
import resultsReducer from './results'
import loaderReducer from './loader'

const rootReducer = combineReducers({
    results: resultsReducer,
    loader: loaderReducer
})

export default rootReducer