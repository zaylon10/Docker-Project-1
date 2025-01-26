const myBttn = document.getElementById("myBttn");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 10;

let randomnum;

myBttn.onclick = function(){
    randomnum = Math.floor(Math.random()* max) + min
    myLabel.textContent = randomnum;
}