// fetch book by title
const searchFormContainer = document.querySelector('#search-form')
const searchBtn = document.querySelector('#search-btn')

const filterHandler = async function (e) {
  e.preventDefault()
  console.log('hello')
  const dropdown = document.querySelector('#searchOptions')
  const searchQueryValue = document.querySelector('#search-input').value

  // Get the selected option's index
  const selectedIndex = dropdown.selectedIndex

  // Get the selected option's value
  let selectedValue = dropdown.options[selectedIndex].value

  let encodedUri = searchQueryValue

  let selectedOption = null
  if (selectedValue === 'title') {
    selectedOption = 'title'
  } else if (selectedValue === 'author') {
    selectedOption = 'author'
  } else if (selectedValue) {
    selectedOption = 'genre'
  }

  await fetch(`/api/books/${selectedOption}/${encodedUri}`)
    .then((data) => data.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

  console.log(encodedUri)

  //   document.location.replace('/')
}
// add new book handler function to book form event listener

searchBtn.addEventListener('click', filterHandler)
