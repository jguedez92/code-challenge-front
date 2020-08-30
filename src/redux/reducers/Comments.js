const orderReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_POST_COMMENTS':
            return {
                ...state,
                comments: action.payload
            }

        default:
            return state;
    }
}
export default orderReducer;