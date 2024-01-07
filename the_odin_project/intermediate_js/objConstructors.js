function Book(title, author, pageCount, isRead = false) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.isRead = isRead;
  this.info = function () {
    let read = "read";
    let notRead = "not read yet";
    if (this.isRead === true) {
      return `${this.title}, ${this.author}, ${this.pageCount}, ${read}`;
    } else {
      return `${this.title}, ${this.author}, ${this.pageCount}, ${notRead}`;
    }
  };
}

const book1 = new Book("the professional chef", "leo", 867, true);

// console.log(book1.info());

const book2 = new Book("the hobbit", "j r r tolkien", 295, false);

// console.log(book2.info());

let test = "author";
console.log(book2[test]);

//////////////////////////////////////
//////////////////////////////////////

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(this.name);
  };
}

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");
player1.sayName(); // logs 'steve'
player2.sayName(); // logs 'also steve'

Player.prototype.sayHello = function () {
  console.log("Hello, I'm a player!");
};

// player1.sayHello(); // logs "Hello, I'm a player!"
// player2.sayHello(); // logs "Hello, I'm a player!"

console.log(Object.getPrototypeOf(Player.prototype));
