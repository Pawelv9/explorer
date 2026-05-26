import { Component } from '@angular/core';
import { NewTicket } from './new-ticket/new-ticket';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicket],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets {}
