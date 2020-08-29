import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Users from './pages/Users'
import Posts from './pages/Posts'

const Views = () => {
    return (
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/users' component={Users} exact />
            <Route path='/posts' component={Posts} exact />
        </Switch>
    )
}
export default Views
