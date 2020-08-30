import axios from 'axios';
import store from '../store';
const API_URL = "http://127.0.0.1:8000/api/"

export const getComments = async(id) => {
    const res = await axios.get(API_URL + 'comments/get_comments')
    const comments = res.data.comments
    const postComments = comments.filter(comment => comment.postId === id)
    store.dispatch({
        type: 'GET_POST_COMMENTS',
        payload: postComments
    });
}