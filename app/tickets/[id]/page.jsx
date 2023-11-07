async function getTicket(id) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60 // value 0 disabless cahching time
    }
  });
  return res.json();
}

export default async function TicketDetails({ params }) {
  const id = params.id; //todo validate if number *add typscript
  const ticket = await getTicket(id);

  return (
    <>
      <main className="card my-5">
        <nav>
          <h3>ticket deetails</h3>
        </nav>
        <h3> {ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p> {ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
      </main>
    </>
  );

  //   <div>{id}</div>;
}
