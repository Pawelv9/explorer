import { Component } from '@angular/core';
import { NewTicket } from './new-ticket/new-ticket';
import { TicketInterface } from './ticket/ticket.model';
import { Ticket } from './ticket/ticket';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicket, Ticket],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets {
  tickets: TicketInterface[] = [];

  onAdd(ticketData: { title: string; text: string }) {
    const ticket: TicketInterface = {
      title: ticketData.title,
      request: ticketData.text,
      id: Math.random().toString(),
      status: 'open',
    }

    this.tickets.push(ticket)
  }
}
