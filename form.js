



// .... OPEN ACTIONS BUTTONS .... //
let actionsButtons = document.querySelectorAll('.action_btn');
actionsButtons.forEach( actionBtn => {
    actionBtn.addEventListener( 'click', () => {

        let actionsButtonsContainer = actionBtn.parentElement.children[2];
        actionsButtonsContainer.classList.add('show');

        window.addEventListener( 'mouseup', (e) => {
            if( actionsButtonsContainer.classList.contains('show') && e.target !== actionsButtonsContainer ){
                actionsButtonsContainer.classList.remove('show');
            }
        })
    })

})

