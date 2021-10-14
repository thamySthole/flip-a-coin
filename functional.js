setTimeout(function() {
let player = document.querySelector('.user')
let screen = document.querySelector('.game-choice')
let comp = document.querySelector('.opponent')
let head = document.querySelector('.head')
let tail = document.querySelector('.tail')
let textPlayer = document.querySelector('.score-player')
let textOpponent = document.querySelector('.score-comp')
let decider = document.querySelector('.decider')
//screen game-choice
let pics = [
  {name:'head.png',num:0},
  {name:'tail.png',num:1},
 ];
 

function playGame(p, turns){
//screen choice
let screenRandom = Math.floor(Math.random()*pics.length)
let screenObj = pics[screenRandom]
screen.style.background = `url(${screenObj.name})`

//computer choice
let computerRandom = Math.floor(Math.random()*pics.length)
let computerObj = pics[computerRandom]
comp.style.background = `url(${computerObj.name})`

//logic 
// computerObj.num
// screenObj.num

let computer = computerObj.num
let SCREEN = screenObj.num
let player = p.num

play(player,SCREEN,computer, turns)
}


PP = 0
CC = 0
let turns = 0

function play(p,c,o, turns){
  let count = turns
  //player check system
  P = 0
  if(p == c){
    P += 1
    decider.innerText = "won"
  }else{
    decider.innerText = "lost"
    P += 0
  }
  PP += P
  textPlayer.innerText = PP
  
  //computer
  oo = 0
  if(o == c){
    oo += 1
  }else{
    oo += 0
  }
  CC += oo
  textOpponent.innerText = CC
  
  
  let winner = ''
  if(count > 5){
   
    if(PP > CC){
       winner = 'you won'
       end(winner)
       CC =0
       PP=0
      }else if(PP == CC) {
        winner = 'its a draw'
        end(winner)
       CC =0
       PP=0
        }else {
        winner = 'you lost'
        end(winner)
       CC =0
       PP=0
    }
  }
    
  
}



//buttons function
head.addEventListener('click', ()=>{
   player.style.background = 'url(head.png)'
   turns += 1
   playGame({num:0}, turns)
   if(turns > 5){
     turns = 0
   }
});
tail.addEventListener('click', ()=>{
   player.style.background = 'url(tail.png)'
   turns += 1
   playGame({num:1}, turns) 
   if(turns > 5){
     turns = 0
   }
});

function end(t){
  if(t){
   alert(t)
     textPlayer.innerText    =''
     decider.innerText  =''
     textOpponent.innerText=''
   
  }
}}
,100)
