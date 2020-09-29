//show main menu when checkbox is clicked

const messagesAPI = '../api.json';
const mainMenu = document.querySelector('.main-menu');
const pagination = document.querySelector('#pagination');
const senderMain = document.querySelector("#sender");
const subjectMain = document.querySelector("#subject");
​
​
let messages = [];
let maxPages = 1;
const msgDivMain = document.querySelector(".messages");
msgDivMain.style.display = 'none';
​
​
function showMainMenu(checkBox) {
​
}
​
const validatePageNumber = () => {
    if (pageNumber == 1) {
        leftArrow.innerHTML = '&lt;' //disabled link
        rightArrow.innerHTML = rightLink;
    }
​
    if (pageNumber > 1) {
        leftArrow.innerHTML = leftLink;
        if (pageNumber == maxPages) {
            rightArrow.innerHTML = '&gt;'
        } else {
            rightArrow.innerHTML = rightLink;
        }
    }
}
​
//api read
async function readMessages() {
    const response = await fetch(messagesAPI);
    const msgData = await response.json();
    //fill with messages
    messages = msgData["items"];
    const msgLimit = msgData["next"]["limit"];
    maxPages = msgData["next"]["page"];
    validatePageNumber();
    fillPagination(msgData, msgLimit);
    fillMainMsgs(msgLimit);
    addListeners();
}
​
const fillPagination = (msgData, msgLimit) => {
    const totalMsg = msgData["total"];
    const paginationString = `1-${msgLimit} of ${totalMsg}`;
    pagination.textContent = paginationString;
}
​
const fillMainMsgs = msgLimit => {
    for (let i = 0; i < msgLimit; i++) {
        const {
            senderName,
            messageTitle
        } = messages[i];
​
        var messageEl = msgDivMain.cloneNode(true);
        messageEl.style.display = "block"; //make the element visible
        messageEl.querySelector('#sender').textContent = senderName;
        messageEl.querySelector('#subject').textContent = messageTitle;
        document.querySelector(".main-msgs").appendChild(messageEl);
    }
}
​
​
readMessages().then(response => {
    console.log('messages API successful retrieval')
}).
catch(err => {
    console.error(err);
})
​
function addListeners() {
    setTimeout(() => {
        console.log('working interval')
        let checkBoxes = document.querySelectorAll('.check');
        checkBoxes.forEach(elem => {
            elem.addEventListener('click', (e) => {
                let checked = e.target.checked;
                console.log('check clicked')
                if (checked) {
                    mainMenu.style.visibility = 'visible';
                } else {
                    mainMenu.style.visibility = 'hidden';
                }
            });
        })
    }, 1000);
}
​
let pageNumber = 1;
leftArrow = document.querySelector('#left');
leftLink = '<a href="#"> &lt;</a>'
console.log(leftLink);
rightArrow = document.querySelector('#right');
rightLink = '<a href="#"> &gt;</a>';
​
const leftClickFunction = () => {
    if (pageNumber > 1) {
        pageNumber--;
    }
    console.log(pageNumber);
    validatePageNumber();
​
}
​
const rightClickFunction = () => {
    if (pageNumber < maxPages) {
        pageNumber++;
    }
    console.log(pageNumber);
    validatePageNumber();
}
​
leftArrow.addEventListener('click', leftClickFunction);
rightArrow.addEventListener('click', rightClickFunction)