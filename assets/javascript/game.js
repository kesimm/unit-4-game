function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

var wins=0;
var losses=0;

function setUp(){    
var randomNumber = getRandomInt(19, 120);
var blue = getRandomInt(1,12);
var white = getRandomInt(1,12);
var green = getRandomInt(1,12);
var red = getRandomInt(1,12);
var score=0;
    
$(".randomNumber").text("Your Random Number is: " + randomNumber);
$(".wins").text("Wins: " + wins);
$(".losses").text("Losses: " + losses);
$(".score").text(score);

$("#one").on("click",function(){
    score=(score+blue);
    $(".score").text(score);    
})

$("#two").on("click",function(){
    score=(score+white);
     $(".score").text(score); 
    console.log(white);  
})

$("#three").on("click",function(){
    score=(score+green);
    $(".score").text(score);    
 })

$("#four").on("click",function(){
    score=(score+red);
    $(".score").text(score);    
})



}

setUp();





