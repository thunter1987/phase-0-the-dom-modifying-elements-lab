// Write your code here!
const elemMain = document.getElementById("main");
elemMain.remove();

const newHeader = document.createElement("h1");
newHeader.setAttribute('id', 'victory');
newHeader.textContent = 'Tony is the champion';
document.head.append(newHeader);
