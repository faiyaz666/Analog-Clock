const secs = document.querySelector("[data-second-hand]");
const mins = document.querySelector("[data-minute-hand]");
const hours = document.querySelector("[data-hour-hand]");
function setClock() {
  const date = new Date();
  const second = date.getSeconds();
  const minute = date.getMinutes();
  const hour = date.getHours();

  const secR = second / 60;
  const minR = (minute + secR) / 60;
  const hourR = (minR + hour) / 12;

  setRatio(secs, secR);
  setRatio(mins, minR);
  setRatio(hours, hourR);
}

function setRatio(elem, rotationRatio) {
  elem.style.setProperty("--rotation", rotationRatio * 360);
}

setInterval(setClock, 1000);
setClock();
