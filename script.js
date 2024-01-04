const library = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead !== undefined ? isRead : false;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
  };
}

// const book1 = new Book("my book", "leo", 123);

// console.log(book1.info());

function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isRead = document.getElementById("isRead").checked;

  const newBook = new Book(title, author, pages, isRead);

  library.push(newBook);

  console.log(library);
}

const modal = document.querySelector(".modal");
const openModal = document.querySelector(".modal-open");
const closeModal = document.querySelector(".modal-close");
const submitBtn = document.getElementById("submit");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBook();
});
