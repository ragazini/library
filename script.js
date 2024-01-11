const library = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead !== undefined ? isRead : false;
}

let titleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let pagesInput = document.getElementById("pages");
let isReadInput = document.getElementById("isRead");

const modal = document.querySelector(".modal");
const openModal = document.querySelector(".modal-open");
const closeModal = document.querySelector(".modal-close");
const submitBtn = document.getElementById("submit");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  clearForm();
  modal.close();
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addOrUpdateBook();
  displayBooks();
});

function clearForm() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  isReadInput.checked = false;
}

function addOrUpdateBook() {
  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const isRead = isReadInput.checked;

  if (!title || !author || !pages) {
    alert("Please fill in all required fields.");
    return;
  }

  if (title.length > 30 || author.length > 30) {
    alert("Invalid number of characters. Please try again.");
    return;
  }

  if (!isNaN(author)) {
    alert("Incorrect value. Please enter a valid number for the author.");
    return;
  }

  const newBook = new Book(title, author, pages, isRead);

  const dataIndex = submitBtn.getAttribute("data-index");

  if (dataIndex !== null) {
    // If dataIndex exists, it means we are updating an existing book
    library[dataIndex] = newBook;
    submitBtn.removeAttribute("data-index");
  } else {
    // If dataIndex is null, it means we are adding a new book
    library.push(newBook);
  }

  clearForm();
  modal.close();
}

function displayBooks() {
  const tableBody = document.getElementById("tbody");
  tableBody.innerHTML = "";

  library.forEach((book, index) => {
    const newRow = tableBody.insertRow();
    const titleCell = newRow.insertCell(0);
    const authorCell = newRow.insertCell(1);
    const pagesCell = newRow.insertCell(2);
    const isReadCell = newRow.insertCell(3);
    const del = newRow.insertCell(4);
    const update = newRow.insertCell(5);

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;
    isReadCell.textContent = book.isRead ? "Read" : "Not Read";

    del.innerHTML = `<img src="./delete.svg" class="delIcon" data-index="${index}">`;
    const deleteIcon = del.querySelector(".delIcon");
    deleteIcon.addEventListener("click", () => {
      library.splice(index, 1);
      displayBooks();
    });

    update.innerHTML = `<img src="./update.svg" class="updateIcon" data-index="${index}">`;

    const updateIcon = update.querySelector(".updateIcon");
    updateIcon.addEventListener("click", () => {
      openUpdateModal(library[index], index);
    });
  });
}

const openUpdateModal = (book, dataIndex) => {
  titleInput.value = book.title;
  authorInput.value = book.author;
  pagesInput.value = book.pages;
  isReadInput.checked = book.isRead;

  submitBtn.setAttribute("data-index", dataIndex);
  modal.showModal();
};

// const updateBook = () => {
//   addOrUpdateBook();
//   displayBooks();
// };

// const addBookBtn = document.getElementById("addBookBtn");
// addBookBtn.addEventListener("click", () => {
//   clearForm();
//   modal.showModal();
// });
