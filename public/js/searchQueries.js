const searchBtn = document.querySelector('#search-btn')
// array to store search results

// fetch book by query filter
const filterHandler = async function (e) {
  e.preventDefault()
  const searchFilterDropdown = document.querySelector('#searchOptions')
  const searchQueryValue = document.querySelector('#search-input').value
  const booksArray = []

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

  console.log(booksArray)
  searchData
}

searchBtn.addEventListener('click', filterHandler)
