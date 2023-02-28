const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return title + " by " + author + ", " + pages + ", " + read;
  };
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "Read");
const snowCrash = new Book("Snow Crash", "Neal Stephenson", "480", "Read");

addBookToLibrary(theHobbit);
addBookToLibrary(snowCrash);

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
  showBooks();
  document.getElementById("form").reset();
  function submitPopup() {
    document.getElementById("add").classList.toggle("active");
  }
  submitPopup();
}

const bookBlocks = document.getElementById("books");

function showBooks() {
  bookBlocks.innerHTML = "";
  for (i = 0; i < myLibrary.length; i++) {
    var bookBlock = document.createElement("div");
    bookBlock.id = myLibrary[i].title;
    bookBlock.className = "block";
    bookBlocks.appendChild(bookBlock);
    var blockTitle = document.createElement("div");
    blockTitle.className = "blockTitle";
    blockTitle.innerHTML = myLibrary[i].title;
    bookBlock.appendChild(blockTitle);
    var blockAuthor = document.createElement("div");
    blockAuthor.className = "blockAuthor";
    blockAuthor.innerHTML = `by ` + myLibrary[i].author;
    bookBlock.appendChild(blockAuthor);
    var blockPages = document.createElement("div");
    blockPages.className = "blockPages";
    blockPages.innerHTML = `Pages: ` + myLibrary[i].pages + ` pages`;
    bookBlock.appendChild(blockPages);
    var blockRead = document.createElement("div");
    blockRead.className = "blockRead";
    blockRead.innerHTML = `Read: ` + myLibrary[i].read;

    const checkBox = document.getElementById("submit");
    checkBox.addEventListener("change", () => {
      if (checkBox.checked) {
        blockRead.innerHTML = "Read";
      } else {
        blockRead.innerHTML = "Have not read";
      }
    });

    bookBlock.appendChild(blockRead);
  }
}
