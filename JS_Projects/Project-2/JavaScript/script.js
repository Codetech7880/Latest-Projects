const hours = document.getElementById("hour");
const mint = document.getElementById("mint");
const sec = document.getElementById("sec");

setInterval(() => {
  function updateClock() {
    currentTime = new Date();

    hours.innerHTML =
      (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    mint.innerHTML =
      (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML =
      (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
  }
  updateClock();
}, 1000);
