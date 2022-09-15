
// ...Open Add Team Member Form ... //
let addTeamMemberForm = document.getElementById('add_member_form');
let teamMemberFormOpenBtn = document.getElementById('add_team_member_btn');
let closeMemberForm = document.getElementById('close_add_member_form');

teamMemberFormOpenBtn.addEventListener('click', () => {
    let overlay = document.getElementById('overlay');

    addTeamMemberForm.classList.add('active');
    overlay.style.display = "block";
})

closeMemberForm.addEventListener( 'click', () => {
    addTeamMemberForm.classList.remove('active');
    overlay.style.display = "none";
})

let overlay = document.getElementById('overlay');
overlay.addEventListener( 'click', (e) => {
    if( e.target !== addTeamMemberForm ){
        addTeamMemberForm.classList.remove('active');
        overlay.style.display = "none";
    }
})


// .... Toggle Blue and White Icons On Hover about Add Team Member Buttons .....  //
teamMemberFormOpenBtn.addEventListener( 'mouseover', () => {
    let white_add_icon = document.getElementById('white_add_icon');
    let blue_add_icon = document.getElementById('blue_add_icon');

    white_add_icon.style.display = "none";
    blue_add_icon.style.display = "block";

})

teamMemberFormOpenBtn.addEventListener( 'mouseleave', () => {
    let white_add_icon = document.getElementById('white_add_icon');
    let blue_add_icon = document.getElementById('blue_add_icon');

    white_add_icon.style.display = "block";
    blue_add_icon.style.display = "none";

})