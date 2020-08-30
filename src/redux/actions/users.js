import axios from 'axios';
import store from '../store';

const API_URL = "http://127.0.0.1:8000/api/"

export const getUsers = async() => {
    const res = await axios.get(API_URL + 'users/get_users')
    store.dispatch({
        type: 'GET_USERS',
        payload: res.data.users
    })
    return res
}

export const setUser = (user) => {
    store.dispatch({
        type: 'SET_USER',
        payload: user
    })
}