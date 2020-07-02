import { combineReducers } from 'redux'
import resultsReducer from './results'
import loaderReducer from './loader'
import selectedUserReducer from './selectedUser'
import selectedUserPhotosReducer from './selectedUserPhotos'
import fullPhotoUrlReducer from './fullPhotoUrl'

const rootReducer = combineReducers({
    results: resultsReducer,
    loader: loaderReducer,
    selectedUser: selectedUserReducer,
    selectedUserPhotos: selectedUserPhotosReducer,
    fullPhotoUrl: fullPhotoUrlReducer
})

export default rootReducer