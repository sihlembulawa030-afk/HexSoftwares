const books = [];
const history = [];

document.getElementById('add-button').addEventListener('click', function() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    if (title && author) {
        books.push({ title, author });
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        displayBooks();
    }
});

function displayBooks() {
    const bookList = document.getElementById('books');
    bookList.innerHTML = '';
    books.forEach((book, index) => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author}`;
        li.addEventListener('click', () => borrowBook(index));
        bookList.appendChild(li);
    });
}

function borrowBook(index) {
    const book = books.splice(index, 1)[0];
    history.push(book);
    displayBooks();
    displayHistory();
}

function displayHistory() {
    const historyList = document.getElementById('history');
    historyList.innerHTML = '';
    history.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author}`;
        historyList.appendChild(li);
    });
}
