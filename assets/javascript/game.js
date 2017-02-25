//GLOBAL VARIABLES
//------------------------------------------
var total = 0
var magicNum;
var white;
var rainbow;
var blue;
var green;

var wins = 0
var losses = 0
//document ready function for jquery
$(document).ready(function(){

//function to get random number	
function randomNum(min,max){

    return Math.floor(Math.random()*(max-min+1)+min);
};
//Generate magicNum by invoking randomNum function
var magicNum = randomNum(19,120);
//console.log (magicNum);
//Show magicNum
$("#magicNum").html(magicNum);

//Invoke startGame function
startGame();

//randomNum function
function randomNum(min,max){

    return Math.floor(Math.random()*(max-min+1)+min);
};
//Generate gem values by invoking randomNum function for each
var white = randomNum(1,12);
var rainbow = randomNum(1,12);
var blue = randomNum(1,12);
var green = randomNum(1,12);

//When user clicks on gem, 
//total goes up by corresponding number.
$(".gem").on('click', function(){
	console.log(white);
	console.log(rainbow);
	console.log(blue);
	console.log(green);
});

console.log(magicNum);
//If user total < magicNum
//repeat process until user total >= magicNum
//If user total = magicNum, wins++
//If user total > magicNum, losses++


});//end of document ready function