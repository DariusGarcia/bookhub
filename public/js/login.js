const loginFormHandler = async (e) => {
  e.preventDefault()
  const username = document.querySelector('#username-input-login').value
  const password = document.querySelector('#password-input-login').value

  const fetchLoginEndpoint = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      username: username,
      password: password,
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

// function to display "signin" or "signout" whether user is logged in or not
function handleAuthDisplay() {
  const loginEl = document.querySelector('#login-link')
  const logoutEl = document.querySelector('#logout-link')
  const signupEl = document.querySelector('#signup-link')
  const authStatusEl = document.querySelector('#auth-status').value
  if (authStatusEl === '' || null) {
    // means user is logged out
    loginEl.classList.remove('hidden')
  } else if (authStatusEl == true) {
    // means user is logged in
    loginEl.classList.add('hidden')
    logoutEl.classList.remove('hidden')
  }

  // logoutEl.classList.remove('hidden')
}

handleAuthDisplay()

const authStatus = document.getElementById('auth-status').value
