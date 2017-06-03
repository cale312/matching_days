'use strict';

// return an array of all the days the week from the table
let daysArray = [];
function getDays(days) {
  for (let i = 0; i < days.length; i++) {
    daysArray.push(days[i].textContent);
  }
  return daysArray;
}
