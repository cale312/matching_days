'use strict';

function myFunction() {
  var date1 = document.querySelector('.dateOpt1').value;
  var date2 = document.querySelector('.dateOpt2').value;

  var newDate1 = new Date(date1);
  var newDate2 = new Date(date2);
  var days = new Array();
  days[0] = document.querySelector("#Sunday");
  days[1] = document.querySelector("#Monday");
  days[2] = document.querySelector("#Tuesday");
  days[3] = document.querySelector("#Wednesday");
  days[4] = document.querySelector("#Thursday");
  days[5] = document.querySelector("#Friday");
  days[6] = document.querySelector("#Saturday");

  var curDay1 = days[newDate1.getDay()];
  var curDay2 = days[newDate2.getDay()];

  for (var i = 0; i < days.length; i++) {
    days[i].classList.remove("green", "red", "blue");
  }
  if (curDay1 === curDay2) {
    curDay1.classList.add('green');
  }
  curDay1.classList.add('blue');
  curDay2.classList.add('red');
}
