import React from 'react';
import { render } from '@testing-library/react';

function getTickets()
{
  var tickets = [
    {
      type: 'Enchancement',
      id: 0,
      project: 'FooBar',
      title: 'Break up the HTML into react components',
      owner: 'Jim',
      updated: '2021-03-15 9:00:00'
    },
    {
      type: 'Enchancement',
      id: 1,
      project: 'FooBar',
      title: 'Make the CSS not suck',
      owner: 'Jim',
      updated: '2021-03-15 9:00:00'
    },
    {
      type: 'Enchancement',
      id: 2,
      project: 'FooBar',
      title: 'Add sorting to ticket list',
      owner: 'Jim',
      updated: '2021-03-15 9:00:00'
    },
    {
      type: 'Enchancement',
      id: 3,
      project: 'FooBar',
      title: 'Make data based ticket list',
      owner: 'Jim',
      updated: '2021-03-15 9:00:00'
    },
    {
      type: 'Enchancement',
      id: 4,
      project: 'FooBar',
      title: 'Add ticket editor',
      owner: 'Jim',
      updated: '2021-03-15 9:00:00'
    },
    {
      type: 'Enchancement',
      id: 5,
      project: 'FooBar',
      title: 'Be able to select tickets and type in them',
      owner: 'Jim',
      updated: '2021-03-15 9:00:00'
    }
  ];

  return tickets;
}

function renderRow(ticket)
{
    return <tr key={ticket.id}>
        <th scope="row">{ticket.id}</th>
        <td>{ticket.type}</td>
        <td>{ticket.project}</td>
        <td>{ticket.title}</td>
        <td>{ticket.owner}</td>
        <td>{ticket.updated}</td>
      </tr>
}

function renderHeader()
{
  return <tr>
    <th scope="col">Ticket #</th>
    <th scope="col">Type</th>
    <th scope="col">Project</th>
    <th scope="col">Title</th>
    <th scope="col">Owner</th>
    <th scope="col">Last Updated</th>
  </tr>
}

function TicketList() {  
  return (
  <div>
    <h2 className="jumbotron">Tickets</h2>
    <table className="table">
      <thead className="thead-dark">
        {renderHeader()}
      </thead>
      <tbody>
        {getTickets().map(renderRow)}
      </tbody>
    </table> 
  </div>
  );
}

export default TicketList;
