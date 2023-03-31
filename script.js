// Book 
class Book {
    constructor(author, language, subject, title) {
      this.author = author;
      this.language = language;
      this.subject = subject;
      this.title = title;
    }
    
    render() {
      return `<li> <h2>${this.title}</h2> <i>${this.author}</i> <br><br> <p>${this.subject} (${this.language})</p> </li>`;
    }    
  }
  
  // Bookshelf
  class Bookshelf {
    constructor() {
      this.books = [];
    }
  
    seed(bookData) {
      this.books = bookData.map(book => new Book(book.author,book.language,book.subject,book.title));
      this.render();
    }
  
    render() {
      const bookList = this.books.map(book => book.render()).join("");
      document.getElementById("Library").innerHTML = `<ol>${bookList}</ol>`;
    }
  }
  
  const bookLibrary = new Bookshelf();
  bookLibrary.seed(bookData);
  