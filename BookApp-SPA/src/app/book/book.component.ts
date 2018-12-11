import { Component, OnInit, ValueProvider } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.http.get('http://localhost:5000/api/books').subscribe(response => {
      this.books = response;
    }, error => {
      console.log(error);
    });
  }

}
