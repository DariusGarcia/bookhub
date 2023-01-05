const loginFormHandler = async function (e) {
  e.preventDefault()
  const username = document.querySelector('#username-input-login').value
  const password = document.querySelector('#password-input-login').value

  const fetchLoginEndpoint = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
    headers: { 'Content-type': 'application/json' },
  })

  if (fetchLoginEndpoint.ok) {
    alert(`Successfully logged in user: ${username}!`)
    document.location.replace('/')
  } else {
    alert('Error logging in.\nPlease try again.')
  }
}

const loginForm = document.querySelector('#login-form')
if (loginForm) {
  loginForm.addEventListener('submit', loginFormHandler)
}
