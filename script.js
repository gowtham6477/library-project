 const myLibrary = [];

 function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages=pages;
    this.read = read;
 }

 function addbook(title,author,pages,read){
    const book = new Book(title,author,pages,read);
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

document.getElementById('book-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    addbook(title,author,pages,read);
    document.getElementById('book-form').reset();
    document.getElementById('book-form-container').style.display='none';
});

document.getElementById('new-book-btn').addEventListener('click',()=>{
    document.getElementById('book-form-container').style.display='block';
});

addbook('the great','f.scott',180,true);
addbook('1984','george',328,false);