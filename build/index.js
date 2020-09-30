
//show main menu when checkbox is clicked

const messagesAPI = '../api.json';
const mainMenu = document.querySelector('.main-menu');
const pagination = document.querySelector('#pagination');
const senderMain = document.querySelector("#sender");
const subjectMain = document.querySelector("#subject");
const searchBar = document.querySelector('#search');
const matchList = document.querySelector('#match-list');

let messages = [];
const msgDivMain = document.querySelector(".messages");
msgDivMain.style.display = 'none';
const test = 'This is a text';
document.querySelector(".compose").addEventListener('click', composeBtn);
function composeBtn() {
  let link = document.querySelector('.new-letter-content').classList;
  if (!link.contains('new-letter-show')) {
    link.add('new-letter-show');
  }
}

document.querySelector(".fa-times").addEventListener('click', closeBtn);
function closeBtn() {
  let link = document.querySelector('.new-letter-content').classList;
  if (link.contains('new-letter-show')) {
    link.remove('new-letter-show');
  }
}

document.querySelector(".send").addEventListener('click', sendBtn);
function sendBtn() {
  let link = document.querySelector('.new-letter-content').classList;
  if (link.contains('new-letter-show')) {
    link.remove('new-letter-show');
  }
};

document.querySelector(".fa-angle-down").addEventListener('click', cleckAngleMore);
function cleckAngleMore() {
  let link = document.querySelector('.more-tag').classList;
  if (link.contains('more-tag-show')) {
    link.remove('more-tag-show');
  } else {
    link.add('more-tag-show');
  }
}

document.querySelector(".fa-angle-down").addEventListener('click', clickAngleChat);
function clickAngleChat() {
  let link = document.querySelector('.chat-tag').classList;
  if (link.contains('chat-tag-show')) {
    link.remove('chat-tag-show');
  } else {
    link.add('chat-tag-show');
  }
};

readMessages().then(response => {
    console.log('messages API successful retrieval');
}).catch(err => {
    console.error(err);
});

function addListeners() {
    setTimeout(() => {
        console.log('working interval');
        let checkBoxes = document.querySelectorAll('.check');
        checkBoxes.forEach(elem => {
            elem.addEventListener('click', e => {
                let checked = e.target.checked;
                console.log('check clicked');
                if (checked) {
                    mainMenu.style.visibility = 'visible';
                } else {
                    mainMenu.style.visibility = 'hidden';
                }
            });
        });
    }, 1000);
}

///////
let items = [];
let myObj = {};

const showObject = function () {};

searchBar.addEventListener('input', e => {
    console.log(e.target.value);
    console.log(myObj.items);
    console.log(myObj);
    alert('yaa');
});

fetch('../api.json').then(function (resp) {
    return resp.json();
}).then(function (data) {
    console.log(data);
    items = data.items;
    myObj = data;
    showObject();
    console.log(messages[1].senderName);
});
//show main menu when checkbox is clicked
