
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




// .... Toggle Blue and White plus Icons On Hover about Add Team Member Button .....  //
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





// ..... ADD TEAM MEMBER .... //
let addTeamMemberButton = document.getElementById('add_member_button');
let memberFirstname = document.getElementById('member_first_name');
let memberLastName = document.getElementById('member_last_name');
let memberEmail =  document.getElementById('member_email');
let memberPassword = document.getElementById('member_password');
let teamMembersContainer = document.getElementById('team_members_container');


addTeamMemberButton.addEventListener( 'click', () => {

    let newMemberDetails = document.createElement('tr');
    newMemberDetails.innerHTML =   `<td>September 13, 2022</td>
                                    <td>${ memberFirstname.value } ${ memberLastName.value }</td>
                                    <td>${memberEmail.value }</td>
                                    <td>${ memberPassword.value }</td>
                                    <td>Active</td>
                                    <td style="text-align: center;" class="action_td">
                                        <button class="action_btn">Actions</button> 
                                        <div class="action_btn_container">
                                            <button type="button" class="edit_memeber_button">
                                                <span><i class="fa-solid fa-pen-to-square"></i></span>&nbsp;Edit
                                            </button>
                                            <button type="button" class="remove_team_member_btn">
                                                <span><i class="fa-solid fa-trash-can"></i></i></span>&nbsp;Delete
                                            </button>
                                            <button type="button" class="inactive_memeber_button">
                                                <span><i class="fa-solid fa-location-dot"></i></i></span>&nbsp;Inactive
                                            </button>
                                        </div>
                                    </td>`

    teamMembersContainer.append(newMemberDetails);

})


// .... OPEN ACTIONS BUTTONS .... //
let actionsButtons = document.querySelectorAll('.action_btn');
actionsButtons.forEach( actionBtn => {
    actionBtn.addEventListener( 'click', () => {
        let actionsButtonsContainer = actionBtn.parentElement.children[1];
        actionsButtonsContainer.classList.add('show');

        window.addEventListener( 'mouseup', (e) => {
            if( actionsButtonsContainer.classList.contains('show') && e.target !== actionsButtonsContainer ){
                actionsButtonsContainer.classList.remove('show');
            }
        })
    })

})





// .... REMOVE TEAM MEMBER .... //

let removeTeamMemberBtns = document.querySelectorAll('.remove_team_member_btn');
let confirmDeletePopUp = document.getElementById('confirm_delete_pop_up');
let cancelDeletePopUpBtn = document.getElementById('cancel_remove_btn');
let confirmDeletePopUpBtn = document.getElementById('confirm_remove_btn');

removeTeamMemberBtns.forEach( removeTeamMemberBtn => {
    removeTeamMemberBtn.addEventListener( 'click', () => {
        let overlay = document.getElementById('overlay');

        overlay.style.display = "block";
        confirmDeletePopUp.classList.add('active');

        // ... CONFIRM ROMOVE ... //     
        confirmDeletePopUpBtn.addEventListener( 'click', () => {
            let teamMember = removeTeamMemberBtn.parentElement.parentElement.parentElement;
            teamMember.remove();
            confirmDeletePopUp.classList.remove('active');
            overlay.style.display = "none";
        })

    })
})




// ... CANCEL ROMOVE ... //
cancelDeletePopUpBtn.addEventListener( 'click', () => {
    confirmDeletePopUp.classList.remove('active');
    overlay.style.display = "none";
})



// ... OVERLAY ... //
overlay.addEventListener( 'click', (e) => {
    if( e.target !== confirmDeletePopUp ){
        confirmDeletePopUp.classList.remove('active');
        overlay.style.display = "none";
    }
})













// .... ACTIVE AND INACTIVE TEAM MEMBER BUTTONS ..... //


// let activateButtons = document.querySelectorAll('.activate_btn');
// let disactivateButtons = document.querySelectorAll('.disactivate_btn');

// activateButtons.forEach( activateBtn => {
//     activateBtn.addEventListener( 'click', () =>{
//         let disactivateBtn = activateBtn.parentElement.children[3];

//         activateBtn.parentElement.parentElement.children[4].innerText = "Inactive";
//         activateBtn.style.display = "none";
//         disactivateBtn.style.display = "inline";
//     })
// } )

// disactivateButtons.forEach( disactivateBtn => {
//     disactivateBtn.addEventListener( 'click', () => {
//         let activateBtn = disactivateBtn.parentElement.children[2];  
        
//         disactivateBtn.parentElement.parentElement.children[4].innerText = "Active";
//         activateBtn.style.display = "inline";
//         disactivateBtn.style.display = "none";

//      })
// })
