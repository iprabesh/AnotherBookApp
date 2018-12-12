export class BookModel {
    Id: number;
    Title: string;
    Author: string;
    Description: string;
    Rating: number;


    /**
     *
     */
    constructor(cId, cTitle, cAuthor, cDescription, cRating) {
        this.Id = cId;
        this.Title = cTitle;
        this.Author = cAuthor;
        this.Description = cDescription;
        this.Rating = cRating;
    }

}
