import users from "./Users";
import posts from "./Posts";
import comments from "./Comments";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    users,
    posts,
    comments
});

export default rootReducer;