let todoOverlay = document.getElementsByClassName('comm-add');
let hisOverlay = document.getElementsByClassName('his-wrapper');
let checklistOverlay = document.getElementById('checklist');

document.getElementById("toggleHis").addEventListener("click", showHis);

function showHis() {
  if (todoOverlay[0].style.display === 'block') {
    hisOverlay[0].style.display = "block"
    todoOverlay[0].style.display = "none"
    checklistOverlay.style.display = "none"
  }
  else {
    hisOverlay[0].style.display = "none"
    todoOverlay[0].style.display = "block"
    checklistOverlay.style.display = "block"
  }
}

let calendarView = document.getElementsByClassName("calendar-showing");
let calBtn = document.getElementsByClassName("cal-view");

calBtn[0].addEventListener("click", toggleCal);

function toggleCal () {
  if (calendarView[0].style.display === "none") {
    calendarView[0].style.display = "block";
  }
  else {
    calendarView[0].style.display = "none";
  }
}
