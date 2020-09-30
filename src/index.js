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
//show main menu when checkbox is clicke
