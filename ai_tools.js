
const categoryCards = document.querySelectorAll('[data-category]');
const categoryForms = document.querySelectorAll('[data-categoryForm]');
const generateBtns = document.querySelectorAll('.generate_btn');

const editIcons = document.querySelectorAll('.edit_icon');
const saveIcons = document.querySelectorAll('.save_icon');





// DISPLAY EMAIL, SOCIAL AND BLOG WRITER FORM
categoryCards.forEach( (eachCard) => {
   eachCard.addEventListener( 'click', () => {
      const eachCardDataAttribute = eachCard.getAttribute('data-category');
      categoryForms.forEach( (eachCategoryForm) => {
         const eachCategoryFormDataAttribute = eachCategoryForm.getAttribute('data-categoryForm');
         if(eachCardDataAttribute !== eachCategoryFormDataAttribute){
            eachCategoryForm.style.display = 'none';
         }else{
            eachCategoryForm.style.display = 'block';
         }
      })
   })
})


// DISPLAY RESULTS GENERATED
generateBtns.forEach( (generateBtn) => {
   generateBtn.addEventListener( 'click', (e) => {
      e.preventDefault();
      categoryForms.forEach( eachFormResult => {
         const eachFormResultDataAttribute = eachFormResult.getAttribute('data-categoryForm');

         if( eachFormResultDataAttribute === 'result_container' ){
            eachFormResult.style.display = 'block';
         } else{
            eachFormResult.style.display = 'none';
         }
      })
   })
})


// TOGGLE EDIT AND SAVE ICON
editIcons.forEach( (editIcon) => {
   editIcon.addEventListener( 'click', (e) => {
      let saveIcon = e.target.parentElement.children[1];
      let resultText = editIcon.parentElement.parentElement.parentElement.parentElement.children[1];

      resultText.contentEditable = 'true';
      resultText.classList.add('focus');
      editIcon.style.display = 'none';
      saveIcon.style.display = 'inline';
   })
})


saveIcons.forEach( (saveIcon) => {
   saveIcon.addEventListener( 'click', (e) => {
      let editIcon = e.target.parentElement.children[0];
      let resultText = saveIcon.parentElement.parentElement.parentElement.parentElement.children[1];

      resultText.contentEditable = 'false';
      resultText.classList.remove('focus');
      saveIcon.style.display = 'none';
      editIcon.style.display = 'inline';
   })
})