let rootArray = [
  ["Artemis", "Andy Weir", "Crown Publishing", "9780553448122", "305", "3.66/5", "5/5"],
  ["Annna Karenina", "Leo Tolstoy", "Vintage", "9780198748847", "964", "4.05/5", "4/5"]
];
const title = document.getElementById("replaceT");
const author = document.getElementById("replaceA");
const publisher = document.getElementById("replacePu");
const isbn = document.getElementById("replaceI");
const pages = document.getElementById("replacePa");
const gRating = document.getElementById("replaceG");
const mRating = document.getElementById("replaceM");

//var arrayPick = 0;

//function replace(){
//  title.innerHTML= rootArray [arrayPick] [0];
//  author.innerHTML= rootArray [arrayPick] [1];
//  publisher.innerHTML= rootArray [arrayPick] [2];
//  isbn.innerHTML= rootArray [arrayPick] [3];
//  pages.innerHTML= rootArray [arrayPick] [4];
//  gRating.innerHTML= rootArray [arrayPick] [5];
//  mRating.innerHTML= rootArray [arrayPick] [6];
//}

function showMainRep(){
  let mainRep = document.getElementById('template')
  if (mainRep.style.display === "none") {
    mainRep.style.display = "block"
  }
  else {
    mainRep.style.display = "none"
  }
}

function showArtemis(title, author, publisher, isbn, pages, gRating, mRating) {
  //var arrayPick = 0;
  function replace0(title, author, publisher, isbn, pages, gRating, mRating){
    title.innerHTML= rootArray [0] [0];
    author.innerHTML= rootArray [0] [1];
    publisher.innerHTML= rootArray [0] [2];
    isbn.innerHTML= rootArray [0] [3];
    pages.innerHTML= rootArray [0] [4];
    gRating.innerHTML= rootArray [0] [5];
    mRating.innerHTML= rootArray [0] [6];
  }
  showMainRep();
}

function showAnna() {
  //var arrayPick = 1;
  function replace1(){
    title.innerHTML= rootArray [1] [0];
    author.innerHTML= rootArray [1] [1];
    publisher.innerHTML= rootArray [1] [2];
    isbn.innerHTML= rootArray [1] [3];
    pages.innerHTML= rootArray [1] [4];
    gRating.innerHTML= rootArray [1] [5];
    mRating.innerHTML= rootArray [1] [6];
  }
  showMainRep();
}
