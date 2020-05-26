//This is my array of machines
var myArray = [
{'id':'<span class="array-span hover-click" id="037">037</span>', 'name':'Bottero Lamilinea 734 Avl', 'Resource':'<div class="blue-wrapper"><img class="blue-block" src="media/yours.png" alt="your machine"></div>', 'service':'<i class="fas fa-wrench"></i>', 'next':'<div class="machine-dates-wrapper"><img class="machine-dates" src="media/3daysago.png" alt="next service"></div>', 'last':'17-01-2020', 'rtype':'machine', 'type':'predictive'},
{'id':'<span class="array-span hover-click" id="001">001</span>', 'name':'Graham steam tunnel Z3271', 'Resource':'<div class="blue-wrapper"><img class="blue-block" src="media/yours.png" alt="your machine"></div>', 'service':'<i class="fas fa-wrench"></i>', 'next':'<div class="machine-dates-wrapper"><img class="machine-dates" src="media/in2hours.png" alt="next service"></div>', 'last':'16-02-2020', 'rtype':'machine', 'type':'predictive'},
{'id':'<span class="array-span hover-click" id="055">055</span>', 'name':'ANDERSON STRATOS', 'Resource':'<div class="blue-wrapper"><img class="blue-block" src="media/yours.png" alt="your machine"></div>', 'service':'<i class="fas fa-wrench"></i>', 'next':'<div class="machine-dates-wrapper"><img class="machine-dates" src="media/in4hours.png" alt="next service"></div>', 'last':'30-01-2020', 'rtype':'machine', 'type':'preventive'},
{'id':'<span class="array-span hover-click" id="048">048</span>', 'name':'TRUMPF 3530', 'Resource':'<div class="blue-wrapper"><img class="blue-block" src="media/yours.png" alt="your machine"></div>', 'service':'', 'next':'<div class="machine-dates-wrapper"><img class="machine-dates" src="media/in2days.png" alt="next service"></div>', 'last':'30-01-2020', 'rtype':'machine', 'type':'predictive'},
{'id':'<span class="array-span hover-click" id="024">024</span>', 'name':'Reggiani Unica Rotary Printing Machine', 'Resource':'<div class="blue-wrapper"><img class="blue-block" src="media/yours.png" alt="your machine"></div>', 'service':'', 'next':'<div class="machine-dates-wrapper"><img class="machine-dates" src="media/in3days.png" alt="next service"></div>', 'last':'29-10-2019', 'rtype':'machine', 'type':'preventive'},
{'id':'<span class="array-span hover-click" id="132">132</span>', 'name':'KOCH COMPAC', 'Resource':'<div class="blue-wrapper"><img class="blue-block" src="media/yours.png" alt="your machine"></div>', 'service':'', 'next':'<div class="machine-dates-wrapper"><img class="machine-dates" src="media/in5days.png" alt="next service"></div>', 'last':'29-02-2020', 'rtype':'machine', 'type':'preventive'},
{'id':'<span class="array-span hover-click" id="017">017</span>', 'name':'Mono FG158', 'Resource':'<div class="blue-wrapper"><img class="blue-block" src="media/yours.png" alt="your machine"></div>', 'service':'', 'next':'<div class="machine-dates-wrapper"><img class="machine-dates" src="media/in6days.png" alt="next service"></div>', 'last':'02-03-2020', 'rtype':'machine', 'type':'preventive'},
{'id':'<span class="array-span hover-click" id="101">101</span>', 'name':'Urschel GK-A', 'Resource':'<div class="blue-wrapper"><img class="blue-block" src="media/yours.png" alt="your machine"></div>', 'service':'', 'next':'<div class="machine-dates-wrapper"><img class="machine-dates" src="media/in14days.png" alt="next service"></div>', 'last':'04-03-2020', 'rtype':'machine', 'type':'predictive'},
{'id':'<span class="array-span hover-click" id="012">012</span>', 'name':'Nilma DS/3', 'Resource':'<div class="blue-wrapper"><img class="blue-block" src="media/yours.png" alt="your machine"></div>', 'service':'', 'next':'<div class="machine-dates-wrapper"><img class="machine-dates" src="media/in3months.png" alt="next service"></div>', 'last':'23-05-2020', 'rtype':'machine', 'type':'preventive'},
{'id':'<span class="array-span hover-click" id="003">003</span>', 'name':'BRANDT KD 97 C', 'Resource':'<div class="blue-wrapper"><img class="blue-block" src="media/yours.png" alt="your machine"></div>', 'service':'', 'next':'<div class="machine-dates-wrapper"><img class="machine-dates" src="media/in6months.png" alt="next service"></div>', 'last':'27-05-2020', 'rtype':'machine', 'type':'preventive'},
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
  console.log(filteredData);
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


if ($(window).width() > 400) {
$("#mobilewrapper").hide();
}
