`use strict`;
let userName;
document.getElementById(`submit`).onclick = function () {
  userName = document.getElementById(`myText`).value;
  console.log(userName);
};
