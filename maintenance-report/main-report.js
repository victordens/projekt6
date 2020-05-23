let reportArray = [
  ["id", "name", "next service", "last service", "supervisor", "workers", "description"],
  ["048", "TRUMPH 3530", "In 2 days", "30-01-2020", "Lise Jørgensen", ["Henrik petesersen", "Michael P. Hansen", "Lars Sørensen"], "Laser: 3200w <br>3000 x 1500mm <br>Siemens 840LiftMaster <br>Automation"],
  ["037", "Bottero Lamilinea 734 Avl", "3 days ago", "17-01-2020", "Hans E. Christensen", ["Jens Karlslev", "Mette Pedersen", "Henning Olsen"], "BOTTERO LAMILINEA 734 AVL <br>Automatic Machine for Laminated Glass Cutting <br>Max Dim. 6100x3300 mm <br>Thickness * 3-10 mm (monolithic) <br>* 3+0,38+3 - 8+4,56+8 (laminated) <br>Working Height 900-940 mm <br>Power 15,8 kW <br>Air Consumption 500 Nl/Min."],
  ["101", "Urschel GK-A", "in 14 days", "04-03-2020", "Hans E. Christensen", ["Lars Sørensen", "Henrik Petersen", "Mette Pedersen"], "Urschel dicer / strip cutter <br>Model: GK-A <br>Serial: 4394 <br>2004, stainless frame, ideal for slicing dicing and cutting, stainless steel hopper, comes with various blades / attachments."],
  ["024", "Reggiani Unica Rotary Printing Machine", "3 days ago", "29-10-2019", "Klaus Stenstrup", ["Mette Pedersen", "Henning Olsen", "Mie Hansen"], "Reggiani Unica  Rotary Printing Machine <br>Fully Rebuilt and Re Condition <br>Year 2019-20 <br>Width 3.0 Mts <br>12 Clrs All Installed <br>3 Chamber Gas Dryer <br>Machine has been Re - conditioned and Re Built in All aspects Each and Every Single Part. <br>Detailed Report is Available on Request <br>Still in Boxes"],
  ["001", "Graham steam tunnel Z3271", "in 2 hours", "16-02-2020", "Klaus Stenstrup", ["Micheal P. Hansen", "Henning Olsen", "Jens Karlslev"], "Graham steam tunnel <br>Model: Z3271 <br>2010, Stainless frame and stainless mesh belt, 3000mm x 380mm belt, variable speed, with Hydromatik steam generator, 3Ph"],
  ["017", "Mono FG158", "in six days", "02-03-2020", "Lise Jørgensen", ["Henning Olsen", "Mie Hansen", "Jonas P. Rasmussen"], "Mono bake off oven <br>Model: FG158  <br>Serial: 40671928 <br>Stainless oven, four tray convection oven, siple digital controller, 3Ph, mobile"],
  ["012", "Nilma DS/3", "in 3 months", "23-05-2020", "Lise Jørgensen", ["Mette Pedersen", "Jens Karlslev", "Lars Sørensen"], "Nilma vertical cutter mixer <br>Model: Speedycutter DS/3 <br>Stainless, 60L capacity, 5.5Kw, (needs new blades)"],
  ["132", "KOCH COMPACT", "in 5 days", "29-02-2020", "Klaus Stenstrup", ["Henning Olsen", "Lars Sørensen", "Jonas P. Rasmussen"], "Cutting-, drilling and dowelinserting machine Double sided cutting, drilling and dowelling machine <br>Working width up to 2,5 m. <br>Both units tilting -50° tot + 90 ° <br>NC controlled"],
  ["003", "BRANDT KD 97 C", "in 6 months", "27-05-2020", "Hans E. Christensen", ["Jens Karlslev", "Henrik Petersen", "Mie Hansen"], "Edge bander single sided <br>Single sided edge bander <br>Edges: 0,4 to 5 mm <br>Coil edges 0,8 to 20 mm. <br>Panel thickness: 8 to 55 mm, motorised setting (programmable) <br>Feed speed 16 m/min <br>Equipment: <br>Coil- and stripmagazine <br>Quickmelt unit <br>Pressure zone with 1 driven and 4 non-driven rollers <br>End trims, pneum. Setting straight/chamfer, 2 x 0,75 kW <br>Chamfer trimming, 2 x 1,5 kW , pneumatic adjustment <br>Radius trimming, 2 x 0,55 kW, pneumatic adjustment <br>Contour trimming, 2 x 0,35 kW <br>Profile scraping with quick exchange tools <br>Buffing, 2 x 0,25 kW <br>NC 21 controlls"],
  ["055", "ANDERSON STRATOS PRO", "in four hours", "30-01-2020", "Lise Jørgensen", ["Micheal P. Hansen", "Jens Karlslev", "Henning Olsen"], "Machining center CNC <br>3 axis machine <br>Table 1600 x 5200 mm <br>Stroke X-axis: 5400 mm <br>Stroke Y-axis: 2100 mm <br>Stroke Z-axis: 350 mm <br>1 router 11 KW, spindle speed 1000-24000 r/m, L/R, HSK 63 <br>10-fold tool changer <br>Drilling unit 2,2 KW <br>-9 vertical spindles, 5 in X and 4 in Y <br>-2 horizontal spindles <br>Saw Ø 120 mm <br>Vacuum 250 m3/h, 5,5 kW <br>Controlls: Andi-Fanuc 21i"],
];

const id = document.getElementById("rId");
const name = document.getElementById("rName");
const service = document.getElementById("rService");
const supervisor = document.getElementById("rSuper");
const worker = document.getElementById("rWorkers");
const description = document.getElementById("rDescription");

let mainRep = document.getElementById('template');


var arrayCount = document.getElementById("hidden");
var arrayCountString = arrayCount.innerHTML;

function replace() {
  var arrayCountString = arrayCount.innerHTML;
  arrayPick = parseInt(arrayCountString, 10);

  id.innerHTML= reportArray [arrayPick] [0];
  name.innerHTML= reportArray [arrayPick] [1];
  service.innerHTML= reportArray [arrayPick] [2] + reportArray [arrayPick] [3];
  supervisor.innerHTML= reportArray [arrayPick] [4];
  worker.innerHTML= reportArray [arrayPick] [5] [0] + "<br>" + reportArray [arrayPick] [5] [1] + "<br>" + reportArray [arrayPick] [5] [2];
  description.innerHTML= reportArray [arrayPick] [6];
}

function showMainRep() {
  let mainRep = document.getElementById('template');
  if (mainRep.style.display === "none") {
    mainRep.style.display = "block";
  }
  if (mainRep.style.visibility === "hidden") {
    mainRep.style.display = "block";
    mainRep.style.visibility = "visible";

  }
}

document.getElementById("close-report").addEventListener("click", closeRep);
function closeRep() {
  mainRep.style.display = "none";
}


document.getElementById("048").addEventListener("click", show048);
document.getElementById("037").addEventListener("click", show037);
document.getElementById("101").addEventListener("click", show101);
document.getElementById("024").addEventListener("click", show024);
document.getElementById("001").addEventListener("click", show001);
document.getElementById("017").addEventListener("click", show017);
document.getElementById("012").addEventListener("click", show012);
document.getElementById("132").addEventListener("click", show132);
document.getElementById("003").addEventListener("click", show003);
document.getElementById("055").addEventListener("click", show055);

function show048() {
  arrayCount.innerHTML = "1";
  replace();
  showMainRep();
}

function show037() {
  arrayCount.innerHTML = "2";
  replace();
  showMainRep();
}

function show101() {
  arrayCount.innerHTML = "3";
  replace();
  showMainRep();
}

function show024() {
  arrayCount.innerHTML = "4";
  replace();
  showMainRep();
}

function show001() {
  arrayCount.innerHTML = "5";
  replace();
  showMainRep();
}

function show017() {
  arrayCount.innerHTML = "6";
  replace();
  showMainRep();
}

function show012() {
  arrayCount.innerHTML = "7";
  replace();
  showMainRep();
}

function show132() {
  arrayCount.innerHTML = "8";
  replace();
  showMainRep();
}

function show003() {
  arrayCount.innerHTML = "9";
  replace();
  showMainRep();
}

function show055() {
  arrayCount.innerHTML = "10";
  replace();
  showMainRep();
}
