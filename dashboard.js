
// ......Drop Down Profile ........//
let profile = document.getElementById('profile');
let profileDropdown = document.getElementById('profile-dropdown');

profile.addEventListener( 'click', () => {
    profileDropdown.classList.toggle('show');
})



// ...... HAMBURGER TOGGLE SIDE BAR ..... //
let hamburgerIcon = document.getElementById('hamburger_icon');
let sideBar = document.getElementById('side_bar');

hamburgerIcon.addEventListener( 'click', () =>{
    sideBar.classList.toggle('active');
})