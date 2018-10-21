let H = 0;
let M = 0;
let S = 0;

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

setInterval(()=>{
  let minute = document.getElementById("minute");
  let hour = document.getElementById("hour");
  let second = document.getElementById("second");

  date = new Date();

  S = addZero(date.getSeconds());
  M = addZero(date.getMinutes());
  H = addZero(date.getHours());

  second.innerHTML = S;
  minute.innerHTML = M;
  hour.innerHTML = H;

}, 10);
