const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show') // shows the functionality of the code written here 
}

hamburgerButton.addEventListener('click', toggleButton)


