"use strict"

let myLibrary = [];

function Book(title, author, numOfPages, hasRead, no) {
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

    var newBook = new Book(newTitle, newAuthor, newNumOfPages, newHasRead, );

    myLibrary.push(newBook);

    displayAllBooks();
    clearTextBoxes();
}

function displayAllBooks() {
    var library = document.getElementById('library')

    library.textContent = "";

    for (let i = 0; i < myLibrary.length; i++){
        var newDiv = document.createElement('div');
        newDiv.setAttribute('id', i);
        newDiv.classList.add('libCard');

        var pTitle = document.createElement('p');
        pTitle.classList.add('pTitle');
        pTitle.textContent = myLibrary[i].title;
        newDiv.append(pTitle);

        var pAuthor = document.createElement('p');
        pAuthor.classList.add('pAuthor');
        pAuthor.textContent = myLibrary[i].author;
        newDiv.append(pAuthor);

        var pPages = document.createElement('p');
        pPages.classList.add('pPages');
        pPages.textContent = myLibrary[i].numOfPages;
        newDiv.append(pPages);

        //! This starts createing the hasRead switch
        var switchLabel = document.createElement('label');
        switchLabel.classList.add('switch');

        var chkBox = document.createElement('input');
        chkBox.setAttribute('type', 'checkbox');
        if (myLibrary[i].hasRead === true) {
            chkBox.checked = true;
        } else {
            chkBox.checked = false;
        }
        chkBox.addEventListener('click', function() {
            let label = this.parentElement;
            let index = label.parentElement.id;
            
            if(this.checked === false) {
                myLibrary[i].hasRead = false;
            } else if(this.checked === true) {
                myLibrary[i].hasRead = true;
            }
        });
        switchLabel.append(chkBox);

        var newSpan = document.createElement('span');
        newSpan.classList.add('slider');
        newSpan.classList.add('round');
        switchLabel.append(newSpan);

        newDiv.append(switchLabel);
        //! This ends creating the hasRead switch

        var delBtn = document.createElement('button');
        delBtn.classList.add('delBtn');
        delBtn.textContent = 'Delete Item';
        newDiv.append(delBtn);

        delBtn.addEventListener('click', function() {
            let index = this.parentElement.id;
            myLibrary.splice(index, 1);

            console.log(myLibrary);
            displayAllBooks();
        });

        library.append(newDiv);
    }
}

function clearLibrary() {
    document.getElementById('library').textContent = "";

    myLibrary.length = 0;
    index = 0;
}

function clearTextBoxes() {
    document.getElementById('txtTitle').value = '';
    document.getElementById('txtAuthor').value = '';
    document.getElementById('txtPages').value = '';
    document.getElementById('chkHasRead').checked = false;
}