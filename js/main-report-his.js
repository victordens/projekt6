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
