
// ......Drop Down Profile ........//
let profile = document.getElementById('profile');
let profileDropdown = document.getElementById('profile-dropdown');

profile.addEventListener( 'click', () => {
    profileDropdown.classList.toggle('show');
})