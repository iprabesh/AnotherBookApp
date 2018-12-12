import { Component, OnInit } from '@angular/core';
import { BookService } from '../_services/book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private _bookServ: BookService) { }

  ngOnInit() {
  }

  createBook(cTitle: string, cAuthor: string, cDescription: string, cRating: number) {
    this._bookServ.addBook(cTitle, cAuthor, cDescription, cRating).subscribe(
      x => console.log('book is added')
    );
  }
}

