const signUpFormHandler = async function (e) {
  e.preventDefault()
  const username = document.querySelector('#username-input-login').value
  const password = document.querySelector('#password-input-login').value

  const fetchRegisterEndpoint = await fetch('/api/user/register', {
    method: 'POST',
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    headers: { 'Content-type': 'application/json' },
  })

  if (fetchRegisterEndpoint.ok) {
    alert(`Successfully registered new user: ${username}!`)
    document.location.replace('/login')
  } else {
    alert('Error signing up.\nPlease try again.')
  }
}

const signUpForm = document.querySelector('#register-form')
if (signUpForm) {
  signUpForm.addEventListener('submit', signUpFormHandler)
}
