import React from 'react';

function getTickets()
{
  var tickets = [
    {
      type: 'Enchancement',
      number: 0,
      project: 'FooBar',
      title: 'Break up the HTML into react components',
      owner: 'Jim',
      updated: '2021-03-15 9:00:00'
    },
    {
      type: 'Enchancement',
      number: 1,
      project: 'FooBar',
      title: 'Make the CSS not suck',
      owner: 'Jim',
      updated: '2021-03-15 9:00:00'
    },
    {
      type: 'Enchancement',
      number: 2,
      project: 'FooBar',
      title: 'Add sorting to ticket list',
      owner: 'Jim',
      updated: '2021-03-15 9:00:00'
    },
    {
      type: 'Enchancement',
      number: 3,
      project: 'FooBar',
      title: 'Make data based ticket list',
      owner: 'Jim',
      updated: '2021-03-15 9:00:00'
    },
    {
      type: 'Enchancement',
      number: 4,
      project: 'FooBar',
      title: 'Add ticket editor',
      owner: 'Jim',
      updated: '2021-03-15 9:00:00'
    },
    {
      type: 'Enchancement',
      number: 5,
      project: 'FooBar',
      title: 'Be able to select tickets and type in them',
      owner: 'Jim',
      updated: '2021-03-15 9:00:00'
    }
  ];

  return tickets;
}

function TicketList() {  
  return (
  <div>
    <h2 className="jumbotron">Tickets</h2>
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th>Type</th>
          <th>Ticket #</th>
          <th>Project</th>
          <th>Title</th>
          <th>Owner</th>
          <th>Last Updated</th>
        </tr>
      </thead>
      {getTickets().map( ticket =>
        {
          return <tr>
            <td>{ticket.type}</td>
            <td>{ticket.number}</td>
            <td>{ticket.project}</td>
            <td>{ticket.title}</td>
            <td>{ticket.owner}</td>
            <td>{ticket.updated}</td>
          </tr>
        })}
    </table> 
  </div>
  );
}

export default TicketList;
