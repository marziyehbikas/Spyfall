import React from 'react'
import { Route, Switch } from 'react-router'
import GamePage from '../GamePage'
import Home from '../Home'
import MainLayout from '../layout/MainLayout'
import Room from '../Room'

const Spyfall = () => {
    return (
        <MainLayout>
            <Switch>
                <Route path="/game-page" component={GamePage} />
                <Route path="/new-game" component={Room} />
                <Route exact path="/" component={Home} />
            </Switch>
        </MainLayout>
    )
}

export default Spyfall