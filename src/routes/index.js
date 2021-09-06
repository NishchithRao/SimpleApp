import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import App from '../App'
import EvenUser from '../pages/EvenUser'
import OddUser from '../pages/OddData'


const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={App}/>
            <Route path="/even" exact component={EvenUser}/>
            <Route path="/odd" exact component={OddUser}/>
        </BrowserRouter>
    )
}

export default Router
