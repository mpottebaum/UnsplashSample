const loaderReducer = (state=false, action) => {
    switch(action.type) {
        case 'START_ADD_RESULTS':
            return true
        case 'ADD_RESULTS':
            return false
        case 'START_ADD_USER_PHOTOS':
            return true
        case 'ADD_USER_PHOTOS':
            return false
        default:
            return state
    }
}

export default loaderReducer