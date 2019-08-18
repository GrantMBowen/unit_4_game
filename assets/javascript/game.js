 $(document).ready(function () {
     console.log("hello world");

 var crystals = [];
 for (var c =1; c < 13; c++) {
     crystals.push(c);
 }
 
     var crystalNumbers = [];
 
 var c1;
 var c2;
 var c3;
 var c4;

 var totalScore = 0;

 var wins = 0;
 var losses = 0;




     //Random Number Generator

     function generateNumber() {
         var randomNumber = Math.floor(Math.random() * 100 + 20);
        //  if (randomNumber < 20) {generateNumber();}

         $("#random_number").text(randomNumber); 
         
     }
 

 


 //Generate smallRandom Numbers between 1 & 20 and assign to images


 function pickRandomCrystals(arr) {
     for (var y =0; y < 4; y++) {
         var a = arr[Math.floor(Math.random() * arr.length)];
         crystalNumbers.push(a);

     }
     console.log("crystal numbers: " + crystalNumbers);
 }

function crystalValues(arr) {
    for (i = 0; i < arr.length; i++) {
        $("#button" + (i+1)).attr("value", arr[i]);
        console.log(this);
    }
    c1 = arr[0];
    c2 = arr[1];
    c3 = arr[2];
    c4 = arr[3];
}

function resetGame(x) {
    crystalNumbers  = [];
    generateNumber ();
    pickRandomCrystals(crystals);
    crystalValues(crystalNumbers);
    totalScore = 0;
    $("#scorenum").html(totalScore);
    alert(x);
}

generateNumber ();
pickRandomCrystals(crystals);
crystalValues(crystalNumbers);




//  for (var i = 0; i < numberOptions.length; i++) {
//      var imageCrystal = $("#imagebar");
//      imageCrystal.addClass("crystal-image");
//      imageCrystal.attr("data-crystalvalue", numberOptions[i]);
//      $("#crystals").append(imageCrystal);
//  }

//  //image on click event, add assigned smallRandom number to "Your Score"

//  $(".crystal-image").on("click", function() {
//      var crystalValue = $(this).attr("data-crystalvalue");
//      crystalValue = parseInt(crystalValue);
//      console.log("your crystal has a value of " + crystalValue);
//  });

 //if (score === randomNumber, add 1 to "Number of wins: " + winNum )

 //else if (score > randomNumber, add 1 to "Number of losses: " + loseNum)

 //else ()

 


 });