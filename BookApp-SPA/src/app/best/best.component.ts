import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls: ['./best.component.css']
})
export class BestComponent implements OnInit {

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
