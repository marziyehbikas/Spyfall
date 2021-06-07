import React from 'react'
import { Route, Switch } from 'react-router'
import Contex from '../context/Contex'
import GamePage from '../GamePage'
import Home from '../Home'
import MainLayout from '../layout/MainLayout'
import Room from '../Room'

const Spyfall = () => {
    return (
        <MainLayout>
            <Switch>
                <Contex>
                    <Route path="/game-page" component={GamePage} />
                    <Route path="/new-game" component={Room} />
                    <Route exact path="/" component={Home} />
                </Contex>
            </Switch>
        </MainLayout>
    )
}

export default Spyfall