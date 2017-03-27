var daysList, Weekdays, Days, allDays, firstDate, secondDate, day1, day2;
//div where my days table with th tags is
daysList = document.getElementById('daysList');
//store the th tags
Weekdays = daysList.getElementsByClassName('weekDays');

//if the first date input is changed, this funtion is triggered
function FirstDateInput() {
    'use strict';
    //store the value inside the date input
    firstDate = new Date(document.getElementById('dateSelector1').value);
    //get the day 'number' from the date input
    day1 = firstDate.getDay();
    //loop through the elements in the table list
    for (var i = 0; i < Weekdays.length; i++) {
        //stored the looped list
        Days = Weekdays[i];
        day1 = firstDate.getDay();
        //if the day inputs lie on the same day of the week and that days background color is red, make that days background color green
        if (day1 === day2 && Days.style.backgroundColor === 'red') {
            Days.style.backgroundColor = 'green';
        }
        //if the looped list starts with the letter(s) Su and the input items day number is 0(Sunday)
        else if (Days.textContent.startsWith('Su') && day1 === 0) {
            //change the background color of that element to blue
            Days.style.backgroundColor = 'blue';
        } else if (Days.textContent.startsWith('M') && day1 === 1) {
            Days.style.backgroundColor = 'blue';
        } else if (Days.textContent.startsWith('Tu') && day1 === 2) {
            Days.style.backgroundColor = 'blue';
        } else if (Days.textContent.startsWith('W') && day1 === 3) {
            Days.style.backgroundColor = 'blue';
        } else if (Days.textContent.startsWith('Th') && day1 === 4) {
            Days.style.backgroundColor = 'blue';
        } else if (Days.textContent.startsWith('F') && day1 === 5) {
            Days.style.backgroundColor = 'blue';
        } else if (Days.textContent.startsWith('Sa') && day1 === 6) {
            Days.style.backgroundColor = 'blue';
        }
        //if the background color of any day element in the list is not red
        else if (Days.style.backgroundColor != 'red') {
            //make the background blank/clear
            Days.style.backgroundColor = 'rgba(0,0,0,0.0)';
        }
    }
}

//if the second date input is changed, this function is triggered
function SecondDateInput() {
    'use strict';
    secondDate = new Date(document.getElementById('dateSelector2').value);
    day2 = secondDate.getDay();
    for (var i = 0; i < Weekdays.length; i++) {
        allDays = Weekdays[i];
        day2 = secondDate.getDay();
        //if the day inputs lie on the same day of the week and that days background color is blue, make that days background color green
        if (day1 === day2 && allDays.style.backgroundColor === 'blue') {
            allDays.style.backgroundColor = 'green';
        }
        else if (allDays.textContent.startsWith('Su') && day2 === 0) {
            allDays.style.backgroundColor = 'red';
        } else if (allDays.textContent.startsWith('M') && day2 === 1) {
            allDays.style.backgroundColor = 'red';
        } else if (allDays.textContent.startsWith('Tu') && day2 === 2) {
            allDays.style.backgroundColor = 'red';
        } else if (allDays.textContent.startsWith('W') && day2 === 3) {
            allDays.style.backgroundColor = 'red';
        } else if (allDays.textContent.startsWith('Th') && day2 === 4) {
            allDays.style.backgroundColor = 'red';
        } else if (allDays.textContent.startsWith('F') && day2 === 5) {
            allDays.style.backgroundColor = 'red';
        } else if (allDays.textContent.startsWith('Sa') && day2 === 6) {
            allDays.style.backgroundColor = 'red';
        } else if (allDays.style.backgroundColor != 'blue') {
            allDays.style.backgroundColor = 'rgba(0,0,0,0.0)';
        }
    }
}




