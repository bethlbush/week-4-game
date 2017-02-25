//GLOBAL VARIABLES
//------------------------------------------
var total = 5;
var newTotal = "";
var magicNum;
var white;
var rainbow;
var blue;
var green;

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


//randomNum function
function randomNum(min,max){

    return Math.floor(Math.random()*(max-min+1)+min);
};
//Generate gem values by invoking randomNum function for each
var white = randomNum(1,12);
var rainbow = randomNum(1,12);
var blue = randomNum(1,12);
var green = randomNum(1,12);

/*test to make sure numbers being generated
	console.log(white);
	console.log(rainbow);
	console.log(blue);
	console.log(green);*/

//When user clicks on gem, 
//total goes up by corresponding number.
/*If user clicks on white gem, use white value,
and so on.*/


$("#white").on('click', function(){
	console.log(white);
	
	var newWhite = parseInt(white);
	total += newWhite;
	console.log(total);
$(".total").html(total);

});//end of gem click function
/*$("#rainbow").on('click', function(){
	console.log(rainbow);
});//end of gem click function
$("#blue").on('click', function(){
	console.log(blue);
});//end of gem click function
$("#green").on('click', function(){
	console.log(green);
});//end of gem click function

var newTotal = total +  

$(document).on("click", ".gem", function() {

	//If user total < magicNum
    
          if (newTotal < magicNum) {
          	
            // Grab the number of the value clicked and build a string with it
            var newTotal = total + $(this).attr("value");
            console.log(newTotal);
            // Print it to the div
            //$(".total").html(newTotal);
          }

          
         /* else {
          	//If user total = magicNum, wins++
            // Grab the number of the value clicked and build a string with it
            secondNumber += $(this).attr("value");

            // Print the number to the firstPage
            console.log(secondNumber);

            // Print it to the div
            $("#second-number").html(secondNumber);
          };*/








//If user total > magicNum, losses++


});//end of document ready function