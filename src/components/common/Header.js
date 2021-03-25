import React from 'react';
import { NavLink } from 'react-router-dom';

function Header()
{
    const activeStyle = {color: 'purple'};

    return (
        <nav className='container-fluid'>
            <NavLink activeStyle={activeStyle} to='/'>Home Page</NavLink>
            {" | "}
            <NavLink activeStyle={activeStyle} to='/TicketList'>Ticket List</NavLink>
        </nav>
    );
}

export default Header;