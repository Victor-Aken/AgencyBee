
const categoryCards = document.querySelectorAll('[data-category]');
const categoryForms = document.querySelectorAll('[data-categoryForm]');
const generateBtns = document.querySelectorAll('.generate_btn');


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