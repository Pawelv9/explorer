import { Component } from '@angular/core';
import { Button } from '../shared/button/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    Button
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
