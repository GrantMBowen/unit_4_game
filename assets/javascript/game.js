 $(document).ready(function () {
     console.log("hello world");


     function generateNumber() {
         var randomNumber = Math.floor(Math.random() * 100 + 20);
        //  if (randomNumber < 20) {generateNumber();}

         $("#random_number").text(randomNumber); 
     }
 

 generateNumber();




 });