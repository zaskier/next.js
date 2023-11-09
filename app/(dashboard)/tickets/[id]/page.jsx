import { notFound } from 'next/navigation';

export const dynamicParams = true;

export async function generateStaticParams() {
  const res = await fetch(`http://localhost:4000/tickets`);
  const tickets = await res.json();
  return tickets.map((ticket) => ({
    id: ticket.id
  }));
}

async function getTicket(id) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60
    }
  });

  if (!res.ok) {
    notFound();
  }
  return res.json();
}

export default async function TicketDetails({ params }) {
  const id = params.id;
  const ticket = await getTicket(id);
  const mailTo = `mailto: ${ticket.user_email}`;
  return (
    <>
      <main className="card my-5">
        <nav>
          <h3>ticket deetails</h3>
        </nav>
        <h3> {ticket.title}</h3>
        <small>
          Created by <a href={mailTo}>{ticket.user_email}</a>
        </small>
        <p> {ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
      </main>
    </>
  );
}
