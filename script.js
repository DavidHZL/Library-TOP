"use strict"

let myLibrary = [];

function Book(title, author, numOfPages, hasRead) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.hasRead = hasRead;
}

function addBookToLibrary() {
    var newTitle = document.getElementById('txtTitle').value;
    var newAuthor = document.getElementById('txtAuthor').value;
    var newNumOfPages = document.getElementById('txtPages').value;
    var newHasRead = document.getElementById('chkHasRead').checked;

    var newBook = new Book(newTitle, newAuthor, newNumOfPages, newHasRead);

    myLibrary.push(newBook);

    displayAllBooks();
}

function displayAllBooks() {
    var library = document.getElementById('library')

    library.textContent = "";

    for (let i = 0; i < myLibrary.length; i++){
        var newDiv = document.createElement('div');
        newDiv.classList.add('libCard');

        var pTitle = document.createElement('p');
        pTitle.textContent = myLibrary[i].title;
        newDiv.append(pTitle);

        var pAuthor = document.createElement('p');
        pAuthor.textContent = myLibrary[i].author;
        newDiv.append(pAuthor);

        var pPages = document.createElement('p');
        pPages.textContent = myLibrary[i].numOfPages;
        newDiv.append(pPages);

        var pHasRead = document.createElement('p');
        pHasRead.textContent = myLibrary[i].hasRead;
        newDiv.append(pHasRead);

        library.append(newDiv);
    }
}

function clearLibrary() {
    document.getElementById('library').textContent = "";

    myLibrary.length = 0;
}