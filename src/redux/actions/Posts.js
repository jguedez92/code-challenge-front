import axios from 'axios';
import store from '../store';

const API_URL = "http://127.0.0.1:8000/api/"

export const getPosts = async() => {
    const res = await axios.get(API_URL + 'posts/get_posts')
    store.dispatch({
        type: 'GET_POSTS',
        payload: res.data.posts
    });
}