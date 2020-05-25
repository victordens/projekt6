
// -------- Variables for getting current date/month/year ---------//

var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();

// -------- Getting the current month to display as text ---------//

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("month").innerHTML = months[currentMonth];

// -------- Displaying the current year ---------//

document.getElementById("year").innerHTML = currentYear;

// -------- Adding +1 to the current year ---------//

function nextyear() {
  var nextyear = document.getElementById("year").innerHTML;
  nextyear++;
  document.getElementById("year").innerHTML = nextyear;
}

// -------- Subtract -1 to the current year ---------//

function previousyear() {
  let previousyear = document.getElementById("year").innerHTML;
  previousyear--;
  document.getElementById("year").innerHTML = previousyear;
}

// -------- Function for pressing next month ---------//

function nextmonth() {
  let thismonth = document.getElementById("month").innerHTML;


  let month_index = 0
  for (let i = 0; i < 12; i++){
    if (months[i] === thismonth) {
      month_index = i;
      break;
    }
  }

// -------- Making the calendar go back to January at end of yaer ---------//

  const nextmonth = (month_index + 1) % months.length;
  console.log({nextmonth, months});
  document.getElementById("month").innerHTML = months[nextmonth];
}

// -------- Function for pressing last month ---------//

function previousmonth() {
  let thismonth = document.getElementById("month").innerHTML;


  let month_index = 0
  for (let i = 0; i < 12; i++){
    if (months[i] === thismonth) {
      month_index = i;
      break;
    }
  }

  let nextmonth = 0
  if (month_index - 1 < 0){
    nextmonth = 11
  }else{
    nextmonth = month_index - 1
  }

  console.log({nextmonth, months});
  document.getElementById("month").innerHTML = months[nextmonth];
}


// -------- Open and close pop-up when pressing dates---------//

var datebox = document.getElementById("datebox");

var btn = document.getElementById("mybtn");

var closedate = document.getElementsByClassName('closedate');

function dayinfo() {
  datebox.style.display = "block";
}

 function closedata() {
  datebox.style.display = "none";
}

window.onclick = function () {
  if (event.target == datebox) {
    datebox.style.display = "none";
  }
}
