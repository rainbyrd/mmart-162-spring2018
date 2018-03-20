// show and hide the hidden modal menu on click of the items with the class of close, button action and button secondary.

const initModal = () => {
    document.querySelectorAll('.close, .button-action, .button-secondary').forEach(elem => {
        elem.onclick = () => {
            document.querySelector('.modal').classList.toggle('show')
        }
    })
}

initModal()
