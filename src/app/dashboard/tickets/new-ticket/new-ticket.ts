import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { Button } from '../../../shared/button/button';
import { Control } from '../../../shared/control/control';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [
    Button,
    Control,
    FormsModule
  ],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form')

  onSubmit(title: string, ticketText: string): void {
    console.log(title);
    console.log(ticketText);
    this.form()?.nativeElement.reset();
  }
}
