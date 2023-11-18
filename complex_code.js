/* complex_code.js */

// This code demonstrates a simulated library management system
// It includes classes, inheritance, data structures, and CRUD operations

class Library {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.books = [];
    this.patrons = [];
    this.loans = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(`Added book '${book.title}' to library.`);
  }

  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
      console.log(`Removed book '${book.title}' from library.`);
    }
  }

  addPatron(patron) {
    this.patrons.push(patron);
    console.log(`Added patron '${patron.name}' to library.`);
  }

  removePatron(patron) {
    const index = this.patrons.indexOf(patron);
    if (index !== -1) {
      this.patrons.splice(index, 1);
      console.log(`Removed patron '${patron.name}' from library.`);
    }
  }

  loanBook(book, patron) {
    if (this.books.includes(book) && this.patrons.includes(patron)) {
      if (patron.canBorrow()) {
        const loan = new Loan(book, patron);
        book.available = false;
        patron.borrowedBooks.push(book);
        this.loans.push(loan);
        console.log(`Loaned book '${book.title}' to patron '${patron.name}'.`);
      } else {
        console.log(`Patron '${patron.name}' has reached the maximum borrowing limit.`);
      }
    } else {
      console.log("Invalid loan request.");
    }
  }

  returnBook(book, patron) {
    if (book.available === false && patron.borrowedBooks.includes(book)) {
      const loan = this.findLoan(book, patron);
      if (loan) {
        book.available = true;
        patron.borrowedBooks.splice(patron.borrowedBooks.indexOf(book), 1);
        this.loans.splice(this.loans.indexOf(loan), 1);
        console.log(`Returned book '${book.title}' from patron '${patron.name}'.`);
      }
    } else {
      console.log("Invalid return request.");
    }
  }

  findLoan(book, patron) {
    for (const loan of this.loans) {
      if (loan.book === book && loan.patron === patron) {
        return loan;
      }
    }
    return null;
  }
}

class Book {
  constructor(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.available = true;
  }
}

class Patron {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.borrowedBooks = [];
  }

  canBorrow() {
    return this.borrowedBooks.length < 5;
  }
}

class Loan {
  constructor(book, patron) {
    this.book = book;
    this.patron = patron;
    this.loanDate = new Date();
  }
}

// Usage example:

const library = new Library("My Library", "123 Main St");

const book1 = new Book("Book 1", "Author 1", "Fantasy");
const book2 = new Book("Book 2", "Author 2", "Mystery");

library.addBook(book1);
library.addBook(book2);

const patron1 = new Patron("Patron 1", 25);
const patron2 = new Patron("Patron 2", 30);

library.addPatron(patron1);
library.addPatron(patron2);

library.loanBook(book1, patron1);
library.loanBook(book2, patron2);
library.returnBook(book1, patron1);