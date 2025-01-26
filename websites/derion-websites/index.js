const myBtn =document.getElementById("myBtn")
const myLabel =document.getElementById("myLabel")
const min = 1;
const max = 50;

let randomnum;


myBtn.onclick = function(){
    randomnum = Math.floor(Math.random() * max) + min
    myLabel.textContent = randomnum;
}

