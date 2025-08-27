const homeScore = document.getElementById("homeScore");
const guestScore = document.querySelector("#guestScore");
const plusOneHome = document.getElementById("plusOneHome");
const plusOneGuest = document.getElementById("plusOneGuest");
const plusTwoHome = document.querySelector("#plusTwoHome");
const plusTwoGuest = document.querySelector("#plusTwoGuest");
const plusThreeHome = document.getElementById("plusThreeHome");
const plusThreeGuest = document.querySelector("#plusThreeGuest");

function plusOneHomePoint() {
  let score = homeScore.textContent;
  score++;
  homeScore.textContent = score;
}

function plusOneGuestPoint() {
  let score = guestScore.textContent;
  score++;
  guestScore.textContent = score;
}

function plusTwoHomePoints() {
  let score = homeScore.textContent;
  score = parseInt(score);
  score += 2;
  homeScore.textContent = score;
}

function plusTwoGuestPoints() {
  let score = guestScore.textContent;
  score = parseInt(score);
  score += 2;
  guestScore.textContent = score;
}

function plusThreeHomePoints() {
  let score = homeScore.textContent;
  score = parseInt(score);
  score += 3;
  homeScore.textContent = score;
}

function plusThreeGuestPoints() {
  let score = guestScore.textContent;
  score = parseInt(score);
  score += 3;
  guestScore.textContent = score;
}

plusOneHome.addEventListener("click", plusOneHomePoint);
plusOneGuest.addEventListener("click", plusOneGuestPoint);
plusTwoHome.addEventListener("click", plusTwoHomePoints);
plusTwoGuest.addEventListener("click", plusTwoGuestPoints);
plusThreeHome.addEventListener("click", plusThreeHomePoints);
plusThreeGuest.addEventListener("click", plusThreeGuestPoints);

const resetButton = document.getElementById("reset");

function reset() {
  homeScore.textContent = 0;
  guestScore.textContent = 0;
}

resetButton.addEventListener("click", reset);
