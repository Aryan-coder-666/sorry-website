const mainCard = document.getElementById("mainCard");

const secondCard = document.getElementById("secondCard");

const finalCard = document.getElementById("finalCard");

const startButton = document.getElementById("startButton");

const continueButton = document.getElementById("continueButton");

const restartButton = document.getElementById("restartButton");


startButton.addEventListener("click", function () {

    mainCard.style.display = "none";

    secondCard.style.display = "block";

});


continueButton.addEventListener("click", function () {

    secondCard.style.display = "none";

    finalCard.style.display = "block";

});


restartButton.addEventListener("click", function () {

    finalCard.style.display = "none";

    mainCard.style.display = "block";

});