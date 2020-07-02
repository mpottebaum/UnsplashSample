import { combineReducers } from 'redux'
import resultsReducer from './results'
import loaderReducer from './loader'
import selectedUserReducer from './selectedUser'
import selectedUserPhotosReducer from './selectedUserPhotos'
import fullPhotoUrlReducer from './fullPhotoUrl'
import searchPageReducer from './searchPage'
import queryReducer from './query'

const rootReducer = combineReducers({
    results: resultsReducer,
    loader: loaderReducer,
    selectedUser: selectedUserReducer,
    selectedUserPhotos: selectedUserPhotosReducer,
    fullPhotoUrl: fullPhotoUrlReducer,
    searchPage: searchPageReducer,
    query: queryReducer
})

export default rootReducer