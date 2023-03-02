const myLibrary = [];
let uniqueId = null;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = uniqueId++;
  this.info = function () {
    return title + " by " + author + ", " + pages + ", " + read;
  };
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

//const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "Read");
//const snowCrash = new Book("Snow Crash", "Neal Stephenson", "480", "Read");

//addBookToLibrary(theHobbit);
//addBookToLibrary(snowCrash);

/*myLibrary.forEach((book) => {
  console.log(book.title);
});*/

//showBooks();

//const popup = document.getElementById("add");

document.getElementById("addBook").onclick = function togglePopup() {
  document.getElementById("add").classList.toggle("active");
};

function logBook() {
  event.preventDefault();
  var addBook = new Book(
    document.getElementById("titleInput").value,
    document.getElementById("authorInput").value,
    document.getElementById("pagesInput").value,
    document.getElementById("readInput").value
  );
  addBookToLibrary(addBook);
  showBooks(addBook);
  document.getElementById("form").reset();
  function submitPopup() {
    document.getElementById("add").classList.toggle("active");
  }
  submitPopup();
}

const bookBlocks = document.getElementById("books");

function showBooks(book) {
  //Adds book container
  var bookBlock = document.createElement("div");
  bookBlock.id = book.id;
  bookBlock.className = "block";
  bookBlocks.appendChild(bookBlock);

  //Adds title text to container
  var blockTitle = document.createElement("div");
  blockTitle.className = "blockTitle";
  blockTitle.innerHTML = book.title;
  bookBlock.appendChild(blockTitle);

  //Adds author text to container
  var blockAuthor = document.createElement("div");
  blockAuthor.className = "blockAuthor";
  blockAuthor.innerHTML = `by ` + book.author;
  bookBlock.appendChild(blockAuthor);

  //Adds pages text to container
  var blockPages = document.createElement("div");
  blockPages.className = "blockPages";
  blockPages.innerHTML = `Pages: ` + book.pages + ` pages`;
  bookBlock.appendChild(blockPages);

  //Adds read info to container
  var blockRead = document.createElement("div");
  blockRead.className = "blockRead";
  blockRead.innerHTML = `Read: ` + book.read;
  bookBlock.appendChild(blockRead);

  //Adds remove button
  var blockButton = document.createElement("button");
  blockButton.className = "blockButton";
  blockButton.id = `Remove` + book.id;
  blockButton.innerHTML = "Remove";
  blockButton.onclick = () => deleteBook();
  bookBlock.appendChild(blockButton);

  //Function for remove button
  let deleteBook = function () {
    //let clearContainer = document.getElementById("books");
    let index = myLibrary.findIndex((b) => b.id === book.id);
    myLibrary.splice(index, 1);
    var removeContainer = document.getElementById(book.id);
    removeContainer.remove();
  };
}
