function f1(){
var randomno1 = Math.floor(Math.random() * 6) + 1;

var randomdiceimg1 = "dice" + randomno1 + ".jpg";

var randomimgsource1 = "images/" + randomdiceimg1;


var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimgsource1);


var randomno2 = Math.floor(Math.random() * 6) + 1;
var randomimgsource2 = "images/dice" + randomno2 + ".jpg";
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomimgsource2);


if (randomno1 > randomno2) {
    document.querySelector("h1").innerHTML = " PLAYER 1 WINS";
}
else if(randomno1 < randomno2){
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS";
}
else {
    document.querySelector("h1").innerHTML = " OOPS DRAW.";
}
}

