

const signUpHandler = async function (event) {
  event.preventDefault();
  
  const newUser = document.querySelector('#username-input-login')
  const newPassword = document.querySelector('#password-input-login')

  const fetchLogin = await fetch('/api/user/register', {
    method: 'POST',
    body: JSON.stringify({
      username: newUser.value,
      password: newPassword.value,
    }),
    headers: { 'Content-type': 'application/json' },
  })

  if (fetchLogin.ok) {
    alert('success')
    document.location.replace('/login')
  } else {
    alert('Error signing up... Please try again.')
  }
}

const loginForm = document.querySelector('#login-form')
if (loginForm) {
  loginForm.addEventListener('submit', signUpHandler)
}



