// CREATE a new book submit handler
const filterHandler = async function (e) {
  e.preventDefault()

  const selectedOption = document.querySelector('#searchOptions').value
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
const newBookForm = document.querySelector('#searchedOptions')
if (newBookForm) {
  newBookForm.addEventListener('submit', newBookFormHandler)
}

const titleId = encodeURIComponent(req.params.title)
