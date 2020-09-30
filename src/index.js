const test = 'This is a text';
document.querySelector(".compose").addEventListener('click', composeBtn);
  function composeBtn(){
    let link = document.querySelector('.new-letter-content').classList;
    if(!link.contains('new-letter-show')){
      link.add('new-letter-show')
    } 
  }
  
document.querySelector(".fa-times").addEventListener('click', closeBtn);
  function closeBtn(){
    let link = document.querySelector('.new-letter-content').classList;
    if(link.contains('new-letter-show')){
      link.remove('new-letter-show')
    }
  }
  
document.querySelector(".send").addEventListener('click',sendBtn);
  function sendBtn(){
    let link = document.querySelector('.new-letter-content').classList;
    if(link.contains('new-letter-show')){
      link.remove('new-letter-show')
    }
  };
  
document.querySelector(".fa-angle-down").addEventListener('click', cleckAngleMore);
  function cleckAngleMore(){
    let link = document.querySelector('.more-tag').classList;
    if(link.contains('more-tag-show')){
      link.remove('more-tag-show')
    } else {
      link.add('more-tag-show')
    }
  }

document.querySelector(".fa-angle-down").addEventListener('click', clickAngleChat);
  function clickAngleChat (){
    let link = document.querySelector('.chat-tag').classList;
    if(link.contains('chat-tag-show')){
      link.remove('chat-tag-show')
    } else {
      link.add('chat-tag-show')
    }
  };
//show main menu when checkbox is clicked

const messagesAPI = '../api.json';
const mainMenu = document.querySelector('.main-menu');
const pagination = document.querySelector('#pagination');
const senderMain = document.querySelector("#sender");
const subjectMain = document.querySelector("#subject");
const searchBar = document.querySelector('#search');
const matchList = document.querySelector('#match-list')

let messages = [];
let maxPages = 1;
const msgDivMain = document.querySelector(".messages");
msgDivMain.style.display = 'none';
function showMainMenu(checkBox) {
}
const validatePageNumber = () => {
    if (pageNumber == 1) {
        leftArrow.innerHTML = '&lt;' //disabled link
        rightArrow.innerHTML = rightLink;
    }
    if (pageNumber > 1) {
        leftArrow.innerHTML = leftLink;
        if (pageNumber == maxPages) {
            rightArrow.innerHTML = '&gt;'
        } else {
            rightArrow.innerHTML = rightLink;
        }
    }
}
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
const fillPagination = (msgData, msgLimit) => {
    const totalMsg = msgData["total"];
    const paginationString = `1-${msgLimit} of ${totalMsg}`;
    pagination.textContent = paginationString;
}
const fillMainMsgs = msgLimit => {
    for (let i = 0; i < msgLimit; i++) {
        const {
            senderName,
            messageTitle
        } = messages[i];
        var messageEl = msgDivMain.cloneNode(true);
        messageEl.style.display = "block"; //make the element visible
        messageEl.querySelector('#sender').textContent = senderName;
        messageEl.querySelector('#subject').textContent = messageTitle;
        document.querySelector(".main-msgs").appendChild(messageEl);
    }
}
readMessages().then(response => {
    console.log('messages API successful retrieval')
}).
catch(err => {
    console.error(err);
})
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

///////
let items = [];
let myObj = {};

const showObject = function(){
    

}

    searchBar.addEventListener('input', (e) =>{
        console.log(e.target.value)
        console.log(myObj.items)
        console.log(myObj);
        alert('yaa')
    } )


fetch('../api.json')
 .then(function(resp){
     return resp.json();
 })
  .then(function(data){
      console.log(data);
      items = data.items;
      myObj = data;
      showObject();
      console.log(messages[1].senderName);

  })
let pageNumber = 1;
leftArrow = document.querySelector('#left');
leftLink = '<a href="#"> &lt;</a>'
console.log(leftLink);
rightArrow = document.querySelector('#right');
rightLink = '<a href="#"> &gt;</a>';
const leftClickFunction = () => {
    if (pageNumber > 1) {
        pageNumber--;
    }
    console.log(pageNumber);
    validatePageNumber();
}
const rightClickFunction = () => {
    if (pageNumber < maxPages) {
        pageNumber++;
    }
    console.log(pageNumber);
    validatePageNumber();
}
leftArrow.addEventListener('click', leftClickFunction);
rightArrow.addEventListener('click', rightClickFunction)
