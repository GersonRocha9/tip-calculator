function billCalculator (event) {
  event.preventDefault();

  let valueBill = document.getElementById('bill').value
  let serviceQuality = document.getElementById('quality').value;
  let manyPeople = document.getElementById('people').value;

  if(manyPeople == "" | manyPeople <= 1) {
    manyPeople = 1;
    document.getElementById('each').style.display = "none"
  }

  else {
    document.getElementById('each').style.display = "block"
  }

  let result = (valueBill*serviceQuality)/manyPeople; 
  result = result.toFixed(2);

  document.getElementById('tip').innerHTML = result;

}

document.getElementById('totalTip').style.display = "none"
document.getElementById('each').style.display = "none"

document.getElementById('tipsForm').addEventListener('submit', billCalculator)