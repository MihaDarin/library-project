let bookTitle = document.getElementById('book_title');
let bookAuthor = document.getElementById('book_author');
let bookNumberOfPages = document.getElementById('number_of_pages');
let bookReadStatus = document.getElementById('read_status');
let library = document.getElementById('books__list');
let addNewBook = document.getElementById('add_new_book');
addNewBook.addEventListener('click', addBookToLibrary);
let myLibrary = [];

function book (title, author, numberOfPages, readStatus){
        this.title = bookTitle.value;
        this.author = bookAuthor.value;
        this.numberOfPages = bookNumberOfPages.value;
        this.readStatus = bookReadStatus;
            return (title, author, numberOfPages, readStatus);
    };

function addBookToLibrary(){
    console.log(this.title)
    myLibrary.push(book);
    console.log(myLibrary);
}

// function addBookToLibrary(){
//     library.innerHTML = new book('asds', 'auewrethor', 'numbefesfrOfPages', 'readsefStatus');
//     // return myLibrary.push(book);
// };

