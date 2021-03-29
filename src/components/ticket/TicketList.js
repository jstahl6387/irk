import React from 'react';
import ticketTestData from './TicketTestData';

export default function TicketList() {  
  return (
  <div>
    <h2 className="jumbotron">Tickets</h2>
    <table className="table">
      <thead className="thead-dark">
        {ticketHeader()}
      </thead>
      <tbody>
        {ticketTestData().map(ticketRow)}
      </tbody>
    </table> 
  </div>
  );
}

const statusCompletedStyle = { color: 'green', fontWeight: 'bold' };
const statusInProgressStyle = { color: 'orange', fontWeight: 'bold'  };
const statusPendingStyle = { color: 'grey', fontWeight: 'bold'  };

function getStatusStyle(status)
{
  switch(status)
  {
    case "Completed":
      return statusCompletedStyle;
    
    case "In Progress":
      return statusInProgressStyle;

    case "Pending":
      return statusPendingStyle;
    
    default:
      return { fontWeight: 'bold' };
  }
}

function ticketRow(ticket)
{
    return <tr key={ticket.id}>
        <th scope="row">{ticket.id}</th>
        <td>{ticket.type}</td>
        <td>{ticket.project}</td>
        <td>{ticket.priority}</td>
        <td>{ticket.title}</td>
        <td>{ticket.owner}</td>
        <td style={getStatusStyle(ticket.status)}>{ticket.status}</td>
        <td>{ticket.updated}</td>
      </tr>
}

function ticketHeader()
{
  return <tr>
    <th scope="col">Ticket #</th>
    <th scope="col">Type</th>
    <th scope="col">Project</th>
    <th scope="col">Priority</th>
    <th scope="col">Title</th>
    <th scope="col">Owner</th>
    <th scope="col">Status</th>
    <th scope="col">Last Updated</th>
  </tr>
}