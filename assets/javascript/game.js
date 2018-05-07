function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

var wins=0;
var losses=0;
var randomNumber
var blue
var white
var green
var red
var score

function setUp(){    
randomNumber = getRandomInt(19, 120);
blue = getRandomInt(1,12);
white = getRandomInt(1,12);
green = getRandomInt(1,12);
red = getRandomInt(1,12);
score=0;
$(".wins").text("Wins: " + wins);
$(".losses").text("Losses: " + losses);
$(".randomNumber").text("Your Random Number is: " + randomNumber);
$(".score").text(score);
}

setUp();
    
$("#one").on("click",function(){
    score=(score+blue);
    $(".score").text(score);
    if(score===randomNumber){
        wins++;
        alert("You Win!")
        setUp();
    } else if(score > randomNumber){
        losses++;
        alert("You Lose")
        setUp();
    }       
})

$("#two").on("click",function(){
    score=(score+white);
     $(".score").text(score);
     if(score===randomNumber){
        wins++;
        alert("You Win!")
        setUp();
    } else if(score > randomNumber){
        losses++;
        alert("You Lose")
        setUp();
    }    
})

$("#three").on("click",function(){
    score=(score+green);
    $(".score").text(score);
    if(score===randomNumber){
        wins++;
        alert("You Win!")
        setUp();
    } else if(score > randomNumber){
        losses++;
        alert("You Lose")
        setUp();
    }   
 })

$("#four").on("click",function(){
    score=(score+red);
    $(".score").text(score);    
    if(score===randomNumber){
    wins++;
    alert("You Win!")
    setUp();
} else if(score > randomNumber){
    losses++;
    alert("You Lose")
    setUp();
}

})



