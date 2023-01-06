

// Get the dropdown menu
const dropdownMenu = document.getElementById('dropdown-menu');
const userIsSignedIn = document.querySelector('#auth-status').value

// Check if the user is signed in
if (userIsSignedIn) {
  // If the user is signed in, remove the "Sign In" list item
  const signInItem = dropdownMenu.getElementById('sign-in');
  dropdownMenu.removeChild(signInItem);
} else {
  // If the user is not signed in, remove the "Sign Out" list item
  const signOutItem = dropdownMenu.getElementById('sign-out');
  dropdownMenu.removeChild(signOutItem);
}






< !--Template for the dropdown menu-- >
<template id="dropdown-menu-template">
  <ul class="dropdown-menu">
    {{#if userIsSignedIn}}
      <!-- Show the "Sign Out" list item if the user is signed in -->
      <li class="sign-out">Sign Out</li>
    {{else}}
      <!-- Show the "Sign In" list item if the user is not signed in -->
      <li class="sign-in">Sign In</li>
    {{/if}}
  </ul>
</template>

<!--Render the dropdown menu-- >
const dropdownMenuTemplate = Handlebars.compile(document.querySelector('#dropdown-menu-template').innerHTML);
const dropdownMenuHTML = dropdownMenuTemplate({ userIsSignedIn: userIsSignedIn });
document.querySelector('.dropdown').innerHTML = dropdownMenuHTML;
