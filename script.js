const myLibrary = []
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const btn = document.querySelector("#button");

function Books(title, author) {
	this.title = title;
	this.author = author;
}

const book = new Books(title.value, author.value);

function addBookToLibrary() {
	array.push(book.title)
	document.write(array);
	document.write(`
	<div>
	<h2>${book.title}</h2>
	<p>Author: ${book.author}</p>
	<hr>
	`);
}

btn.addEventListener("click", addBookToLibrary);
