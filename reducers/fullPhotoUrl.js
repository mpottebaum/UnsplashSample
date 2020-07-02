const fullPhotoUrlReducer = (state=null, action) => {
    switch(action.type) {
        case 'SELECT_PHOTO':
            return action.url
        case 'DESELECT_PHOTO':
            return null
        default:
            return state
    }
}

export default fullPhotoUrlReducer