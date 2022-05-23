// Creates variables from HTML elements
var startEl = document.querySelector("#Start");
var reloadEl = document.querySelector("#Reload");
var timerEl = document.querySelector("#Countdown");
var introEl = document.querySelector("#Intro");
var gameOverEl = document.querySelector("#GameOver");
var yourScoreEl = document.querySelector("#YourScore");
var hiScoreEl = document.getElementById('HiScores');
var listOfScores = document.getElementById("ListOfScores");

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

let score = 0; //Initialize score to 0

// Initialize scoreObj to hold 2 values
let scoreObj = {
  objInit: null,
  objScore: null
}

function startQuiz() {console.log("Quiz Initiated")}; //Console message for quiz starting via button press

function highScores() {
  introEl.style.display = "none";
  startEl.style.display = "none";
  q1El.style.display = "none";
  q2El.style.display = "none";
  q3El.style.display = "none";
  q4El.style.display = "none";
  q5El.style.display = "none";
  gameOverEl.style.display = "none";
  yourScoreEl.style.display = "none";
  hiScoreEl.innerHTML = (localStorage.getItem("High-Scores"));
  reloadEl.style.display = "block";
}

// Quiz logic
function Countdown() {
    
    // Initialize program
    introEl.style.display = "none"; //Hide intro message
    startEl.style.display = "none"; //Hide start button

    q1El.style.display = "block"; //Show Q1 element
    var timeLeft = 50; //Initialize quiz time to X seconds

    var timeLost = 5; //Variable for seconds lost per wrong answer
    function consoleWrong() {console.log("Wrong Answer!!!")}; //"Wrong answer" console log
    function consoleCorrect() {console.log("Correct Answer!!!")}; //"Correct answer" console log

    //Question #1 Logic

    //Wrong Answer
    Q1wrong1El.addEventListener("click", () => {
      consoleWrong(); //Logs wrong answer message to console
      timeLeft = timeLeft - timeLost; //Removes timeLost seconds from timer
      q1El.style.display = "none"; //Hides the Q1 element
      q2El.style.display = "block"; //Shows the Q2 element
    });

    //Wrong Answer
    Q1wrong2El.addEventListener("click", () => {
      consoleWrong();
      timeLeft = timeLeft - timeLost;
      q1El.style.display = "none";
      q2El.style.display = "block";
    });

    //Wrong Answer
    Q1wrong3El.addEventListener("click", () => {
      consoleWrong();
      timeLeft = timeLeft - timeLost;
      q1El.style.display = "none";
      q2El.style.display = "block";
    });

    //Correct Answer
    Q1correctEl.addEventListener("click", () => {
      consoleCorrect();
      score++;
      q1El.style.display = "none";
      q2El.style.display = "block";
    });
  


    //Question #2 Logic

    //Wrong Answer
    Q2wrong1El.addEventListener("click", () => {
      consoleWrong(); //Logs wrong answer message to console
      timeLeft = timeLeft - timeLost; //Removes timeLost seconds from timer
      q2El.style.display = "none"; //Hides the Q2 element
      q3El.style.display = "block"; //Shows the Q3 element
    });

    //Wrong Answer
    Q2wrong2El.addEventListener("click", () => {
      consoleWrong();
      timeLeft = timeLeft - timeLost;
      q2El.style.display = "none";
      q3El.style.display = "block";
    });

    //Wrong Answer
    Q2wrong3El.addEventListener("click", () => {
      consoleWrong();
      timeLeft = timeLeft - timeLost;
      q2El.style.display = "none";
      q3El.style.display = "block";
    });

    //Correct Answer
    Q2correctEl.addEventListener("click", () => {
      consoleCorrect();
      score++;
      q2El.style.display = "none";
      q3El.style.display = "block";
    });



    //Question #3 Logic

    //Wrong Answer
    Q3wrong1El.addEventListener("click", () => {
      consoleWrong(); //Logs wrong answer message to console
      timeLeft = timeLeft - timeLost; //Removes timeLost seconds from timer
      q3El.style.display = "none"; //Hides the Q2 element
      q4El.style.display = "block"; //Shows the Q3 element
    });

    //Wrong Answer
    Q3wrong2El.addEventListener("click", () => {
      consoleWrong();
      timeLeft = timeLeft - timeLost;
      q3El.style.display = "none";
      q4El.style.display = "block";
    });

    //Wrong Answer
    Q3wrong3El.addEventListener("click", () => {
      consoleWrong();
      timeLeft = timeLeft - timeLost;
      q3El.style.display = "none";
      q4El.style.display = "block";
    });

    //Correct Answer
    Q3correctEl.addEventListener("click", () => {
      consoleCorrect();
      score++;
      q3El.style.display = "none";
      q4El.style.display = "block";
    });



    //Question #4 Logic

    //Wrong Answer
    Q4wrong1El.addEventListener("click", () => {
      consoleWrong(); //Logs wrong answer message to console
      timeLeft = timeLeft - timeLost; //Removes timeLost seconds from timer
      q4El.style.display = "none"; //Hides the Q2 element
      q5El.style.display = "block"; //Shows the Q3 element
    });

    //Wrong Answer
    Q4wrong2El.addEventListener("click", () => {
      consoleWrong();
      timeLeft = timeLeft - timeLost;
      q4El.style.display = "none";
      q5El.style.display = "block";
    });

    //Wrong Answer
    Q4wrong3El.addEventListener("click", () => {
      consoleWrong();
      timeLeft = timeLeft - timeLost;
      q4El.style.display = "none";
      q5El.style.display = "block";
    });

    //Correct Answer
    Q4correctEl.addEventListener("click", () => {
      consoleCorrect();
      score++;
      q4El.style.display = "none";
      q5El.style.display = "block";
    });



    //Question #5 Logic

    //Wrong Answer
    Q5wrong1El.addEventListener("click", () => {
      consoleWrong(); //Logs wrong answer message to console
      timeLeft = timeLeft - timeLost; //Removes timeLost seconds from timer
      q5El.style.display = "none"; //Hides the Q5 element
      yourScoreEl.innerHTML = "Final Score: " + score; //Sets the HTML id equal to the score vaiable
      yourScoreEl.style.display = "block"; //Shows the score element
      gameOverEl.style.display = "block"; //Shows the game over element
      var ScoreRecord = [localStorage.getItem("High-Scores")] || []; //Grabs local storage of high scores
      var Init = window.prompt("Enter your initials: ");
      clearInterval(timeInterval);
      reloadEl.style.display = "block";
      var scoreObj = JSON.stringify({"Initials":Init,"Score":score}); //Creates a string of initials and scores
      ScoreRecord.push(scoreObj); //Adds new score to the local storage of high scores
      localStorage.setItem("High-Scores",ScoreRecord); //Redefines local storage to include new score
    });

    //Wrong Answer
    Q5wrong2El.addEventListener("click", () => {
      consoleWrong();
      timeLeft = timeLeft - timeLost;
      q5El.style.display = "none";
      yourScoreEl.innerHTML = "Final Score: " + score;
      yourScoreEl.style.display = "block";
      gameOverEl.style.display = "block";
      var ScoreRecord = [localStorage.getItem("High-Scores")] || []; //Grabs local storage of high scores
      var Init = window.prompt("Enter your initials: ");
      clearInterval(timeInterval);
      reloadEl.style.display = "block";
      var scoreObj = JSON.stringify({"Initials":Init,"Score":score}); //Creates a string of initials and scores
      ScoreRecord.push(scoreObj); //Adds new score to the local storage of high scores
      localStorage.setItem("High-Scores",ScoreRecord); //Redefines local storage to include new score
    });

    //Wrong Answer
    Q5wrong3El.addEventListener("click", () => {
      consoleWrong();
      timeLeft = timeLeft - timeLost;
      q5El.style.display = "none";
      yourScoreEl.innerHTML = "Final Score: " + score;
      yourScoreEl.style.display = "block";
      gameOverEl.style.display = "block";
      var ScoreRecord = [localStorage.getItem("High-Scores")] || []; //Grabs local storage of high scores
      var Init = window.prompt("Enter your initials: ");
      clearInterval(timeInterval);
      reloadEl.style.display = "block";
      var scoreObj = JSON.stringify({"Initials":Init,"Score":score}); //Creates a string of initials and scores
      ScoreRecord.push(scoreObj); //Adds new score to the local storage of high scores
      localStorage.setItem("High-Scores",ScoreRecord); //Redefines local storage to include new score
    });

    //Correct Answer
    Q5correctEl.addEventListener("click", () => {
      consoleCorrect();
      score++;
      q5El.style.display = "none";
      yourScoreEl.style.display = "block";
      yourScoreEl.innerHTML = "Final Score: " + score;
      gameOverEl.style.display = "block";
      var ScoreRecord = [localStorage.getItem("High-Scores")] || []; //Grabs local storage of high scores
      var Init = window.prompt("Enter your initials: ");
      clearInterval(timeInterval);
      reloadEl.style.display = "block";
      var scoreObj = JSON.stringify({"Initials":Init,"Score":score}); //Creates a string of initials and scores
      ScoreRecord.push(scoreObj); //Adds new score to the local storage of high scores
      localStorage.setItem("High-Scores",ScoreRecord); //Redefines local storage to include new score
    });

    // Time interval logic for countdown
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

// Initializes the program
startEl.addEventListener("click", function() {  
  Countdown(); //Starts the quiz using the Countdown() function on button press
});

// Closes the quiz & opens high scores
hiScoreEl.addEventListener("click", function() {  
  highScores(); //Opens the high scores
});

// Reload the quiz
function Reload() {location.reload()};

reloadEl.addEventListener("click", function(){
  Reload();
});