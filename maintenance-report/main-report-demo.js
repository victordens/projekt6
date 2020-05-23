let rootArray = [
  ["<span onclick="showMa21()">Machine 21</span>", "Andy Weir", "Crown Publishing", "9780553448122", "305", "3.66/5", "5/5"],
  ["Annna Karenina", "Leo Tolstoy", "Vintage", "9780198748847", "964", "4.05/5", "4/5"]
];
const title = document.getElementById("replaceT");
const author = document.getElementById("replaceA");
const publisher = document.getElementById("replacePu");
const isbn = document.getElementById("replaceI");
const pages = document.getElementById("replacePa");
const gRating = document.getElementById("replaceG");
const mRating = document.getElementById("replaceM");


var arrayCount = document.getElementById("arrayCounter");
var arrayCountString = arrayCount.innerHTML;
console.log(arrayCountString);


function replace(){
  var arrayCountString = arrayCount.innerHTML;
  arrayPick = parseInt(arrayCountString, 10);

  title.innerHTML= rootArray [arrayPick] [0];
  author.innerHTML= rootArray [arrayPick] [1];
  publisher.innerHTML= rootArray [arrayPick] [2];
  isbn.innerHTML= rootArray [arrayPick] [3];
  pages.innerHTML= rootArray [arrayPick] [4];
  gRating.innerHTML= rootArray [arrayPick] [5];
  mRating.innerHTML= rootArray [arrayPick] [6];
  console.log(pick);
}

function showMainRep(){
  let mainRep = document.getElementById('template')
  if (mainRep.style.display === "none") {
    mainRep.style.display = "block"
  }
}

function showArtemis() {
  arrayCount.innerHTML = "0";
  replace();
  showMainRep();
}

function showAnna() {
  arrayCount.innerHTML = "1"
  replace();
  showMainRep();
}


//document.getElementById("artemis").addEventListener("click", showArtemis());
