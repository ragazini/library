function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead !== undefined ? isRead : false;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
  };
}

const book1 = new Book("my book", "leo", 123);

console.log(book1.info());
