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
  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const pagesInput = document.getElementById("pages");
  const isReadInput = document.getElementById("isRead");

  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const isRead = isReadInput.checked;

  const newBook = new Book(title, author, pages, isRead);
  library.push(newBook);

  // Clear input values
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  isReadInput.checked = false;

  // Close the modal
  modal.close();

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
  displayBooks();
});

function displayBooks() {
  const tableBody = document.getElementById("tbody");

  // Clear existing rows
  tableBody.innerHTML = "";

  // Iterate over the library array and add each book to the table
  library.forEach((book) => {
    // Create a new row and cells for the book information
    const newRow = tableBody.insertRow();
    const titleCell = newRow.insertCell(0);
    const authorCell = newRow.insertCell(1);
    const pagesCell = newRow.insertCell(2);
    const isReadCell = newRow.insertCell(3);

    // Set the cell content with the book information
    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;
    isReadCell.textContent = book.isRead ? "Read" : "Not Read";
  });
}
