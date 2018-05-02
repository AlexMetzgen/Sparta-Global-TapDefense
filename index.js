//handles the player lives
function livesFunction(){
  var lives=3;
  return lives;
}
//global variables
var hidden, visibilityChange,enemySpawningVar,enemyMovingVar,enemyMoveInterval;
var life=livesFunction();
var enemyArray=[];
var score=0;
var game=document.getElementById("game");
var menu=document.getElementById("Menu");
var StartButton= document.getElementById('StartButton');
var retryButton= document.getElementById('retry');
var gameOverUI=document.getElementById("gameover");
var retryButtonContainer=document.getElementById("ButtonContainer");
var scoreDiv=document.getElementById("score");
var LivesDiv=document.getElementById("lives");
var spawnSpeed=500;
var movementSpeed=5;
//constally checks to see if the page is active
setInterval(handleVisibilityChange,1000);
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}
//when the page is hidden it stop the enemy spawning and moving
function handleVisibilityChange() {
  if (document[hidden]) {
    clearInterval(enemySpawningVar);
    clearInterval(enemyMovingVar);
  }
}
//handles the enemy movement
function enemyMoving(enemy) {
  if(enemy!=null){
    var enemyPosition = 0;
    enemyMoveInterval = setInterval(enemyMoveHeight,movementSpeed );
    function enemyMoveHeight() {
      if(enemy.offsetTop>=630){
        life--;
        LivesDiv.innerHTML="lives "+life;
        enemy.remove();
        if(life<=0){
          gameOver();
          return life=3;
        }
      }
      else if(enemy.offsetTop<=629){
        enemyPosition++;
        enemy.style.top = enemyPosition + 'px';
      }
    }
  }
}
//the start button whihc will hide the menu and start the game
StartButton.addEventListener('click',function(event){
  game.style.display="block";
  menu.style.display="none";
  enemySpawningVar = setInterval(enemySpawning,spawnSpeed);
});
//the restart button which reset the game and hide the button
retry.addEventListener('click',function(event){
  restart();
});
//handles the spawning
function enemySpawning(){
  // creates a div elements and saves it in a variable
  var enemyDiv = document.createElement("div");
  //adds a class to the enemydiv elemetns so it can be styled by the index.css
  enemyDiv.classList.add('enemy');
  //adds the enemydiv to the array
  enemyArray.push(enemyDiv);
  //randomly generates a number which is the deciding factor for where eneimes will be spawned
  var randomNumber =Math.floor((Math.random() * 10) + 1);
  //the if statement decides where the enimes will be spawned
  enemyMoving(enemyDiv);
  if(randomNumber==1){
    document.getElementById("1").appendChild(enemyDiv);
  }
  else if (randomNumber==2) {
    document.getElementById("2").appendChild(enemyDiv);
  }
  else if (randomNumber==3) {
    document.getElementById("3").appendChild(enemyDiv);
  }
  else if (randomNumber==4) {
    document.getElementById("4").appendChild(enemyDiv);
  }
  else if (randomNumber==5) {
    document.getElementById("5").appendChild(enemyDiv);
  }
  else if (randomNumber==6) {
    document.getElementById("6").appendChild(enemyDiv);
  }
  else if (randomNumber==7) {
    document.getElementById("7").appendChild(enemyDiv);
  }
  else if (randomNumber==8) {
    document.getElementById("8").appendChild(enemyDiv);
  }
  else if (randomNumber==9) {
    document.getElementById("9").appendChild(enemyDiv);
  }else {
    document.getElementById("10").appendChild(enemyDiv);
  }
  enemyMovingVar = setInterval(enemyMoving,movementSpeed);
  //help with applying an event listener to the enemies
  for (var i = 0; i < enemyArray.length; i++) {
    var enemy=enemyArray[i];
  }
  //when the enemy is cliked it displays the new score and destorys the enemy
  enemy.addEventListener('click',function(event){
    this.remove();
    score++;
    scoreDiv.innerHTML="score: "+score;

  });
}
//function that stops the game and brings up the retry button
function gameOver(){
  ButtonContainer.style.display="block";
  clearInterval(enemySpawningVar);
  clearInterval(enemyMovingVar);
  for (var i = 0; i <enemyArray.length; i++) {
    enemyArray[i].remove();
  }
}
//function that resets the value and elements
function restart(){
  enemyArray=[];
  score=0;
  spawn=0;
  enemySpawningVar = setInterval(enemySpawning,spawnSpeed);
  ButtonContainer.style.display="none";
  scoreDiv.innerHTML="score: "+score;
}
