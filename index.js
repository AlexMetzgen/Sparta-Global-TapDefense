var i=0;
var spawn=0;

var lives=3;
var elem=[];
var score=0;
var game=document.getElementById("game");
var menu=document.getElementById("Menu");
var button= document.getElementById('StartButton');
var retryButton= document.getElementById('retry');
var gameOverUI=document.getElementById("gameover");
var retryButtonContainer=document.getElementById("ButtonContainer");
var scoreDiv=document.getElementById("score");
var d;
var a;
//var funcClone=myMove();
var spawned=false;
var spawnSpeed=400;
var speed =15;



//handles the spawning
function spawning(){

  spawn++;
  spawned=true;
  //console.log(spawned);
  //console.log(elem);
  // creates a div elements and saves it in a variable
  var divr = document.createElement("div");

  //attaches the divr variable to the game id elements in the index.html
  //document.getElementById("game").appendChild(divr);
  //adds a class to the divr elemetns so it can be styled by the index.css
  divr.classList.add('SpawnPoint');
  //adds the element to the array
  elem.push(divr);
  //randomly generates a number which is the deciding factor for where eneimes will be spawned
  var randomNumber =Math.floor((Math.random() * 10) + 1);
  //the if statement decides where the enimes will be spawned

  //test
  myMove(divr);
  //test
  if(randomNumber==1){
    //divr.style.left="30px";
    document.getElementById("1").appendChild(divr);
  }
  else if (randomNumber==2) {
    document.getElementById("2").appendChild(divr);
    //divr.style.left="60px";
  }
  else if (randomNumber==3) {
    document.getElementById("3").appendChild(divr);
    //divr.style.left="90px";
  }
  else if (randomNumber==4) {
    document.getElementById("4").appendChild(divr);
    //divr.style.left="120px";
  }

  else if (randomNumber==5) {
    document.getElementById("5").appendChild(divr);
  }
  else if (randomNumber==6) {
    document.getElementById("6").appendChild(divr);
  }
  else if (randomNumber==7) {
    document.getElementById("7").appendChild(divr);
  }
  else if (randomNumber==8) {
    document.getElementById("8").appendChild(divr);
  }
  else if (randomNumber==9) {
    document.getElementById("9").appendChild(divr);
  }else {
    document.getElementById("10").appendChild(divr);
  }
  a = setInterval(myMove,spawnSpeed);
  //stop the spawning of the enemies when it has reached its cap
  if(spawn==10){
    clearInterval(d);
  }
  for (var i = 0; i < elem.length; i++) {
    var button=elem[i];
    //buttons[i].value=button.value;
  }
    button.addEventListener('click',function(event){
      console.log("hit");
      //clearInterval(id);
      this.remove();
      //myMove();
      //this.innerHTML="H";
      //this.remove();
      score++;
      scoreDiv.innerHTML="score: "+score;
      console.log(score);
    });

}


var id;
var destroyed =false;

//handles the movement


function myMove(enemy) {

  if(enemy!=null){
    destroyed=false;

    var pos = 0;
    id = setInterval(frame, speed);
    function frame() {


      if(enemy.offsetTop>=630){
        //clearInterval(id);
        lives--;

        enemy.remove();
        console.log(lives);

        if(lives<=0){
          gameOver();


        }

      }

      else if(enemy.offsetTop<=629){
        pos++;
        enemy.style.top = pos + 'px';
        //enemy.style.backgroundColor="black";
        //console.log(pos);
      }
    }
  }
}






function gameOver(){
  //gameOverUI.style.display="block";
  console.log("Game over");
  ButtonContainer.style.display="block";
  clearInterval(d);
  clearInterval(a);
  for (var i = 0; i <elem.length; i++) {
    elem[i].remove();
  }
}




button.addEventListener('click',function(event){
  game.style.display="block";
  menu.style.display="none";
  console.log("button hit");
  d = setInterval(spawning,spawnSpeed);

});

retry.addEventListener('click',function(event){
  console.log("retry button pressed")
  restart();
});

function restart(){
lives=3;
elem=[];
score=0;
spawn=0;
d = setInterval(spawning,spawnSpeed);
ButtonContainer.style.display="none";
scoreDiv.innerHTML="score: "+score;
}
