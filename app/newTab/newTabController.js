let clock = new Clock();
let minute = document.getElementById("minute");
let hour = document.getElementById("hour");
let second = document.getElementById("second");

window.setInterval(function() {
  let timeArray = clock.getNewTime();
  hour.innerHTML = timeArray[0];
  minute.innerHTML = timeArray[1];
  second.innerHTML = timeArray[2];
  // clock.injectHTML(hour, minute, second);
}, 10);

let latestLinks = new LatestLinks();
latestLinks.getLatestUrls();