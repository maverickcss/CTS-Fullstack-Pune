import { Book } from './bike';
import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  public message:string='Welcome';
  public books:Book[];
  public newBook:Book;
  selectedBook:Book;

   
  constructor(private bookSercice:BookService) {
    console.log('--- Books: '+this.books);
   }

  ngOnInit() {
    this.bookSercice.getBooks().then(books => this.books = books);
    
    this.newBook = new Book(undefined,'','');
  
  }

  createBike(book: Book): void {
    
        this.bookSercice.createBook(book)
          .then(book => {
            this.books.push(book);
            this.selectedBook = null;
          });
      }
    
      deleteBike(book: Book): void {
        this.bookSercice
          .deleteBike(book)
          .then(() => {
            this.books= this.books.filter(h => h !== book);
            if (this.selectedBook === book) { this.selectedBook = null; }
          });
      }
    
      showInfo(book: Book): void {
        this.selectedBook = book;
       // this.router.navigate(['/information', this.selectedBike.id]);
      }

  dispData(){
  
  }

}
