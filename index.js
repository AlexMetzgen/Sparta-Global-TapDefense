var i=0;
var spawn=0;
var d = setInterval(spawning,2000);
var lives=3;
var elem=[];
//var funcClone=myMove();
var spawned=false;



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

  //stop the spawning of the enemies when it has reached its cap
  if(spawn==10){
    clearInterval(d);
  }
  for (var i = 0; i < elem.length; i++) {
    var button=elem[i];
    //buttons[i].value=button.value;
    button.addEventListener('click',function(event){
      console.log("hit");
  //clearInterval(id);
      this.remove();
//myMove();
      //this.innerHTML="H";
      //this.remove();


    });
  }
}


  var id;
var destroyed =false;

//handles the movement
var a= setInterval(myMove,3000);

function myMove(enemy) {

  if(enemy!=null){
    destroyed=false;

    var pos = 0;
    id = setInterval(frame, 5);
    function frame() {


if(enemy.offsetTop>=510){
  //clearInterval(id);
  lives--;
    enemy.remove();
  console.log(lives);
}

      else if(enemy.offsetTop<=509){
          pos++;
          enemy.style.top = pos + 'px';
          enemy.style.backgroundColor="black";
          //console.log(pos);
      }
    }
  }
}

if(lives==0){
  gameOver();
}


function gameOver(){
  
}


/*
setInterval(addclick,5);

//constantly updating the elem variable to check for the new spawned ones
function addclick(){
elem = document.getElementsByClassName("SpawnPoint");


//need to push the new variable to the end
}
*/
