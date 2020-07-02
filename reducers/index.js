import { combineReducers } from 'redux'
import resultsReducer from './results'
import loaderReducer from './loader'
import selectedUserReducer from './selectedUser'
import selectedUserPhotosReducer from './selectedUserPhotos'

const rootReducer = combineReducers({
    results: resultsReducer,
    loader: loaderReducer,
    selectedUser: selectedUserReducer,
    selectedUserPhotos: selectedUserPhotosReducer
})

export default rootReducer