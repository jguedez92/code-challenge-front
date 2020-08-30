import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Users from './pages/Users'
import UserDetail from './pages/UserDetail'
import PostDetail from './pages/PostDetail'
import Posts from './pages/Posts'

const Views = () => {
    return (
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/users' component={Users} exact />
            <Route path='/posts' component={Posts} exact />
            <Route path='/users/:username' component={UserDetail} exact />
            <Route path='/posts/:id' component={PostDetail} exact />
        </Switch>
    )
}
export default Views
