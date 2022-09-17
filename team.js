
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




// ..... SELECT PROJECT OPEN ....... //
let selectBtn = document.getElementById('select_btn_container');
let projects = document.querySelectorAll('.each_project_item');

selectBtn.addEventListener( 'click', () =>{
    selectBtn.classList.toggle('open');

})

projects.forEach( eachProject => {
    eachProject.addEventListener( 'click', () => {
        eachProject.classList.toggle('checked');

        let checked = document.querySelectorAll('.checked');
        let selectBtnText = document.querySelector('.select_btn_text');

        if( checked && checked.length > 0 ){
            selectBtnText.innerText = `${ checked.length} Selected`;
        } else{
            selectBtnText.innerText = "Select Project(s)";
        }
    })
})

