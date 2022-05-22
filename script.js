var startEl = document.querySelector("#Start");
var timerEl = document.querySelector("#Countdown");
var introEl = document.querySelector("#Intro");

// Sets elements containing questions and answers to variables
var q1El = document.querySelector("#Q1");
var q2El = document.querySelector("#Q2");
var q3El = document.querySelector("#Q3");
var q4El = document.querySelector("#Q4");
var q5El = document.querySelector("#Q5");

// Question #1 variables for correct and wrong options
var Q1wrong1El = document.getElementById('Q1wrong1');
var Q1wrong2El = document.getElementById('Q1wrong2');
var Q1wrong3El = document.getElementById('Q1wrong3');
var Q1correctEl = document.getElementById('Q1correct');

// Question #2 variables for correct and wrong options
var Q2wrong1El = document.getElementById('Q2wrong1');
var Q2wrong2El = document.getElementById('Q2wrong2');
var Q2wrong3El = document.getElementById('Q2wrong3');
var Q2correctEl = document.getElementById('Q2correct');

// Question #3 variables for correct and wrong options
var Q3wrong1El = document.getElementById('Q3wrong1');
var Q3wrong2El = document.getElementById('Q3wrong2');
var Q3wrong3El = document.getElementById('Q3wrong3');
var Q3correctEl = document.getElementById('Q3correct');

// Question #4 variables for correct and wrong options
var Q4wrong1El = document.getElementById('Q4wrong1');
var Q4wrong2El = document.getElementById('Q4wrong2');
var Q4wrong3El = document.getElementById('Q4wrong3');
var Q4correctEl = document.getElementById('Q4correct');

// Question #5 variables for correct and wrong options
var Q5wrong1El = document.getElementById('Q5wrong1');
var Q5wrong2El = document.getElementById('Q5wrong2');
var Q5wrong3El = document.getElementById('Q5wrong3');
var Q5correctEl = document.getElementById('Q5correct');

function startQuiz() {console.log("Quiz Initiated")}; //Console message for quiz starting via button press

// Quiz logic
function Countdown() {
    
    // Initialize program
    introEl.style.display = "none"; //Hide intro message
    startEl.style.display = "none"; //Hide start button
    q1El.style.display = "block"; //Show Q1 element
    var timeLeft = 20; //Initialize quiz time to X seconds
    var score = 0; //Initialize score to 0
    var timeLost = 5; //Variable for seconds lost per wrong answer
    function consoleWrong() {console.log("Wrong Answer!!!")}; //"Wrong answer" console log
    function consoleCorrect() {console.log("Correct Answer!!!")}; //"Correct answer" console log

    //Question #1 Logic

    //Wrong Answer
    Q1wrong1El.addEventListener("click", () => {
      consoleWrong(); //Logs wrong answer message to console
      timeLeft = timeLeft - timeLost; //Removes timeLost seconds from timer
      if (score>0) { //Decrements score if score is greater than 0
        score = score--;
      }
      q1El.style.display = "none"; //Hides the Q1 element
      q2El.style.display = "block"; //Shows the Q2 element
    });

    //Wrong Answer
    Q1wrong2El.addEventListener("click", () => {
      consoleWrong();
      timeLeft = timeLeft - timeLost;
      if (score>0) {
        score = score--;
      }
      q1El.style.display = "none";
      q2El.style.display = "block";
    });

    //Wrong Answer
    Q1wrong3El.addEventListener("click", () => {
      consoleWrong();
      timeLeft = timeLeft - timeLost;
      if (score>0) {
        score = score--;
      }
      q1El.style.display = "none";
      q2El.style.display = "block";
    });

    //Correct Answer
    Q1correctEl.addEventListener("click", () => {
      consoleCorrect();
      score = score++;
      q1El.style.display = "none";
      q2El.style.display = "block";
    });
  


    //Question #2 Logic

    //Wrong Answer
    Q2wrong1El.addEventListener("click", () => {
      consoleWrong(); //Logs wrong answer message to console
      timeLeft = timeLeft - timeLost; //Removes timeLost seconds from timer
      if (score>0) { //Decrements score if score is greater than 0
        score = score--;
      }
      q2El.style.display = "none"; //Hides the Q2 element
      q3El.style.display = "block"; //Shows the Q3 element
    });

    //Wrong Answer
    Q2wrong2El.addEventListener("click", () => {
      consoleWrong();
      timeLeft = timeLeft - timeLost;
      if (score>0) {
        score = score--;
      }
      q2El.style.display = "none";
      q3El.style.display = "block";
    });

    //Wrong Answer
    Q2wrong3El.addEventListener("click", () => {
      consoleWrong();
      timeLeft = timeLeft - timeLost;
      if (score>0) {
        score = score--;
      }
      q2El.style.display = "none";
      q3El.style.display = "block";
    });

    //Correct Answer
    Q2correctEl.addEventListener("click", () => {
      consoleCorrect();
      score = score++;
      q2El.style.display = "none";
      q3El.style.display = "block";
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
      alert("Time's Up!!!");
    }
  }, 1000);
}

startEl.addEventListener("click", function() {  
  Countdown(); //Starts the quiz using the Countdown() function on button press
});