import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom';
import { Home } from './home'
import { ProdPage } from '../features/products/prodPage'

const Main = () => {

    return (
        <>
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/prod' component={ProdPage} />
                <Route exact path='/' component={Home} />
            </Switch>
        </>
    )
}

export default withRouter(Main)