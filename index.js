//global variables
var spawnSpeed=600;
var movementSpeed=20;
var lives=0;
var enemyArray=[];
var score=0;
var hidden,enemySpawningVar,enemyMovingVar,enemyMoveInterval;
var scoreDiv=document.getElementById("score");
var LivesDiv=document.getElementById("lives");
var isHidden=false;
var start=false;
backgroundMusic();
isItHidden();
//keeps calling the function every 100 miliseconds
setInterval(handleVisibilityChange,100);
//used to check is the game is hidden or not
function isItHidden(){
  var visibilityChange;
  if (typeof document.hidden !== "undefined") {
    hidden = "hidden";
    visibilityChange = "visibilitychange";
  } else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
  } else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
  }
}
//when the page is hidden it stop the enemy spawning and moving
function handleVisibilityChange() {
  if (document[hidden]==true) {
    if(isHidden==false){
      clearInterval(enemySpawningVar);
      clearInterval(enemyMovingVar);
      //clearInterval(enemyMoveInterval);
      if(start==true){
        isHidden=true;
      }
    }
  }
  //when the playey comes back to the game the enemies start mobing and spawning again
  else if (document[hidden]==false){
    if(isHidden==true&&lives>0&&start==true){
      enemySpawningVar = setInterval(enemySpawning,spawnSpeed);
      //enemyMoveInterval = setInterval(enemyMoving,movementSpeed);
      isHidden=false;
    }
  }
}
//handles the spawning
function enemySpawning(){
  // creates a div elements and saves it in a variable
  var enemyDiv = document.createElement("div");
  //adds a class to the enemydiv element so it can be styled by the index.css
  enemyDiv.classList.add('enemy');
  //adds the enemydiv to the array
  enemyArray.push(enemyDiv);
  //randomly generates a number which is the deciding factor for where eneimes will be spawned
  var randomNumber =Math.floor((Math.random() * 10) + 1);
  //calls the enemyMoving function and passes it the created enemy div element
  enemyMoving(enemyDiv);
  //the switch statement decides where the enemies will be spawned
  switch (randomNumber) {
    case 1:
    document.getElementById("1").appendChild(enemyDiv);
    break;
    case 2:
    document.getElementById("2").appendChild(enemyDiv);
    break;
    case 3:
    document.getElementById("3").appendChild(enemyDiv);
    break;
    case 4:
    document.getElementById("4").appendChild(enemyDiv);
    break;
    case 5:
    document.getElementById("5").appendChild(enemyDiv);
    break;
    case 6:
    document.getElementById("6").appendChild(enemyDiv);
    break;
    case 7:
    document.getElementById("7").appendChild(enemyDiv);
    break;
    case 8:
    document.getElementById("8").appendChild(enemyDiv);
    break;
    case 9:
    document.getElementById("9").appendChild(enemyDiv);
    break;
    default:document.getElementById("10").appendChild(enemyDiv);
  }
  //helps with applying an event listener to the enemies
  for (var i = 0; i < enemyArray.length; i++) {
    var enemy=enemyArray[i];
  }
  //when the enemy is cliked it displays the new score and destroys the enemy
  enemy.addEventListener('click',function(event){
    this.remove();
    score++;
    scoreDiv.innerHTML="score: "+score;
    movementSpeed-=0.5;
    var hitAudio = new Audio('hit.wav');
    hitAudio.play();
  });
}
//handles the enemy movement
function enemyMoving(enemy) {
  if(enemy!=null){
    var enemyPosition = 0;
    //the function is always running to see if the enenmy has reach a certain height
    //
    enemyMoveInterval = setInterval(enemyMoveHeight,movementSpeed );
    //enemyMoveheight handles when when the enemies reaches the certain distance the player loses a life, a sound is played and the enemy is destroyed
    function enemyMoveHeight() {
      if(isHidden==true){return;}
      if(enemy.offsetTop>=700){
        lives--;
        var audioLifeLost= new Audio("lifeLost.wav");
        audioLifeLost.play();
        LivesDiv.innerHTML="lives "+lives;
        enemy.remove();
        //when the play reaches 0 lives the function is called to end the game
        if(lives<=0){
          gameOver();
        }
      }
      //enemy will keep moving until it has reacher 669px
      else if(enemy.offsetTop<=699){
        enemyPosition++;
        enemy.style.top = enemyPosition + 'px';
      }
    }
  }
}
//the start button which will hide the menu, start the game and display the lives and score
StartButton.addEventListener('click',function(event){
  var menu=document.getElementById("Menu");
  var StartButton= document.getElementById('StartButton');
  var game=document.getElementById("game");
  game.style.display="block";
  menu.style.display="none";
  enemySpawningVar = setInterval(enemySpawning,spawnSpeed);
  scoreDiv.innerHTML="score: "+score;
  LivesDiv.innerHTML="lives: 3";
  lives=3;
  start=true;
});
//the retry button reset the game and hide the button
retry.addEventListener('click',function(event){
  restart();
});
//function that stops the game and brings up the retry button
function gameOver(){
  ButtonContainer.style.display="block";
  clearInterval(enemySpawningVar);
  clearInterval(enemyMovingVar);
  var deadAudio = new Audio('dead.wav');
  deadAudio.play();
  for (var i = 0; i <enemyArray.length; i++) {
    enemyArray[i].remove();
  }
}
//function that resets the value and elements
function restart(){
  enemyArray=[];
  score=0;
  spawn=0;
  ButtonContainer.style.display="none";
  scoreDiv.innerHTML="score: "+score;
  LivesDiv.innerHTML="lives: 3";
  enemySpawningVar = setInterval(enemySpawning,spawnSpeed);
  lives=3;
  movementSpeed=20;
}
//function that holds the background music
function backgroundMusic(){
  var backgroundAudio = new Audio('8bit-music.ogg');
  backgroundAudio.play();
  backgroundAudio.loop=true;
}
