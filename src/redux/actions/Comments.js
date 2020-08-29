import axios from 'axios';
import store from '../store';
const API_URL = "http://127.0.0.1:8000/api/"

export const getComments = async() => {
    const res = await axios.get(API_URL + 'comments/get_comments')
    store.dispatch({
        type: 'GET_COMMENTS',
        payload: res.data.comments
    });
}