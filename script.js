var startEl = document.querySelector("#Start");
var timerEl = document.querySelector("#Countdown");
var introEl = document.querySelector("#Intro");
var q1El = document.querySelector("#Q1");
var q2El = document.querySelector("#Q2");
var q3El = document.querySelector("#Q3");
var q4El = document.querySelector("#Q4");
var q5El = document.querySelector("#Q5");
var Q1wrong1El = document.querySelector(".Q1wrong1");
var Q1wrong2El = document.querySelector(".Q1wrong2");
var Q1wrong3El = document.querySelector(".Q1wrong3");
var Q1correctEl = document.querySelector(".Q1correct");

function startQuiz() {
    console.log("Quiz Initiated")
}

function consoleWrong() {
    console.log("Wrong Answer!!!")
}

function consoleCorrect() {
    console.log("Correct Answer!!!")
}

let timeout;

// Use the `setInterval()` method to call a function to be executed every 1000 milliseconds



function Countdown() {
    introEl.style.display = "none";
    startEl.style.display = "none";
    var timeLeft = 5;
    
    
q1El.style.display = "block";

Q1wrong1El.addEventListener("click",function(){
    consoleWrong();
});

Q1correctEl.addEventListener("click", function() {
    consoleCorrect();
});
    
    var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      consoleReport();
    }
  }, 1000);
}

startEl.addEventListener("click", function(){
    
    Countdown();
    
});