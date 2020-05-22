//This is my array of machines
var myArray = [
{'id':'<span class="array-span" onclick="show037()">037</span>', 'name':'Bottero Lamilinea 734 Avl', 'Resource':'yes', 'service':'yes', 'next':'3 days ago', 'last':'17-01-2020', 'rtype':'machine', 'type':'predictive'},
{'id':'<span class="array-span" onclick="show001()">001</span>', 'name':'Graham steam tunnel Z3271', 'Resource':'yes', 'service':'yes', 'next':'in 2 hours', 'last':'16-02-2020', 'rtype':'machine', 'type':'predictive'},
{'id':'<span class="array-span" onclick="show055()">055</span>', 'name':'ANDERSON STRATOS', 'Resource':'yes', 'service':'yes', 'next':'in 4 hours', 'last':'30-01-2020', 'rtype':'machine', 'type':'preventive'},
{'id':'<span class="array-span" onclick="show048()">048</span>', 'name':'TRUMPF 3530', 'Resource':'yes', 'service':'no', 'next':'in 2 days', 'last':'30-01-2020', 'rtype':'machine', 'type':'predictive'},
{'id':'<span class="array-span" onclick="show024()">024</span>', 'name':'Reggiani Unica Rotary Printing Machine', 'Resource':'yes', 'service':'no', 'next':'in 3 days', 'last':'29-10-2019', 'rtype':'machine', 'type':'preventive'},
{'id':'<span class="array-span" onclick="show132()">132</span>', 'name':'KOCH COMPAC', 'Resource':'yes', 'service':'no', 'next':'in 5 days', 'last':'29-02-2020', 'rtype':'machine', 'type':'preventive'},
{'id':'<span class="array-span" onclick="show017()">017</span>', 'name':'Mono FG158', 'Resource':'yes', 'service':'no', 'next':'in 6 days', 'last':'02-03-2020', 'rtype':'machine', 'type':'preventive'},
{'id':'<span class="array-span" onclick="show101()">101</span>', 'name':'Urschel GK-A', 'Resource':'yes', 'service':'no', 'next':'in 14 days', 'last':'04-03-2020', 'rtype':'machine', 'type':'predictive'},
{'id':'<span class="array-span" onclick="show012()">012</span>', 'name':'Nilma DS/3', 'Resource':'yes', 'service':'no', 'next':' in 3 months', 'last':'23-05-2020', 'rtype':'machine', 'type':'preventive'},
{'id':'<span class="array-span" onclick="show003()">003</span>', 'name':'BRANDT KD 97 C', 'Resource':'yes', 'service':'no', 'next':'in 6 months', 'last':'27-05-2020', 'rtype':'machine', 'type':'preventive'},
]

//This is were i find and define my search input and tells it that on key up do this function.
$('#search-input').on('keyup',function(){

//The value from this val() returns an array containing the value of each selected option.  val() returns the current value
  var value = $(this).val()
  // consologger the inputs given from the search input thourgh the val()
  console.log('Value', value);
  var data = searchTable(value, myArray)
  buildTable(data)
})

buildTable(myArray)

function searchTable(value, data){
  var filteredData=[]

for ( var i = 0; i < data.length; i++){
  //The toLowerCase() method converts a string to lowercase letters
  value = value.toLowerCase()
  var name = data[i].name.toLowerCase()

  if (name.includes(value)){
    filteredData.push(data[i])
  }

}

  return filteredData
}




 $('th').on('click', function(){
     var column = $(this).data('colname')
     var order = $(this).data('order')
     var text = $(this).html()
     text = text.substring(0, text.length - 1);



     if (order == 'desc'){
        myArray = myArray.sort((a, b) => a[column] > b[column] ? 1 : -1)
        $(this).data("order","asc");
        text += '&#9660'
     }else{
        myArray = myArray.sort((a, b) => a[column] < b[column] ? 1 : -1)
        $(this).data("order","desc");
        text += '&#9650'
     }

    $(this).html(text)
    buildTable(myArray)
    })





function buildTable(data){
    var table = document.getElementById('myTable')

    table.innerHTML = ''
    for (var i = 0; i < data.length; i++){
        var colid = `id-${i}`
        var colname = `name-${i}`
        var colyours = `yours-${i}`
        var colin = `in-${i}`
        var colnext = `next-${i}`
        var collast = `last-${i}`
        var colrtype = `rtype-${i}`
        var coltype = `type-${i}`

        var row = `<tr>
                        <td>${data[i].id}</td>
                        <td>${data[i].name}</td>
                        <td>${data[i].Resource}</td>
                        <td>${data[i].service}</td>
                        <td>${data[i].next}</td>
                        <td>${data[i].last}</td>
                        <td>${data[i].rtype}</td>
                        <td>${data[i].type}</td>


                   </tr>`
        table.innerHTML += row
    }
}


if ($(window).width() < 400) {
$("#desktopwrapper").hide();
}
else {
   alert('More than 400');


}

if ($(window).width() > 400) {
$("#mobilewrapper").hide();
}
else {
   alert('Less than 400');


}
