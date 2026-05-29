import { Component, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
})
export class Control {
  label = input.required<string>();
}
