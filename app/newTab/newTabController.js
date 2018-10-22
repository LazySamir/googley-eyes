let clock = new Clock();
let minute = document.getElementById("minute");
let hour = document.getElementById("hour");
let second = document.getElementById("second");

window.setInterval(function() {
  let timeArray = clock.getNewTime();
  hour.innerHTML = timeArray[0];
  minute.innerHTML = timeArray[1];
  second.innerHTML = timeArray[2];
}, 10);

let container = document.getElementById("links-container");
let latestLinks = new LatestLinks(container);
latestLinks.getLatestUrls();
