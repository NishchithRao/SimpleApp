import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import App from '../App'
import User from '../pages/User'

const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={App}/>
            <Route path="/users" exact component={User}/>
        </BrowserRouter>
    )
}

export default Router
