import { Component } from '@angular/core';
import { TicketInterface } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.html',
  styleUrl: './ticket.css',
})
export class Ticket {
  tickets: TicketInterface[] = [];
}
