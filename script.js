

// ....... Hide and Show Password ......//
let showPasswordIcon = document.getElementById('show_password');
let hidePasswordIcon = document.getElementById('hide_password');
let passwordInput = document.getElementById('password_input');

showPasswordIcon.addEventListener('click', () => {
    showPasswordIcon.style.display = "none";
    hidePasswordIcon.style.display = "block";

    if(passwordInput.type == "password"){
        passwordInput.type = "text";
    }
})

hidePasswordIcon.addEventListener( 'click', () => {
    hidePasswordIcon.style.display = "none";
    showPasswordIcon.style.display = "block";

    if(passwordInput.type == "text"){
        passwordInput.type = "password";
    }
})

