async function getTickets() {
  const res = await fetch('http://localhost:4000/tickets');
  return res.json();
}

export default async function TicketList() {
  const tickets = await getTickets();
  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <h3> {ticket.title}</h3>
          <p> {ticket.body}...</p>
          <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
        </div>
      ))}
      {tickets.lenght === 0 && <p className="text-center">There are no open tickets</p>}
    </>
  );
}
