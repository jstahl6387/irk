import React from 'react';

function Header()
{
    return (
        <nav className='container-fluid'>
            <a href='/HomePage'>Home Page</a> | <a href='/TicketList'>Ticket List</a>
        </nav>
    );
}

export default Header;