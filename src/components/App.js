import React from 'react';
import HomePage from './HomePage';
import TicketList from './TicketList';
import Header from './common/Header';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './PageNotFound'

function App()
{
    return (
        <div className='container-fluid'>
            <Header/>
            <Switch>
                <Route path= '/' exact component={HomePage}/>
                <Route path= '/TicketList' exact component={TicketList}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    );
}

export default App;