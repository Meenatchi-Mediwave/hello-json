// console.log('It works')

// var age = 32
// var isGreat = false;
// var book1Name = 'Harry Potter'
// var book1Author = 'JK Rowling';

// var book = {
//     name: 'harry Potter',
//     author: 'Jk Rowling'
// }

// var likes = [
//     "ice-cream", "novels"
// ]

var books = [
  {
    id: 1670331233713,
    name: "harry potter",
    author: "JK rowling",
    likes: [{}],
  },
  {
    id: 1670331235417,
    name: "A song of ice and fire",
    author: "George R R Martin",
    likes: [{}],
  },
];

function makeId() {
  return new Date().getTime();
}

function addToBookContainer(bookhtml) {
  var container = document.querySelector("#books-container");
  container.appendChild(bookhtml);
}

function clearBookContainer() {
  var container = document.querySelector("#books-container");
  container.innerHTML = "";
}

function makeBookHTML(book) {
  // <div class="border-margin">
  //         <h2>Harry Potter</h2>
  //         <p>JK Rowling</p>
  //         <button>Remove book</button>
  //  </div>
  const div = document.createElement("div");
  div.setAttribute("class", "border-margin");
  div.setAttribute("id", book.id);

  const h2 = document.createElement("h2");
  h2.innerHTML = book.name;

  div.appendChild(h2);

  const p = document.createElement("p");
  p.innerHTML = book.author;

  div.appendChild(p);

  const button = document.createElement("button");
  button.innerHTML = "Remove book";
  div.appendChild(button);

  // event listener for removing a book
  button.addEventListener("click", function () {
    // document.getElementById(book.id).remove();
    var newBooks = books.filter((b) => b.id != book.id);
    books = newBooks;
    renderAllBooks();
  });

  return div;
}

function renderAllBooks() {
  clearBookContainer();
  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var html = makeBookHTML(book);
    addToBookContainer(html);
  }
}

function clearInputs() {
  document.querySelector("#newbook-name").value = "";
  document.querySelector("#newbook-author").value = "";
}

function handleSubmit(e) {
  //   console.log("submit called", e);
  e.preventDefault();
  var name = document.querySelector("#newbook-name").value;
  var author = document.querySelector("#newbook-author").value;

  if (name == "" || author == "") {
    console.log("name or author is empty");
    return;
  }

  var book = {
    id: makeId(),
    name: name,
    author: author,
  };
  books.push(book);
  renderAllBooks();
  clearInputs();
}

function hookForm() {
  var form = document.querySelector("#newbook-form");
  //   form.addEventListener("submit", function (e) {
  //     e.preventDefault();
  //   });
  form.addEventListener("submit", handleSubmit);
}

function main() {
  renderAllBooks();
  hookForm();
}

// start
main();
