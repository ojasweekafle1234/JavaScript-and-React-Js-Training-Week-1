document.addEventListener("DOMContentLoaded", function(){
setInterval(function() {
  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var period = "AM";
  if (hours >= 12) {
    period = "PM";
  }
  if (hours > 12) {
    hours = hours - 12;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  } 
  var clockTime = hours + ":" + minutes + ":" + seconds + " " + period;

  var clock = document.getElementById('clock');
  clock.innerText = clockTime;
},1000);


var d = new Date();
var getday = d.getDay();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var n = weekday[getday];

var dd = d.getDate();
var mm = d.getMonth() + 1;
var yyyy = d.getFullYear();

if(dd < 10) {
  dd = "0" + dd;
}

if(mm < 10) {
  mm = "0" + mm;
}

var today = dd + " / " + mm + " / " + yyyy;
var displayWeekday = document.getElementById('day');
var displayDate = document.getElementById('date');


function whatDayIsIt() {
  displayWeekday.innerText = n ;
}

function whatDateIsIt() {
  displayDate.innerText = today;
}

whatDayIsIt();
whatDateIsIt();
});