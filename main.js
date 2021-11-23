// const hobbit = new book('hobbit', 'tolkin', '200', 'yes');

// console.log(hobbit.info());

let myLibrary = [];

function book (title, author, numberOfPages, readStatus){
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.readStatus = readStatus;
        this.info = function(){
            return (title + " by " + author + ',' + numberOfPages + ',' + readStatus);
        };
        
    };

function addBookToLibrary(){
    return myLibrary.push(book);
}

console.log(myLibrary)