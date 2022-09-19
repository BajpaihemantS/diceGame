let p1 = Math.floor((Math.random()*6)+1);
let p2 = Math.floor((Math.random()*6)+1);

var imageArray = new Array(6);

imageArray[0] = new Image();
imageArray[0].src ="images/dice1.png";

imageArray[1] = new Image();
imageArray[1].src = "images/dice2.png";

imageArray[2] = new Image();
imageArray[2].src = "images/dice3.png";

imageArray[3] = new Image();
imageArray[3].src = "images/dice4.png";

imageArray[4] = new Image();
imageArray[4].src = "images/dice5.png";

imageArray[5] = new Image();
imageArray[5].src = "images/dice6.png";

if(p1>p2){
  document.querySelector("h1").innerHTML = "Player 1 wins";
}

else if (p2>p1) {
  document.querySelector("h1").innerHTML = "Player 2 wins";
}

else{
  document.querySelector("h1").innerHTML = "LOL!! It's a draw";
}

document.getElementById("player1Image").src = imageArray[p1-1].src;
document.getElementById("player2Image").src = imageArray[p2-1].src;
