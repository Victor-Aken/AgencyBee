

// ...Open Add Team Member Form ... //
let saveLeadForm = document.getElementById('add_lead_form');
let saveLeadBtns = document.querySelectorAll('.save_lead');
let closeSaveLeadFormBtn = document.getElementById('close_add_lead_form');

saveLeadBtns.forEach( saveLeadBtn => {
    saveLeadBtn.addEventListener('click', () => {
        let overlay = document.getElementById('overlay');
    
        saveLeadForm.classList.add('active');
        overlay.style.display = "block";
    })
})

closeSaveLeadFormBtn.addEventListener( 'click', () => {
    saveLeadForm.classList.remove('active');
    overlay.style.display = "none";
})

let overlay = document.getElementById('overlay');
overlay.addEventListener( 'click', (e) => {
    if( e.target !== saveLeadForm ){
        saveLeadForm.classList.remove('active');
        overlay.style.display = "none";
    }
})


// ..... SELECT PROJECT OPEN ....... //
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

