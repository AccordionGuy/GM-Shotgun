// Your code goes here

function changePassengerCount(change) {
  var countDisplay = document.getElementById('passenger_count')
  var oldCount = countDisplay.value
  var newCount = parseInt(oldCount, 10) + change

  if (newCount < 2) {
    newCount = 2
  }
  else if (newCount > 4) {
    newCount = 4
  }

  var assignedNumbers = ""
  for (i = 1; i <= newCount; ++i) {
    assignedNumbers += i.toString()
    if (i < newCount) {
      assignedNumbers += "  "
    }
  }
  document.getElementById('passenger_numbers').innerHTML = assignedNumbers

  countDisplay.value = newCount
  clearResults()
  return newCount
}

function calculateShotgun() {
  var passengerCount = document.getElementById('passenger_count').value
  var shotgun = randomIntInRange(1, passengerCount)
  var rearMiddleSeat = 0

  if (passengerCount > 3) {
    while (rearMiddleSeat == 0) {
      rearMiddleSeat = randomIntInRange(1, passengerCount)
      if (rearMiddleSeat != shotgun) {
        break
      }
      else {
        rearMiddleSeat = 0
      }
    }
  }

  showResults(shotgun, rearMiddleSeat)
}

function showResults(shotgun, rearMiddleSeat) {
  var resultsDisplay = document.getElementById('results')
  var answer = "<p>Passenger " + shotgun + " rides shotgun."
  if ( rearMiddleSeat > 0 ) {
    answer += "<br />Passenger " + rearMiddleSeat + " takes the rear middle seat."
  }
  resultsDisplay.innerHTML = answer + "</p>"
}

function clearResults() {
  var resultsDisplay = document.getElementById('results')
  resultsDisplay.innerHTML = ""
}

function randomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}





