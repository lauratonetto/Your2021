const MAX_HEIGHT = 600;
const MAX_WIDTH = 600;
const STEP = 16;
let clearButton, saveButton;
const centerH = window.screen.height / 2;
const centerW = window.screen.width / 2;

console.log(window.screen.height, window.screen.width)

const VARIANCE_FACTOR = 100;




const numbers = {
  'a':  1, 'b':  2, 'c':  3, 'd':  4, 'e':  5, 'f':  6, 'g':  7, 'h': 8,  'i':  9,
  'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18,
  's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26
};
function setup(){
  // let div = createDiv('').size(MAX_WIDTH, MAX_HEIGHT);
  // div.style('background-color', 'orange');
  
  let cnv = createCanvas(MAX_WIDTH, MAX_HEIGHT);
  //cnv.center();
  
  stroke(255, 255, 255);
  strokeWeight(1);
  //background(126)
  
  noLoop();
  //console.log(centerH, centerW)
 
}

function saveFile() {
  save('your2021.png');
}

function clearScreen() {
  background(255);
}
function getWord(){

  

  var word = document.getElementById("text").value;
  document.getElementById("text").innerHTML = word;
  let str = word.toLowerCase();
  let sum = [...str].map(c => numbers[c] || 0).reduce((a, b) => a + b, 0);
  let newSum = (sum * Math.floor((Math.random() * 4) + 1));
  console.log(newSum);
  
  

  var today = new Date();
  
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var d = today.getUTCDate();
  var sumDateTime = (h + m + s + d);

  console.log(sumDateTime);

  var sumDateWord = ((newSum + sumDateTime) / Math.floor((Math.random() * 3) + 1));
  var intSumDateWord = Math.floor(sumDateWord)
  console.log(intSumDateWord);

  
  const lines = [];
    
    for(let i = STEP; i < MAX_HEIGHT - STEP; i += STEP){
      let line = [];
      for(let j = STEP; j <= MAX_HEIGHT - STEP; j += STEP){
        let distanceToCenter = Math.abs(j - MAX_HEIGHT / 2);
        let variance = Math.max(MAX_HEIGHT / 2 - VARIANCE_FACTOR - distanceToCenter, 0);
        let random = Math.random() * variance / 2 * -1;
        let point = {x: j, y: i + random};
        line.push(point)
      }
      lines.push(line);
      
    }

    for(let i = 5; i < lines.length; i++){
      beginShape();
      for(let j = 0; j < lines[i].length; j+=2){
        curveVertex(lines[i][j].x, lines[i][j].y);
        
        fill(newSum, sumDateTime, intSumDateWord);
        textFont('courier');
        textSize(18);
        //textAlign(CENTER, TOP);
        text(word, 100, 10, 200, 80);
        //txt.center();
        
        
        curveVertex(lines[i][j+1].x, lines[i][j+1].y)
      }
      endShape();
     
    }
    
    
}