let rootArray = [
  ["Artemis", "Andy Weir", "Crown Publishing", "9780553448122", "305", "3.66/5", "5/5"],
  ["Annna Karenina", "Leo Tolstoy", "Vintage", "9780198748847", "964", "4.05/5", "4/5"]
];
const title = document.getElementById("replaceT");
let arrayPick = 0;

function replace(){
  //replace("replaceT",rootArray [arrayPick] [0])
  title.innerHTML= rootArray [arrayPick] [0];
}

function showMainRep(){
  let mainRep = document.getElementById('template')
  if (mainRep.style.display === "none") {
    mainRep.style.display = "block"
  }
}

function showArtemis() {
  replace();
  showMainRep();
}
