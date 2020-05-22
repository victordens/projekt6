//This is my array of machines
var myArray = [
    {'name':'<span onclick="show48()">48</span>', 'age':'30', 'birthdate':'11/10/1989'},
    {'name':'Mila', 'age':'32', 'birthdate':'10/1/1989'},
    {'name':'Paul', 'age':'29', 'birthdate':'10/14/1990'},
    {'name':'Dennis', 'age':'25', 'birthdate':'11/29/1993'},
    {'name':'Tim', 'age':'27', 'birthdate':'3/12/1991'},
    {'name':'Erik', 'age':'24', 'birthdate':'10/31/1995'},
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
        var colname = `name-${i}`
        var colage = `age-${i}`
        var colbirth = `birth-${i}`

        var row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].age}</td>
                        <td>${data[i].birthdate}</td>
                   </tr>`
        table.innerHTML += row
    }
}
