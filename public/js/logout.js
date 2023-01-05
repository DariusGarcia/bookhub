const logoutHandler = async function (event) {
  event.preventDefault()

  const fetchLogoutEndpoint = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })

  if (fetchLogoutEndpoint.ok) {
    alert('Successfully logged out!')
    document.location.replace('/')
  } else {
    alert('Failed to log out. Please try again.')
  }
}

const logoutBtn = document.querySelector('#logout-link')
if (logoutBtn) {
  logoutBtn.addEventListener('click', logoutHandler)
}
