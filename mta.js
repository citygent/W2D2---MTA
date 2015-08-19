console.log("What up J?");

var map = {
  'N' : ['Times Square', '34th', '28thN', '23rdN', 'Union Square', '8thN'],
  'L' : ['8thL', '6th', 'Union Square', '3rd', '1st'],
  '6' : ['Grand Central', '33rd', '28th6', '23rd6', 'Union Square', 'Astor Place'],
};

var submitButton = document.getElementById('submit');
submitButton.addEventListener('click', getDistance);

var from = document.getElementById('from');
var to = document.getElementById('to');

function getDistance() {
  event.preventDefault();
  a = map.N.indexOf(from.value);
  b = map.N.indexOf(to.value);
  console.log('CLICKED');
  console.log(a);
  console.log(b);
  if (a > -1 && b > -1) {
    result = Math.abs(a - b);
    console.log('GetDistResult:'+result);
    return result;
  } else {
    console.log("The princess youre looking for is in another castle.");
    // search other arrays for values. 
    // if value is in that array, result = distance from this array to Union, then from Union to destination in that array. 
  }
}

function getLine(){ 
  for (line in map) {
    console.log("line:"+line); // prints line for each array.
    console.log("Stations:"+map[line]); // prints the array for each line.
    }
  }
getLine();
