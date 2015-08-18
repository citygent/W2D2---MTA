console.log("What up J?");

var map = {
  'N' : ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  'L' : ['8th', '6th', 'Union Square', '3rd', '1st'],
  '6' : ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
};

//return number of stops between start and destination on given line. 

// function stops(line, from, to) {
//   var line = map.N;
//   // b = map.line.indexOf(to);
//   console.log(line);
//   // console.log(b);
// };
// stops('N', '34th', '28th');

var submitButton = document.getElementById('submit');
submitButton.addEventListener('click', getRoute);

var from = document.getElementById('from').value;

function getRoute(){
  event.preventDefault();
  console.log('CLICKED');
}