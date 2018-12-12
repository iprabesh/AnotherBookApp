import { Component, OnInit } from '@angular/core';
import { BookService } from '../_services/book.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-newrelease',
  templateUrl: './newrelease.component.html',
  styleUrls: ['./newrelease.component.css']
})
export class NewreleaseComponent implements OnInit {
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
