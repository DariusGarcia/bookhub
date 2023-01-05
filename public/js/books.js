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
  document.location.replace('/')
}
// add new book handler function to book form event listener
const bookForm = document.querySelector('#book-form')
if (bookForm) {
  bookForm.addEventListener('submit', newBookFormHandler)
}

// UPDATE single book submit handler
const updateBookFormHandler = async function (e) {
  e.preventDefault()
  const title = document.querySelector('#book-form-title-input').value
  const author = document.querySelector('#book-form-author-input').value
  const genre = document.querySelector('#book-form-genre-input').value
  const description = document.querySelector(
    '#book-form-description-input'
  ).value
  const publishingDate = document.querySelector(
    '#book-form-datePublished-input'
  ).value

  await fetch('/api/books/', {
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
  document.location.replace('/')
}
// add update book handler function to book form event listener
const updateBookForm = document.querySelector('#update-book-form')
if (updateBookForm) {
  updateBookForm.addEventListener('submit', updateBookFormHandler)
}
