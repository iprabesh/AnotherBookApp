import { Component, OnInit } from '@angular/core';
import { BookService } from '../_services/book.service';

@Component({
  selector: 'app-comingsoon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.css']
})
export class ComingsoonComponent implements OnInit {
  constructor(private _bookServ: BookService) { }

  ngOnInit() {
    this.timer();
  }

    timer(): void {
      try {
      // Set the date we're counting down to
      const countDownDate = new Date('Jan 1, 2019 15:37:25').getTime();

// Update the count down every 1 second
const x = setInterval(function() {

  // Get todays date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById('demo').innerHTML = days + 'd ' + hours + 'h '
  + minutes + 'm ' + seconds + 's ';

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('demo').innerHTML = 'EXPIRED';
  }
}, 1000);

      }
    }
}
