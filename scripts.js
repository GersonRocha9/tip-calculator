function billCalculator () {
  var bill = document.getElementById('bill').value
  let quality = document.getElementById('quality').value;
  let people = document.getElementById('people').value;
  let result = (bill*quality)/people;  
}

function changeLabel() {
  document.getElementById('result').innerHTML =
  "<label for='total'>"+"</label> ";
}