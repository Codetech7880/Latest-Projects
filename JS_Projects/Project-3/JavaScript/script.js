let leftBox = document.getElementById("left-container");
let rightBox = document.getElementById("right-container");
let lists = document.getElementsByClassName("list");

for ( let list of lists) {
  list.addEventlistener("dragstart", function (e) {
    let selected = e.target;

    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    rightBox.addEventListener("drop", function (e) {
      rightBox.appendChild("selected");
      selected = null;
    });

  });
}
