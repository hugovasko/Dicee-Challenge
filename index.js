let imageArray = [];
imageArray[0] = "images/dice1.png";
imageArray[1] = "images/dice2.png";
imageArray[2] = "images/dice3.png";
imageArray[3] = "images/dice4.png";
imageArray[4] = "images/dice5.png";
imageArray[5] = "images/dice6.png";


function changePic(){

    let randomNumber1 = Math.floor(Math.random()*5);
    let randomNumber2 = Math.floor(Math.random()*5);

    document.querySelector(".img1").src = imageArray[randomNumber1];
    document.querySelector(".img2").src = imageArray[randomNumber2];

    if(randomNumber1 > randomNumber2){
        document.querySelector(".title").innerHTML = "<span>&#128681</span>Player 1 Wins!";
    }
    else if(randomNumber1 < randomNumber2){
        document.querySelector(".title").innerHTML = "Player 2 Wins!<span>&#128681</span>";
    }
    else {
        document.querySelector(".title").innerHTML = "Draw!";
    }

}

changePic();










