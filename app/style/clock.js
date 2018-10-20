let H = 0;
let M = 0;

setInterval(()=>{
  let minute = document.getElementById("minute");
  let hour = document.getElementById("hour");

  M = new Date().getMinutes();
  H = new Date().getHours();

  minute.innerHTML = M;
  hour.innerHTML = H;

}, 100);
