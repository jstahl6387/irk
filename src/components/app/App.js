import React from 'react';
import Home from '../home/Home';
import TicketList from '../ticket/TicketList';
import Header from '../common/Header';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from '../404/PageNotFound'

export default function App()
{
    return (
        <div className='container-fluid'>
            <Header/>
            <Switch>
                <Route path= '/' exact component={Home}/>
                <Route path= '/TicketList' component={TicketList}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    );
}