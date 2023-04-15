

// ...Open save lead Form ... //
let saveLeadForm = document.getElementById('add_lead_form');
let saveLeadBtns = document.querySelectorAll('.save_lead');
let closeSaveLeadFormBtn = document.getElementById('close_add_lead_form');
let cancelSaveLeadBtn = document.querySelector('.cancel_btn');

saveLeadBtns.forEach( saveLeadBtn => {
    saveLeadBtn.addEventListener('click', () => {
        let overlay = document.getElementById('overlay');
    
        saveLeadForm.classList.add('active');
        overlay.style.display = "block";
        createNewTag();
    })
})

closeSaveLeadFormBtn.addEventListener( 'click', () => {
    saveLeadForm.classList.remove('active');
    overlay.style.display = "none";
})

cancelSaveLeadBtn.addEventListener( 'click', (e) => {
    e.preventDefault();
    saveLeadForm.classList.remove('active');
    overlay.style.display = "none";
})

//OVERLAY
let overlay = document.getElementById('overlay');
overlay.addEventListener( 'click', (e) => {
    if( e.target !== saveLeadForm || e.target !== createTagForm ){
        saveLeadForm.classList.remove('active');
        createTagForm.classList.remove('active');
        overlay.style.display = "none";
    }
})


// ..... SELECT TAG OPEN ....... //
let selectTagBtn = document.getElementById('select_btn_container');
let tags = document.querySelectorAll('.tag');

selectTagBtn.addEventListener( 'click', () =>{
    selectTagBtn.classList.toggle('open');

})


tags.forEach( eachTag => {
    eachTag.addEventListener( 'click', (e) => {

        for( let i = 0; i < tags.length; i++){
            if( tags[i] !== eachTag){
                tags[i].classList.remove('checked');

                eachTag.classList.add('checked');
                let selectBtnText = document.querySelector('.select_btn_text');
                selectBtnText.innerText = eachTag.children[1].innerText;
                selectTagBtn.classList.remove('open');
            }
        }
       
    })
})


// CREATE NEW TAG
const createTagBtn = document.querySelector('.create_btn');
const cancelTagBtn = document.querySelector('.cancel-tag-btn');
const createTagForm = document.querySelector('.create-tag-form');

function createNewTag() {

    createTagBtn.addEventListener( 'click', (e) => {
        e.preventDefault();

        saveLeadForm.classList.remove('active');
        overlay.style.display = "block";
        createTagForm.classList.add('active');

    });

    cancelTagBtn.addEventListener( 'click', (e) => {
        e.preventDefault();
        overlay.style.display = "none";
        createTagForm.classList.remove('active');

    });
}