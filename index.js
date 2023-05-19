// alert("helo");

var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1);
randomNumber1 = randomNumber1 + 1;

var randomDiceImage = "dice"+randomNumber1+".png";

var randomImageSource="images/"+randomDiceImage;
 
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2);
randomNumber2 = randomNumber2 + 1;

var randomDiceImage2 = "dice"+randomNumber2+".png";

var randomImageSource2="images/"+randomDiceImage2;


var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImageSource2);    


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins";

}
if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="It's a Tie";
}
if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
