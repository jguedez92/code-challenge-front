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

export const setPost = (post) => {
    store.dispatch({
        type: 'SET_POST',
        payload: post
    })
}

export const getUserPosts = async(userId) => {
    const res = await axios.get(API_URL + 'posts/get_posts')
    const posts = res.data.posts
    const userPosts = posts.filter(post => post.userId === userId)
    store.dispatch({
        type: 'GET_USER_POSTS',
        payload: userPosts
    });
}

export const insertPost = async(post) => {
    const res = await axios.post(API_URL + 'posts/insert_posts', post);
    return res
}