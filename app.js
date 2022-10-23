ui = new UI()
ls = new LS()

const submitButton = document.querySelector("#submit-book")
const inputTitle = document.querySelector("#title")
const inputAuthor = document.querySelector("#author")
const inputISBN = document.querySelector("#isbn")
submitButton.addEventListener("click", addBook)

function addBook(e){
    const book = new Book(inputTitle.value, inputAuthor.value, inputISBN.value)
    ui.addBook(book.title, book.author, book.isbn)
    ls.addBook(book)
    book.addedToUI()
    e.preventDefault()
}