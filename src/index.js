//show main menu when checkbox is clicked

//const messagesAPI = '../api.json';
const mainMenu = document.querySelector('.main-menu');
const pagination = document.querySelector('#pagination');
const senderMain = document.querySelector("#sender");
const subjectMain = document.querySelector("#subject");
const searchBar = document.querySelector('#search');
const matchList = document.querySelector('.match-list')
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
    const itemsListData = [
        {
            "tags": {
            "isStarred": false,
            "isTrash": false,
            "isSpam": false
            },
            "senderName": "Seytech Co",
            "senderEmail": "support@seytech.com",
            "messageTitle": "Enrollment start date",
            "isRead": false,
            "date": "2020-10-01T16:02:06.598Z",
            "messages": [
            {
            "message": "When you would like to join us?",
            "attachments": [
            {
            "text": "seytech logo",
            "icon": "https://www.seytech.co/images/logo.png"
            }
            ],
            "date": "2020-10-01T16:02:06.598Z"
            },
            {
            "message": "Here is the info about our start date",
            "attachments": [],
            "date": "2020-10-01T16:02:06.598Z"
            }
            ]
            },
            {
            "tags": {
            "isStarred": false,
            "isTrash": false,
            "isSpam": false
            },
            "senderName": "Heroku",
            "senderEmail": "heroku@heroku.com",
            "messageTitle": "Excited to announce our new feature",
            "isRead": false,
            "date": "2020-10-01T16:02:06.598Z",
            "messages": [
            {
            "message": "Now you can use for free $$$",
            "attachments": [],
            "date": "2020-10-01T16:02:06.598Z"
            }
            ]
            },
            {
            "tags": {
            "isStarred": false,
            "isTrash": false,
            "isSpam": false
            },
            "senderName": "Facebook",
            "senderEmail": "facebook@facebook.com",
            "messageTitle": "Today is your friends birthday!",
            "isRead": false,
            "date": "2020-10-01T16:02:06.598Z",
            "messages": [
            {
            "message": "Time to congratulate your friends on their birthday",
            "attachments": [],
            "date": "2020-10-01T16:02:06.598Z"
            }
            ]
            },
            {
            "tags": {
            "isStarred": true,
            "isTrash": false,
            "isSpam": false
            },
            "senderName": "Michael Dunn",
            "senderEmail": "m@dunn.com",
            "messageTitle": "Don't forget about our meeting today...",
            "isRead": false,
            "date": "2020-10-01T16:02:06.598Z",
            "messages": [
            {
            "message": "Hey keep an eye on calendar and don't forget about our meeting today.",
            "attachments": [],
            "date": "2020-10-01T16:02:06.598Z"
            }
            ]
            },
            {
            "tags": {
            "isStarred": true,
            "isTrash": false,
            "isSpam": false
            },
            "senderName": "Michael Dunn",
            "senderEmail": "m@dunn.com",
            "messageTitle": "Don't forget about our meeting today...",
            "isRead": false,
            "date": "2020-10-01T16:02:06.598Z",
            "messages": [
            {
            "message": "Hey keep an eye on calendar and don't forget about our meeting today.",
            "attachments": [],
            "date": "2020-10-01T16:02:06.598Z"
            }
            ]
            },
            {
            "tags": {
            "isStarred": true,
            "isTrash": false,
            "isSpam": false
            },
            "senderName": "Michael Dunn",
            "senderEmail": "m@dunn.com",
            "messageTitle": "Don't forget about our meeting today...",
            "isRead": false,
            "date": "2020-10-01T16:02:06.598Z",
            "messages": [
            {
            "message": "Hey keep an eye on calendar and don't forget about our meeting today.",
            "attachments": [],
            "date": "2020-10-01T16:02:06.598Z"
            }
            ]
            },
            {
            "tags": {
            "isStarred": true,
            "isTrash": false,
            "isSpam": false
            },
            "senderName": "Michael Dunn",
            "senderEmail": "m@dunn.com",
            "messageTitle": "Don't forget about our meeting today...",
            "isRead": false,
            "date": "2020-10-01T16:02:06.598Z",
            "messages": [
            {
            "message": "Hey keep an eye on calendar and don't forget about our meeting today.",
            "attachments": [],
            "date": "2020-10-01T16:02:06.598Z"
            }
            ]
            },
            {
            "tags": {
            "isStarred": true,
            "isTrash": false,
            "isSpam": false
            },
            "senderName": "Michael Dunn",
            "senderEmail": "m@dunn.com",
            "messageTitle": "Don't forget about our meeting today...",
            "isRead": false,
            "date": "2020-10-01T16:02:06.598Z",
            "messages": [
            {
            "message": "Hey keep an eye on calendar and don't forget about our meeting today.",
            "attachments": [],
            "date": "2020-10-01T16:02:06.598Z"
            }
            ]
            }
    ]

    console.log(itemsListData);

    
 

const getObject = function(itemsListData){
 itemsListData.forEach(function(email){
 let firstdiv = document.createElement('div')
 matchList.appendChild()

 //     
 for(let i = 0; i < itemsListData.length; i++){
    if(inputVal.length > 0 && inputVal !== ""){
        if(itemsListData[i].senderName.toLowerCase().includes(inputVal) || itemsListData[i].senderEmail.toLowerCase().includes(inputVal) || itemsListData[i].messageTitle.toLowerCase().includes(inputVal)){
            matchList.innerHTML += `<div class="result">
            <a href="#" class="searchList">
            <i class="fas fa-envelope"></i>
            <span class="searchl">${itemsListData[i].messageTitle}</span>
            <p class="searchp"> 
            <em class="italic">from:  </em>
            ${itemsListData[i].senderName} &nbsp; <em class="italic">email: </em>${itemsListData[i].senderEmail}
            </p> 
            </a> 
            </div`
                }           
    }else {
        matchList.innerHTML = "";
    }
 
            
}
 })
}

    searchBar.addEventListener('input', (e) => {
       const inputVal = e.target.value.toLowerCase();  
        console.log(inputVal);
        getObject();
   
    });
  
   // let items = [];
    // let myObj = {};
    
    
    
    //  const showObject = function(){
    //     console.log(myObj);
    //  }

// fetch('https://polar-reaches-49806.herokuapp.com/api?page=1&category=primary')
//  .then(function(resp){
//      return resp.json();
//  })
//   .then(function(data){
//      // console.log(data);
//       items = data.items;
//       myObj = data;
//       showObj;
//       showObject();
//       //console.log(items[1].senderName);

//   });


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


