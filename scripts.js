function billCalculator () {

  let valueBill = document.getElementById('bill').value
  let serviceQuality = document.getElementById('quality').value;
  let manyPeople = document.getElementById('people').value;

  let result = (valueBill*serviceQuality)/manyPeople; 
  result = result.toFixed(2);
  alert("TOTAL DA GORJETA: " + result);
}