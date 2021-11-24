let library = document.querySelector('.books__list');
let addNewBook = document.getElementById('add_new_book');
addNewBook.addEventListener('click', addBookToLibrary);
addNewBook.addEventListener('click', showBook);
let myLibrary = [];

function book (title, author, numberOfPages, readStatus){
        this.title = document.getElementById('book_title').value;
        this.author = document.getElementById('book_author').value;
        this.numberOfPages = document.getElementById('number_of_pages').value;
        this.readStatus = document.getElementById('read_status').value;
        return;
};

function addBookToLibrary(){
    let newBook = new book();
    myLibrary.push(newBook);
    console.log(myLibrary)
};

function showBook(){
    let form;
        for(let i = 0; i < myLibrary.length; i++){ 
            form =
            `<form class="book__form">
                <fieldset class="book_info">
                    <label for="book_title">
                        Book Title
                        <div id="book_title">${myLibrary[i].title}</div>
                    </label>
                    <label for="book_author">
                        Book Author
                        <div id="book_author">${myLibrary[i].author}</div>
                    </label>
                    <label for="number_of_pages">
                        Number Of Pages
                        <div id="number_of_pages">${myLibrary[i].numberOfPages}</div>
                    </label>
                    <label for="read_status">
                        Read Status
                        <input type="checkbox" name="read_status" id="read_status">
                    </label>`
    };
    library.innerHTML += form;
};