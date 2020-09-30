//show main menu when checkbox is clicked

const messagesAPI = '../api.json';
const mainMenu = document.querySelector('.main-menu');
const pagination = document.querySelector('#pagination');
const senderMain = document.querySelector("#sender");
const subjectMain = document.querySelector("#subject");
const searchBar = document.querySelector('#search');
const matchList = document.querySelector('#match-list')


let messages = [];
const msgDivMain = document.querySelector(".messages");
msgDivMain.style.display = 'none';


function showMainMenu(checkBox) {

}
//api read
async function readMessages() {
    const response = await fetch(messagesAPI);
    const msgData = await response.json();
    //fill with messages
    messages = msgData["items"];
    const msgLimit = msgData["next"]["limit"];
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

