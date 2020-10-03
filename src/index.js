// askat start
// data
let dataobj = {};
fetchApi();
fetchApi("social");
fetchApi("promotions");

// DOM ELEMENTS
const primary = document.querySelector(".primary");
const social = document.querySelector(".social");
const promo = document.querySelector(".promotions");
const emails = document.querySelector(".emails");
const trash = document.querySelector(".trash");
const star = document.querySelector(".starred");
const spam = document.querySelector(".spam");
const envelope = document.querySelector(".fa-envelope-open");

const emailDiv = document.querySelector(".email");
const mainMenu = document.querySelector(".main-menu");
const pagination = document.querySelector("#pagination");
const senderMain = document.querySelector("#sender");
const subjectMain = document.querySelector("#subject");
const searchBar = document.querySelector('#search');
const matchList = document.querySelector('.match-list')
const middle = document.querySelector('.middle');
const result = document.querySelector('.result');
const searchList = document.querySelectorAll('.searchList');
const clearSearch = document.querySelector('.clear-search');

// EVENT LISTENERS
social.addEventListener("click", () => listToUi(dataobj, "social"));
primary.addEventListener("click", () => listToUi(dataobj, "primary"));
promo.addEventListener("click", () => listToUi(dataobj, "promotions"));

emails.addEventListener("click", deleteOrRead);

function fetchApi(category = "primary") {
  // tabSwitch(category);
  fetch(
    `https://polar-reaches-49806.herokuapp.com/api?page=1&category=${category}`
  )
    .then((data) => data.json())
    .then((data) => dataFetch(data, category));
  function dataFetch(data, category) {
    dataobj[category] = Object.assign(data);
  }
}

function listToUi(data, category) {
  tabSwitch(category);
  document.querySelector(".emails").textContent = "";
  data[category].items.forEach((item, index) => {
    if (!item.tags.isTrash) {
      // console.log("listing");
      createEmailList(item, index);
    }
  });
}

function tabSwitch(category) {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    if (tab.classList.contains("active")) {
      tab.classList.remove("active");
    }
    if (tab.classList.contains(category)) {
      tab.classList.add("active");
    }
  });
}

function activeTab() {
  const tabs = document.querySelectorAll(".tab");
  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i].classList.contains("active")) {
      return tabs[i].classList[0];
    }
  }
}

function changeTag(e) {
  let category = activeTab();
  if (e.target.getAttribute("star-id") !== null) {
    for (let key in dataobj[category].items) {
      if (e.target.getAttribute("star-id") == key) {
        dataobj[category].items[key].tags.isStarred = !dataobj[category].items[
          key
        ].tags.isStarred;
      }
    }
  } else if (e.target.getAttribute("data-id") !== null) {
    console.log("trash");
    for (let key in dataobj[category].items) {
      if (e.target.getAttribute("data-id") == key) {
        dataobj[category].items[key].tags.isTrash = !dataobj[category].items[
          key
        ].tags.isTrash;
      }
    }
  } else if (e.target.getAttribute("envelop-id") !== null) {
    for (let key in dataobj[category].items) {
      if (e.target.getAttribute("envelop-id") == key) {
        dataobj[category].items[key].isRead = !dataobj[category].items[key]
          .isRead;
      }
    }
  }
}

function createEmailList(email, id) {
  const emailItem = emailDiv.cloneNode(true);
  let date = email.date;
  if (!email.isRead) {
    emailItem.querySelector(".email-msg").classList.add("unread");
    emailItem.querySelector(".email-sender-wrapper").classList.add("unread");
  }

  if (email.messages) {
    emailItem.querySelector(
      ".email-body"
    ).textContent = `– ${email.messages[0].message}`;
  }
  emailItem.querySelector(".email-sender").textContent = email.senderName;
  emailItem.querySelector(".email-title").textContent = email.messageTitle;
  emailItem.querySelector(".email-date").textContent = `${date.slice(
    11,
    16
  )} PM`;
  emailItem.querySelector(".fa-trash").setAttribute("data-id", id);
  emailItem.querySelector(".fa-envelope-open").setAttribute("envelop-id", id);
  emailItem.querySelector(".fa-star").setAttribute("id", id);
  emailItem.querySelector(".starred").setAttribute("id", id);
  emailItem.querySelector(".email-sender").setAttribute("id", id);
  emailItem.querySelector(".email-sender-wrapper").setAttribute("id", id);
  emailItem.querySelector(".email-title").setAttribute("id", id);
  emailItem.querySelector(".email-body").setAttribute("id", id);
  emailItem.querySelector(".email-msg").setAttribute("id", id);
  emailItem.setAttribute("id", id);
  emails.appendChild(emailItem);
  // console.log(emailItem);
}

// FUNCTION DELETE EMAIL OR READ
function deleteOrRead(e) {
  let category = activeTab();
  if (e.target.getAttribute("data-id") !== null) {
    for (let key in dataobj[category].items) {
      if (e.target.getAttribute("data-id") == key) {
        changeTag(e);
        listToUi(dataobj, category);
      }
    }
  } else if (e.target.getAttribute("envelop-id") !== null) {
    changeTag(e);
    listToUi(dataobj, category);
    openClose(e);
    // console.log("env", e.target.classList);
  } else if (e.target.getAttribute("star-id") !== null) {
    changeTag(e);
  } else {
    for (let key in dataobj[category].items) {
      if (e.target.id == key) {
        console.log("delete", category);
        // openEmail(dataobj[category].items[key]);
        // readEmail(category, key);
      }
    }
  }
}

function openClose(e) {
  if (e.target.classList.contains("fa-envelope-open")) {
    e.target.classList.remove("fa-envelope-open");
    e.target.classList.add("fa-envelope");
  } else {
    e.target.classList.remove("fa-envelope");
    e.target.classList.add("fa-envelope-open");
  }
}

// Askat end
//const messagesAPI = '../api.json';



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
    
    function getFiltered(inp){
  
       
    }

    

    
    searchBar.addEventListener('input', (e) => {
    const inputVal = e.target.value.toLowerCase();  
      console.log(`showing input: ${inputVal}`)
     
      if(inputVal.length > 0 && inputVal !== ''){
          //clear x 
          clearSearch.classList.add('clear-search-visible');
    
        const temp = itemsListData.filter(function(msg){
            return msg.senderName.toLowerCase().includes(inputVal) || 
            msg.senderEmail.toLowerCase().includes(inputVal) || 
            msg.messageTitle.toLowerCase().includes(inputVal)
        }).map(function(listOfmsg){
            return `<div class="result">
                        <a href="#" class="searchList">
                        <i class="fas fa-envelope"></i>
                        <span class="searchl">${listOfmsg.messageTitle}</span>
                        <p class="searchp"> 
                        <em class="italic">from:  </em>
                        ${listOfmsg.senderName} &nbsp; <em class="italic">email: </em>${listOfmsg.senderEmail}
                        </p> 
                        </a> 
                        </div`
        }).join('');
        matchList.innerHTML = temp;
        console.log(`this is temp arr = ${temp}`)

      }else{
          matchList.innerHTML = '';
          
          
      }

      //clear search

      clearSearch.addEventListener('click', function(){
        searchBar.value = '';
        matchList.innerHTML = '';
        clearSearch.classList.remove('clear-search-visible');
    });
 

    });

    // searchList.addEventListener('click', function(){
    //     alert('You clicked');
    //     console.log(`You clicked on message!`);
    // })

  

const test = "This is a text";
document.querySelector(".compose").addEventListener("click", composeBtn);
function composeBtn() {
  let link = document.querySelector(".new-letter-content").classList;
  if (!link.contains("new-letter-show")) {
    link.add("new-letter-show");
  }
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

//show main menu when checkbox is clicked
