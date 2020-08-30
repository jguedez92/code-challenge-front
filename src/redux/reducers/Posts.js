const productReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_POSTS':
            return {
                ...state,
                posts: action.payload
            }
        case 'GET_USER_POSTS':
            return {
                ...state,
                userPosts: action.payload
            }
        case 'SET_POST':
            return {
                ...state,
                post: action.payload
            }

        default:
            return state;
    }
}
export default productReducer;