//GLOBAL VARIABLES
//------------------------------------------
var total = 0;
var newTotal = "";
var magicNum;
var gem;

var wins = 0;
var losses = 0;

//document ready function for jquery
$(document).ready(function(){

//function to generate random number	
function randomNum(min,max){

    return Math.floor(Math.random()*(max-min+1)+min);
};


//Generate magicNum by invoking randomNum function
var magicNum = randomNum(19,120);
//console.log (magicNum);
//Show magicNum
$("#magicNum").html(magicNum);

//Generate gem values by invoking randomNum function for each
var white = randomNum(1,12);
var rainbow = randomNum(1,12);
var blue = randomNum(1,12);
var green = randomNum(1,12);

//When user clicks on gem, 
//total goes up by corresponding number.
/*If user clicks on white gem, use white value,
and so on.*/
//
$("#white").on('click', function(){
	console.log(white);
	var newWhite = parseInt(white);
	total += newWhite;
	console.log(total);
$(".total").html(total);

if(total === magicNum){
	wins++;
	$("#wins").html(wins);
	};
	if(total > magicNum){
	losses++;
	$("#losses").html(losses);
	};
	
});

$("#blue").on('click', function(){
	console.log(blue);
	var newBlue = parseInt(blue);
	total += newBlue;
	console.log(total);
$(".total").html(total);

if(total === magicNum){
	wins++;
	$("#wins").html(wins);
	};
	if(total > magicNum){
	losses++;
	$("#losses").html(losses);
	};
	
});

$("#rainbow").on('click', function(){
	console.log(rainbow);
	var newRainbow = parseInt(rainbow);
	total += newRainbow;
	console.log(total);
$(".total").html(total);

if(total === magicNum){
	wins++;
	$("#wins").html(wins);
	};
	if(total > magicNum){
	losses++;
	$("#losses").html(losses);
	};
	
});

$("#green").on('click', function(){
	console.log(green);
	var newGreen = parseInt(green);
	total += newGreen;
	console.log(total);
$(".total").html(total);
if(total === magicNum){
	wins++;
	$("#wins").html(wins);
	};
if(total > magicNum){
	losses++;
	$("#losses").html(losses);
	};

});

//reset random numbers while keeping wins and losses.



});//end of document ready function