 $(document).ready(function () {
    // console.log("hello world");

        var crystals = [];
        for (var c = 1; c < 13; c++) {
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
            randomNumber = Math.floor(Math.random() * 100 + 20);
            //  if (randomNumber < 20) {generateNumber();}

            $("#random_number").text(randomNumber);
            window.randomNumber = randomNumber;

        }
        //Generate smallRandom Numbers between 1 & 20 and assign to images

        function pickRandomCrystals(arr) {
            for (var y = 0; y < 4; y++) {
                var a = arr[Math.floor(Math.random() * arr.length)];
                crystalNumbers.push(a);

            }
            console.log("crystal numbers: " + crystalNumbers);
        }

        function crystalValues(arr) {
            for (i = 0; i < arr.length; i++) {
                $("#button-" + (i + 1)).attr("value", arr[i]);
                console.log(arr[i]);
            }
            c1 = arr[0];
            c2 = arr[1];
            c3 = arr[2];
            c4 = arr[3];
        }

        function resetGame(x) {
            crystalNumbers = [];
            generateNumber();
            pickRandomCrystals(crystals);
            crystalValues(crystalNumbers);
            totalScore = 0;
            $("#scorenum").html(totalScore);
            alert(x);
        }

        generateNumber();
        pickRandomCrystals(crystals);
        crystalValues(crystalNumbers);

        $("#button-yellowdot").on("click", function () {
            totalScore += c1;
            $("#scorenum").html(totalScore);
        });

        $("#button-bluedot").on("click", function () {
            totalScore += c2;
            $("#scorenum").html(totalScore);
        });

        $("#button-purpledot").on("click", function () {
            totalScore += c3;
            $("#scorenum").html(totalScore);
        });

        $("#button-blackdot").on("click", function () {
            totalScore += c4;
            $("#scorenum").html(totalScore);
        });

        $("button").on('click', function () {
            if (totalScore === randomNumber) {
                wins++;
                console.log(totalScore);
                $("#scorenum").html(totalScore);
                $('#Wins').html("Number of Wins: " + wins);

                setTimeout(function () {
                    resetGame("YOU WIN!!"), 200
                    });
            }
            else if (totalScore > randomNumber) {
                losses++;
                $('#scorenum').html(totalScore);
                $('#Losses').html('losses: ' + losses);

                setTimeout(function () {
                    resetGame("NICE TRY...but no Cigar. You Lose"), 200
                    });
            }
        });

});