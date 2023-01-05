const logout = async function (event) {
  event.preventDefault()

  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })

  if (response.ok) {
    alert('Successfully logged out.')
    document.location.replace('/')
  } else {
    alert('Failed to log out')
  }
}

document.querySelector('#logout-link').addEventListener('click', logout)
