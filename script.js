//your JS code here. If required.
document.getElementById('book-form').addEventListener('submit', addBook);

function addBook(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    const bookList = document.getElementById('book-list');

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete btn btn-danger">Clear</button></td>
    `;

    bookList.appendChild(row);

    document.getElementById('book-form').reset();

    row.querySelector('.delete').addEventListener('click', function() {
        row.remove();
    });
}