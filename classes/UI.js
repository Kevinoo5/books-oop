class UI {
    addBook(title, author, isbn) {
        const table = document.querySelector("table")
        const newRow = table.insertRow()

        const cell1 = newRow.insertCell()
        const cell2 = newRow.insertCell()
        const cell3 = newRow.insertCell()
        const cell4 = newRow.insertCell()

        const cross = document.createElement('a')
        cross.appendChild(document.createTextNode('X'))
        cross.className = 'blue-text text-darken-2'
        cross.setAttribute('href', '#')

        cell1.innerHTML = title
        cell2.innerHTML = author
        cell3.innerHTML = isbn
        cell4.appendChild(cross)
    }
    deleteBook(book) {
        if (book.textContent === "X") {
            if (confirm("Do you want to delete this book?")) {
                book.parentElement.parentElement.remove();
            }
        }
    }
}
