 $(document).ready(function () {
     console.log("hello world");

//Random Number Generator

     function generateNumber() {
         var randomNumber = Math.floor(Math.random() * 100 + 20);
        //  if (randomNumber < 20) {generateNumber();}

         $("#random_number").text(randomNumber); 
     }
 

 generateNumber();


 //Generate smallRandom Numbers between 1 & 20 and assign to images

 var numberOptions = [1, 2, 3, 5];



 for (var i = 0; i < numberOptions.length; i++) {
     var imageCrystal = $("#imagebar");
     imageCrystal.addClass("crystal-image");
     imageCrystal.attr("data-crystalvalue", numberOptions[i]);
     $("#crystals").append(imageCrystal);
 }

 //image on click event, add assigned smallRandom number to "Your Score"

 $(".crystal-image").on("click", function() {
     var crystalValue = $(this).attr("data-crystalvalue");
     crystalValue = parseInt(crystalValue);
     console.log("your crystal has a value of " + crystalValue);
 });

 //if (score === randomNumber, add 1 to "Number of wins: " + winNum )

 //else if (score > randomNumber, add 1 to "Number of losses: " + loseNum)

 //else ()

 


 });