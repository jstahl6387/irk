import React from 'react';
import HomePage from './HomePage';
import TicketList from './TicketList';
import Header from './common/Header';
import { Route } from 'react-router-dom';

function App()
{
    return (
        <div className='container-fluid'>
            <Header/>
            <Route path= '/' exact component={HomePage}/>
            <Route path= '/HomePage' component={HomePage}/>
            <Route path= '/TicketList' exact component={TicketList}/>
        </div>
    );
}

export default App;