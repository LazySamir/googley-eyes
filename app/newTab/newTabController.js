/* exported Clock, LatestLinks */

let clock = new Clock();
let minute = document.getElementById("minute");
let hour = document.getElementById("hour");
let second = document.getElementById("second");
let date = document.getElementById("date");
let totalTime = document.getElementById("total-time");
let newDate = clock.getNewDate();
date.innerHTML = newDate;

window.setInterval(function() {
  let timeArray = clock.getNewTime();
  hour.innerHTML = timeArray[0];
  minute.innerHTML = timeArray[1];
  second.innerHTML = timeArray[2];
}, 10);

let linksContainer = document.getElementById("links-container");
let latestLinks = new LatestLinks(linksContainer, totalTime);
latestLinks.getLatestUrls();
