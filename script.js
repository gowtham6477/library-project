 const myLibrary = [];

 function Book(){
    this.title = title;
    this.author = author;
    this.pages=pages;
    this.read = read;
 }

 function addbook(title,author,pages,read){
    var book = new Book(title,author,pages,read);
    myLibrary.push(book);
    displaybooks();
 }

 function displaybooks(){
    const lc =document.getElementById('library-container')
    lc.innerHTML = '';
    myLibrary.forEach((book,index)=>{
        const bookCard =document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML=`
        <h3>${book.title}</h3>
        <p>Author:${book.author}</p>
        <p>Pages:${book.pages}</p>
        <p>Read:${book.read ? 'Yes':'No'}</p>
        <button onclick="removeBook(${index})">Remove</button>
        <button onclick="readBook(${index})">Mark as ${book.read ? 'unread':'read'}</button>
        `;
        lc.appendChild(bookCard);
 });
}

function removeBook(index){
    myLibrary.splice(index,1);
    displaybooks();
}

function readBook(index){
    myLibrary[index].read = !myLibrary[index].read;
    displaybooks();
}

