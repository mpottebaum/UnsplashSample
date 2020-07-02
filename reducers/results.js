const resultsReducer = (state=null, action) => {
    switch(action.type) {
        case 'ADD_RESULTS':
            return action.results
        default:
            return state
    }
}

export default resultsReducer