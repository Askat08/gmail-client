//show main menu when checkbox is clicked

const checkBox = document.getElementById('check');
const mainMenu = document.querySelector('.main-menu');

checkBox.addEventListener('click', ()=> {
    let checked = checkBox.checked;
    console.log(checked);
    console.log(mainMenu);
    if(checked) {
        mainMenu.setAttribute('visibility', 'visible');
    } else {
        mainMenu.setAttribute('visibility', 'hidden');
    }
});