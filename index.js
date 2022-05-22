let imageArray = [];
imageArray[0] = "images/dice1.png";
imageArray[1] = "images/dice2.png";
imageArray[2] = "images/dice3.png";
imageArray[3] = "images/dice4.png";
imageArray[4] = "images/dice5.png";
imageArray[5] = "images/dice6.png";

function firstRandomNumber(){
    let randomNumber1 = Math.floor(Math.random()*5);
    return randomNumber1;
}

function secondRandomNumber(){
    let randomNumber2 = Math.floor(Math.random()*5);
    return randomNumber2;
}

function changePic(){
    document.querySelector(".img1").src = imageArray[firstRandomNumber()];
    document.querySelector(".img2").src = imageArray[secondRandomNumber()];
}

changePic();

function changeTitle(){
    if(firstRandomNumber() > secondRandomNumber()){
        document.querySelector(".title").innerHTML = "Player 1 Wins";
    }
    else if(firstRandomNumber() < secondRandomNumber()){
        document.querySelector(".title").innerHTML = "Player 2 Wins";
    }
    else if(firstRandomNumber() === secondRandomNumber()){
        document.querySelector(".title").innerHTML = "Draw";
    }
}

changeTitle();










