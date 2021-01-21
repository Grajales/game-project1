
let score=0;
let movingWords =document.querySelectorAll(".word");
let scoreDisplay =document.querySelector(".score");
let count =0;
let aIndex = 12; //initial a.length

//shuffle index array a=index numbers for each array of (sayings, words, score)
//let a = [0, 1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let a = [0, 1, 2, 3, 4, 5,6,7,8,9,10,11]
for (var i = 0; i < 100; i++)
{
var index1 = Math.floor((Math.random() * a.length));// Get a random index1
var index2 = Math.floor((Math.random() * a.length));// Get a random index1
var tmp = a[index1]; //store in temp during shuffle 
a[index1] = a[index2]; //change 
a[index2] = tmp;
}
aIndex = a.pop();


function wordClickEvent(e) {
  count +=1;
  let wordScore = [[0, 10, 0, 0,0,0],[0,0,0,0,0,10],
  [0,0,0,0,10,0],[0, 10, 0, 0,0,0],[0,0,10,0,0,0],
  [10,0,0,0,0,0],[0, 10, 0, 0,0,0],[0,0,0,0,10,0],
  [0,0,0,10,0,0],[0,0,10,0,0,0],[0,0,0,0,0,10],[0,10,0,0,0,0]];
  
  let wordId = parseInt(e.target.id,10);
  let wordValue = wordScore[aIndex][wordId];
  if (wordValue == 10){  
       e.target.classList.add('green');
    } else {e.target.classList.add('red'); }
       //below removes listener from that specific cell
      // e.target.removeEventListener('click',runGame);
      
      score += wordValue;
      scoreDisplay.innerText = "Accumulated Score: " + score

   if (count==a.lenth){
    console.log("You did 10 Sayings, good JOB!! This game is over")
    } 
}
movingWords[0].addEventListener('click',wordClickEvent);
movingWords[1].addEventListener('click',wordClickEvent);
movingWords[2].addEventListener('click',wordClickEvent);
movingWords[3].addEventListener('click',wordClickEvent);
movingWords[4].addEventListener('click',wordClickEvent);
movingWords[5].addEventListener('click',wordClickEvent);

function readSay(num){
  let sayingList = ["All good things come to those who ____",
  "A picture is ____ a thousand words", 
  "Actions ____louder than words",
  "Do not burn the ____ behind you",
  "Do not put all your eggs in _____",
  "Easier said than ___",
  "If you cannot beat them, ___ them",
  "if you pay peanuts, you get ____",
  "it is not use ____ over spilt milk",
  "Never say ____",
  "No man is an ____",
  "look before you ___"
  ];
  let wordList = [["dance", "wait", "read", "pause","play","weight"],
  ["good for","deserving of","merit","credit","value","worth"],
  ["yell","mute","chant","sing","speak","run"],
  ["lanes","bridges","trails","boats","ropes","papers"],
  ["water","hole","one basket","one cup","the boiler","the store"],
  ["done","carved","buried","trashed","cooked","placed"],
  ["scare","join","beat","silence","smile at","forget"],
  ["roasted","butter","squirrels","salt","monkeys","hungry"],
  ["singing","yelling","laughin","crying","tearing","sobbing"],
  ["always","forever","never","tomorrow","now","when"],
  ["ignorant","ego","elephant","astronaut","igloo","island"],
  ["climb","leap","run","fly","lie","rest"]];


  let aIndex = num;
  let saying=document.querySelector("p");
  saying.innerText=  sayingList[aIndex];

  let wordTags = document.getElementsByClassName("word");
  for (let i=0; i<6;i++){
    wordTags[i].innerText = wordList[aIndex][i];
  }
}

function reset(){
  score=0;
  for(let i=0; i<movingWords.length; i++) {
  movingWords[i].classList.remove('green');
  movingWords[i].classList.remove('red');
  scoreDisplay.innerText = "Accumulated Score: " + score
  movingWords[i].addEventListener('click',wordClickEvent,{once:true});
  }
}
function next(){
  for(let i=0; i<6; i++) {
    movingWords[i].classList.remove('green');
    movingWords[i].classList.remove('red');
  }
  aIndex = a.pop();
  readSay(aIndex)
  return aIndex
}
readSay(aIndex) 

let buttonReset = document.querySelector('.reset');
buttonReset.addEventListener('click',reset);
let buttonNext = document.querySelector('.next');
buttonNext.addEventListener('click',next);

  

