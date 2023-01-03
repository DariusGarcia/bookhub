const loginHandler = async function (event) {
  event.preventDefault()

  const usernameElement = document.querySelector('#username-input-login')
  const passwordElement = document.querySelector('#password-input-login')

  const fetchLogin = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameElement.value,
      password: passwordElement.value,
    }),
    headers: { 'Content-type': 'application/json' },
  })

  if (fetchLogin.ok) {
    alert('success')
    document.location.replace('/')
  } else {
    alert('Error logging in... Please try again.')
  }
}

const loginForm = document.querySelector('#login-form')
if (loginForm) {
  loginForm.addEventListener('submit', loginHandler)
}
