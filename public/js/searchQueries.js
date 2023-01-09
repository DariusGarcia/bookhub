// fetch book by query filter
const searchBtn = document.querySelector('#search-btn')
// array to store search results
const booksArray = []
// const displayElements = booksArray.map((book) => `<h1>${book.title}</h1>`)

// function displaySearchResults() {
//   const bookContainer = document.querySelector('#book-search-container')
//   // bookContainer.innerHTML = `<article>${displayElements}</article>`
//   bookContainer.innerHTML = '<div>hello</div>'
//   console.log('display el: ' + displayElements)
// }

const filterHandler = async function (e) {
  e.preventDefault()
  const searchFilterDropdown = document.querySelector('#searchOptions')
  const searchQueryValue = document.querySelector('#search-input').value

  // Get the selected option's index
  const selectedIndex = searchFilterDropdown.selectedIndex

  // Get the selected option's value
  let selectedDropdownFilter = searchFilterDropdown.options[selectedIndex].value

  let searchFilter = null
  switch (selectedDropdownFilter) {
    case 'title':
      searchFilter = 'title'
      break
    case 'author':
      searchFilter = 'author'
      break
    case 'genre':
      searchFilter = 'genre'
      break
    default:
      searchFilter = 'title'
  }

  const searchData = await fetch(
    `/api/books/${searchFilter}/${searchQueryValue}`
  )
    .then((searchResults) => searchResults.json())
    .then((books) => {
      booksArray.push(...books)
    })
    .catch((err) => console.log(err))

  console.log('search results: ' + booksArray)
  searchData
}

searchBtn.addEventListener('click', filterHandler)
