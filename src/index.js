//show main menu when checkbox is clicked

//const messagesAPI = '../api.json';
const mainMenu = document.querySelector('.main-menu');
const pagination = document.querySelector('#pagination');
const senderMain = document.querySelector("#sender");
const subjectMain = document.querySelector("#subject");
const searchBar = document.querySelector('#search');
const matchList = document.querySelector('#match-list')
const middle = document.querySelector('.middle');


// let messages = [];
// const msgDivMain = document.querySelector(".messages");
// msgDivMain.style.display = 'none';


// function showMainMenu(checkBox) {

// }
// //api read
// async function readMessages() {
//     const response = await fetch(messagesAPI);
//     const msgData = await response.json();
//     //fill with messages
//     messages = msgData["items"];
//     const msgLimit = msgData["next"]["limit"];
//     fillPagination(msgData, msgLimit);
//     fillMainMsgs(msgLimit);
//     addListeners();
// }

// const fillPagination = (msgData, msgLimit) => {
//     const totalMsg = msgData["total"];
//     const paginationString = `1-${msgLimit} of ${totalMsg}`;
//     pagination.textContent = paginationString;
// }

// const fillMainMsgs = msgLimit => {
//     for (let i = 0; i < msgLimit; i++) {
//         const {
//             senderName,
//             messageTitle
//         } = messages[i];

//         var messageEl = msgDivMain.cloneNode(true);
//         messageEl.style.display = "block"; //make the element visible
//         messageEl.querySelector('#sender').textContent = senderName;
//         messageEl.querySelector('#subject').textContent = messageTitle;
//         document.querySelector(".main-msgs").appendChild(messageEl);
//     }
// }


// readMessages().then(response => {
//     console.log('messages API successful retrieval')
// }).
// catch(err => {
//     console.error(err);
// })

// function addListeners() {
//     setTimeout(() => {
//         console.log('working interval')
//         let checkBoxes = document.querySelectorAll('.check');
//         checkBoxes.forEach(elem => {
//             elem.addEventListener('click', (e) => {
//                 let checked = e.target.checked;
//                 console.log('check clicked')
//                 if (checked) {
//                     mainMenu.style.visibility = 'visible';
//                 } else {
//                     mainMenu.style.visibility = 'hidden';
//                 }
//             });
//         })
//     }, 1000);
// }

     
    /////// Aidana's code
    let items = [];
    let myObj = {};
    
    
    
     const showObject = function(){
        console.log(myObj);
     }



   const showObj =  searchBar.addEventListener('input', (e) => {
       console.log(items);
       //console.log(myObj);
        const inputVal = e.target.value.toLowerCase();
        console.log(inputVal);

        for(let i = 0; i < items.length; i++){
            if(inputVal.length >0){
                if(items[i].senderName.toLowerCase().includes(inputVal) || items[i].senderEmail.toLowerCase().includes(inputVal) || items[i].messageTitle.toLowerCase().includes(inputVal)){
                    matchList.innerHTML = `<div class='textInput'>
                    ${items[i].senderName}, ${items[i].senderEmail} , ${items[i].messageTitle}
                    </div>`
                        }            
            };
      
     }
    });
  


fetch('https://polar-reaches-49806.herokuapp.com/api?page=1&category=primary')
 .then(function(resp){
     return resp.json();
 })
  .then(function(data){
     // console.log(data);
      items = data.items;
      myObj = data;
      showObj;
      showObject();
      //console.log(items[1].senderName);

  });


  ///Aidana's code end

const test = "This is a text";
document.querySelector(".compose").addEventListener("click", composeBtn);
function composeBtn() {
  let link = document.querySelector(".new-letter-content").classList;
  if (!link.contains("new-letter-show")) {
    link.add("new-letter-show");
  }

  document.querySelector(".fa-times").addEventListener("click", closeBtn);
  function closeBtn() {
    let link = document.querySelector(".new-letter-content").classList;
    if (link.contains("new-letter-show")) {
      link.remove("new-letter-show");
    }
  }

  document.querySelector(".send").addEventListener("click", sendBtn);
  function sendBtn() {
    let link = document.querySelector(".new-letter-content").classList;
    if (link.contains("new-letter-show")) {
      link.remove("new-letter-show");
    }
  }

  document
    .querySelector(".fa-angle-down")
    .addEventListener("click", cleckAngleMore);
  function cleckAngleMore() {
    let link = document.querySelector(".more-tag").classList;
    if (link.contains("more-tag-show")) {
      link.remove("more-tag-show");
    } else {
      link.add("more-tag-show");
    }
  }

  document
    .querySelector(".fa-angle-down")
    .addEventListener("click", clickAngleChat);
  function clickAngleChat() {
    let link = document.querySelector(".chat-tag").classList;
    if (link.contains("chat-tag-show")) {
      link.remove("chat-tag-show");
    } else {
      link.add("chat-tag-show");
    }
  }
}

//show main menu when checkbox is clicked


