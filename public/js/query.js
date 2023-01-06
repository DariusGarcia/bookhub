// fetch book by title
const searchFormContainer = document.getElementById('#search-form')

const filterHandler = async function (e) {
  e.preventDefault()

  const searchQueryValue = document.getElementById('#search-input').value

  const dropdown = document.getElementById('#searchOptions')
  const selectedIndex = dropdown.selectedIndex
  const selectedValue = dropdown.options[selectedIndex].value

  console.log(selectedValue)

  const encodedUri = searchQueryValue
  console.log(encodedUri)

  await fetch(`/api/books/title/${encodedUri}`)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
  //   document.location.replace('/')
}

// add new book handler function to book form event listener
searchFormContainer.addEventListener('submit', filterHandler)
