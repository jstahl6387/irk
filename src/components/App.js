import React from 'react';
import HomePage from './HomePage';
import TicketList from './TicketList';
import Header from './common/Header';

function App()
{
    function getPage()
    {
        const route = window.location.pathname;
        if (route === '/TicketList') return <TicketList/>;
        return <HomePage/>
    }
    return (
        <>
        <Header/>
        {getPage()}
        </>
    );
}

export default App;