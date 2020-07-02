const searchPageReducer = (state=null, action) => {
    switch(action.type) {
        case 'START_ADD_RESULTS':
            return action.page
        default:
            return state
    }
}

export default searchPageReducer