
// -------- Variables for getting current date/month/year ---------//

const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

// -------- Getting the current month to display as text ---------//

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("month").innerHTML = months[currentMonth];

// -------- Displaying the current year ---------//

document.getElementById("year").innerHTML = currentYear;

// -------- Adding +1 to the current year ---------//

function nextyear() {
  let nextyear = document.getElementById("year").innerHTML;
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

// -------- For loop running through months array to check which month it is ---------//
  let month_index = 0
  for (let i = 0; i < 12; i++){
    if (months[i] === thismonth) {
      month_index = i;
      break;
    }
  }

// -------- Making the for loop restart at end of year with the modulos and also shows the new month in HTML ---------//

  const nextmonth = (month_index + 1) % months.length;
  document.getElementById("month").innerHTML = months[nextmonth];
}

// -------- Function for pressing last month ---------//

function previousmonth() {
  let thismonth = document.getElementById("month").innerHTML;

// -------- For loop running through months array to check which month it is ---------//

  let month_index = 0
  for (let i = 0; i < 12; i++){
    if (months[i] === thismonth) {
      month_index = i;
      break;
    }
  }

// -------- Making sure that the if the month array drops below January[0] go back to December [11] ---------//
// -------- Also making sure that the months go back and now forward ---------//

  let nextmonth = 0
  if (month_index - 1 < 0){
    nextmonth = 11
  }else{
    nextmonth = month_index - 1
  }

  document.getElementById("month").innerHTML = months[nextmonth];
}


// -------- Open and close pop-up when pressing dates---------//

const datebox = document.getElementById("datebox");

const btn = document.getElementById("mybtn");

const closedate = document.getElementsByClassName('closedate');

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
