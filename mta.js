console.log("What up J?");

var map = {
  'N' : ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  'L' : ['8th', '6th', 'Union Square', '3rd', '1st'],
  '6' : ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
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
