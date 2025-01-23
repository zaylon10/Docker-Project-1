// The JavaScript code in index.js is linked to and controls the behavior of the index.html document.
// constants hold references to specific HTML elements with the corresponding IDs
const decreaseBtn = document.getElementById("decreaseBtn")
const resetBtn = document.getElementById("resetBtn")
const increaseBtn = document.getElementById("increaseBtn")
const countLabel = document.getElementById("countLabel")
let count =0;
// add event listeners (onclick) and update the count label when the respective button is clicked.

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    let count = 0;
    countLabel.textContent = count;
}