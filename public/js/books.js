// CREATE a new book submit handler
const newBookFormHandler = async function (e) {
  e.preventDefault()
  const title = document.querySelector('#book-form-title-input').value
  const author = document.querySelector('#book-form-author-input').value
  const genre = document.querySelector('#book-form-genre-input').value
  const publishingDate = document.querySelector(
    '#book-form-datePublished-input'
  ).value
  const description = document.querySelector(
    '#book-form-description-input'
  ).value

  await fetch('/api/books', {
    method: 'POST',
    body: JSON.stringify({
      title,
      author,
      genre,
      description,
      publishingDate,
    }),
    headers: { 'Content-Type': 'application/json' },
  })
  document.location.replace('/books')
}
// add new book handler function to book form event listener
const newBookForm = document.querySelector('#book-form')
if (newBookForm) {
  newBookForm.addEventListener('submit', newBookFormHandler)
}

// UPDATE single book submit handler
const updateBookFormHandler = async function (e) {
  e.preventDefault()
  const bookId = document.querySelector('#hidden-book-id').value
  const title = document.querySelector('#book-form-title-input').value
  const author = document.querySelector('#book-form-author-input').value
  const genre = document.querySelector('#book-form-genre-input').value
  const description = document.querySelector(
    '#book-form-description-input'
  ).value
  const publishingDate = document.querySelector(
    '#book-form-datePublished-input'
  ).value

  await fetch(`/api/books/${bookId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      author,
      genre,
      description,
      publishingDate,
    }),
    headers: { 'Content-Type': 'application/json' },
  })
  console.log('book updated')
  document.location.replace('/books')
}

// add update book handler function to book form event listener
const updateBookForm = document.querySelector('#update-book-form')
if (updateBookForm) {
  updateBookForm.addEventListener('submit', updateBookFormHandler)
}

async function fetchTrending() {
  const data = await fetch('/api/tags/2')
    .then((data) => data.json())
    .catch((err) => console.log(err))
  
}

fetchTrending()
