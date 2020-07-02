const queryReducer = (state=null, action) => {
    switch(action.type) {
        case 'ADD_QUERY':
            return action.query
        default:
            return state
    }
}

export default queryReducer