const selectedUserPhotosReducer = (state=null, action) => {
    switch(action.type) {
        case 'ADD_USER_PHOTOS':
            return action.photos
        default:
            return state
    }
}

export default selectedUserPhotosReducer