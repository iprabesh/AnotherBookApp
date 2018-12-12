import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BookModel } from '../../BookModel';
import { tap } from 'rxjs/operators';

@Injectable()
export class BookService {

    private _url = 'http://localhost:5000/api/books';

    private _newBook: BookModel;
    private _cString_url: string;
    constructor(private http: HttpClient) { }
    getBooks(): Observable<BookModel[]> {
        return this.http.get<BookModel[]>(this._url);
    }
    addBook(cTitle, cAuthor, cDescription, cRating): Observable<BookModel> {
        this._newBook = new BookModel(undefined, cTitle, cAuthor, cDescription, cRating);

        return this.http.post<BookModel>(this._url, this._newBook).pipe(
                tap((book: BookModel) => console.log ('Book is Added'))
        );
    }
}
