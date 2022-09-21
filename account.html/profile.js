let toggleButton = document.getElementById('toggle_button');



// .... TOGGLE BUTTON TO CHANGE PASSWORD .....//
toggleButton.addEventListener( 'click', () => {
    toggleButton.classList.toggle('active');

    let changePasswordInputs = document.getElementById('change_password_container');
    
    if( toggleButton.classList.contains('active')){
        changePasswordInputs.style.display = "flex";
    } else{
        changePasswordInputs.style.display = "none";
    }

})
