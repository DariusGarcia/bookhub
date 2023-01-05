// fetch book by query filter
const searchFormContainer = document.querySelector('#search-form')
const searchBtn = document.querySelector('#search-btn')

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

  await fetch(`/api/books/${searchFilter}/${searchQueryValue}`)
    .then((data) => data.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  //   document.location.replace('/')
}

searchBtn.addEventListener('click', filterHandler)
