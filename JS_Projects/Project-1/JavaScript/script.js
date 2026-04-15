const counterDisplay = document.getElementById("counterDisplay");
const incrementButton = document.getElementById("incrementBtn");
const decrementButton = document.getElementById("decrementBtn");
const resetButton = document.getElementById("resetBtn");

let count = 0;

function updateCount(){
    counterDisplay.textContent = count;
}

incrementButton.addEventListener("click", function increment(){
    if(count < 20){
        count++;
        updateCount();
    }
});
decrementButton.addEventListener("click", function decrement(){
    if(count > 0){
        count--;
        updateCount();
    }
});
resetButton.addEventListener("click", function reset(){
    count = 0;
    updateCount();
})

document.addEventListener("keydown", function (event) {
  console.log(event.key);
});