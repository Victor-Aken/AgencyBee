
const categoryCards = document.querySelectorAll('[data-category]');
const categoryForms = document.querySelectorAll('[data-categoryForm]');
const generateBtns = document.querySelectorAll('.generate_btn');
const resultContainer = document.querySelector('.result_container');
const resultBlock = document.querySelector('.result_generated_container');



// DISPLAY EMAIL, SOCIAL AND BLOG WRITER FORM
categoryCards.forEach( (eachCard) => {
   eachCard.addEventListener( 'click', () => {
      resultBlock.style.display = 'none'; 
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
generateBtns.forEach( generateBtn => {
   generateBtn.addEventListener( 'click', (e) => {
      e.preventDefault();

      //GET USER INPUTED VALUES
      let formfield = e.target.parentElement.parentElement.parentElement;

      //GENRATE RESULT
      let result =  document.createElement('div');
      result.classList.add('result')
      result.innerHTML = 
      `<div style="border-bottom: 1px solid rgb(172, 170, 170); display: flex; align-items: center; justify-content:   space-between; padding: 20px;">
            <p style="font-size: 18px; color: #003559;">Type (<span>Outreach Email</span>)</p>
            <div class="icons">
               <div class="icon">
                     <i class="fa-regular fa-pen-to-square edit_icon" title="Edit"></i>
                     <i class="fa-regular fa-floppy-disk save_icon" title="Save" style="display: none;"></i>
               </div>
               <div class="icon">
                     <i class="fa-regular fa-paste" title="Duplicate"></i>
               </div>

               <div class="icon copy-icon-cont">
                     <p class="copied-text">Copied!</p>
                     <i class="fa-regular fa-copy copy-icon" title="Copy"></i>
               </div>
               
               <div class="icon" title="Favourite">
                     <i class="fa-regular fa-heart"></i>
               </div>

               <div class="icon">
                     <i class="fa-regular fa-trash-can" title="Delete"></i>
               </div>
            </div>
         </div>
         <p class="result_text">
               RESULT FROM AI DISPLAYED HERE!
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, incidunt. Qui, doloribus necessitatibus. Repellendus, assumenda optio sequi magnam quibusdam sint sit explicabo, excepturi amet laboriosam autem ducimus dolor animi eos quis tenetur odio. Ipsa et, voluptate atque quod quos qui ratione sit! Aperiam, quia excepturi illo id perspiciatis saepe voluptas similique vitae, impedit animi quo minus nostrum aut repudiandae, aliquam nobis. Cum cumque enim similique molestias aliquam magnam, ipsa perspiciatis hic recusandae nesciunt velit rerum quis sequi, delectus doloremque quaerat odio autem quia nulla obcaecati esse, laudantium id voluptate maiores! Doloribus suscipit nisi laborum, commodi atque, magni quasi perferendis obcaecati distinctio libero debitis voluptatem itaque! Perferendis necessitatibus, mollitia possimus iusto pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem fugit, pariatur numquam ratione quidem labore perferendis doloribus provident doloremque nisi dolor quas.
               saepe voluptas similique vitae, impedit animi quo minus nostrum aut repudiandae, aliquam nobis. Cum cumque enim similique molestias aliquam magnam, ipsa perspiciatis hic recusandae nesciunt velit rerum quis sequi, delectus doloremque quaerat odio autem.
         </p>
      </div>`

      resultContainer.appendChild(result);
      updateAllResultCount();
      editResult();
      resultBlock.style.display = 'block';
      categoryForms.forEach( form => {
         form.style.display = 'none';
      })
      
   })
})



//EDIT GENERATED RESULT
function editResult(){
   resultContainer.addEventListener( 'click', (e) => {
      //EDIT RESULT
      if(e.target.classList.contains('edit_icon')){
         let saveIcon = e.target.parentElement.children[1];
         let resultText = e.target.parentElement.parentElement.parentElement.parentElement.children[1];
   
         resultText.contentEditable = 'true';
         resultText.classList.add('focus');
         e.target.style.display = 'none';
         saveIcon.style.display = 'inline';
      } else if(e.target.classList.contains('save_icon')){
         //SAVE RESULT
         let editIcon = e.target.parentElement.children[0];
         let resultText = e.target.parentElement.parentElement.parentElement.parentElement.children[1];

         resultText.contentEditable = 'false';
         resultText.classList.remove('focus');
         e.target.style.display = 'none';
         editIcon.style.display = 'inline';

      } else if( e.target.classList.contains('copy-icon')){
         //COPY RESULT
         let resultText = e.target.parentElement.parentElement.parentElement.parentElement.children[1];
         navigator.clipboard.writeText( resultText.innerText).then( () => {
            e.target.parentElement.children[0].classList.add('active');
            setTimeout( function() {
               e.target.parentElement.children[0].classList.remove('active');
            }, 2500)
         });
      }
   })
 

}


// UPDATE ALL GENERATED RESULT COUNT
function updateAllResultCount(){
   document.getElementById('all-ai-generated').innerText = resultContainer.children.length;
}



// QUOTE SLIDER
const quotes = document.querySelectorAll('.quote');
const indicator = document.querySelectorAll('.dot');

let counter = 0;

function switchQuote(currentQuote){
   currentQuote.classList.add('active');
   let quoteId = currentQuote.getAttribute('attr');

   if(quoteId > counter){
      quotes[counter].style.animation = 'next1 0.5s ease-in forwards';
      counter = quoteId;
      quotes[counter].style.animation = 'next2 0.5s ease-in forwards';
   } else if( quoteId == counter){ 

      return;
   } else{
      quotes[counter].style.animation = 'prev1 0.5s ease-in forwards';
      counter = quoteId;
      quotes[counter].style.animation = 'prev2 0.5s ease-in forwards';
   }
}

// Auto Sliding
function slideNext(){
   quotes[counter].style.animation = 'next1 0.5s ease-in forwards';
   if( counter >= quotes.length - 1 ){
      counter = 0;
   } else{
      counter++;
   }

   quotes[counter].style.animation = 'next2 0.5s ease-in forwards';
}

function autoSlide(){
   deleteInterval = setInterval( slideNext, 15000);
}
autoSlide();












//const editIcons = document.querySelectorAll('.edit_icon');
//const saveIcons = document.querySelectorAll('.save_icon');




// generateBtns.forEach( (generateBtn) => {
//    generateBtn.addEventListener( 'click', (e) => {
//       e.preventDefault();
//       categoryForms.forEach( eachFormResult => {
//          const eachFormResultDataAttribute = eachFormResult.getAttribute('data-categoryForm');

//          if( eachFormResultDataAttribute === 'result_container' ){
//             eachFormResult.style.display = 'block';
//          } else{
//             eachFormResult.style.display = 'none';
//          }
//       })
//    })
// })


   // editIcons.forEach( (editIcon) => {
   //    editIcon.addEventListener( 'click', (e) => {
   //       let saveIcon = e.target.parentElement.children[1];
   //       let resultText = editIcon.parentElement.parentElement.parentElement.parentElement.children[1];
   
   //       resultText.contentEditable = 'true';
   //       resultText.classList.add('focus');
   //       editIcon.style.display = 'none';
   //       saveIcon.style.display = 'inline';
   //    })
   // })

//SAVE GENERATED RESULT
// saveIcons.forEach( (saveIcon) => {
//    saveIcon.addEventListener( 'click', (e) => {
//       let editIcon = e.target.parentElement.children[0];
//       let resultText = saveIcon.parentElement.parentElement.parentElement.parentElement.children[1];

//       resultText.contentEditable = 'false';
//       resultText.classList.remove('focus');
//       saveIcon.style.display = 'none';
//       editIcon.style.display = 'inline';
//    })
// })
