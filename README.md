Dev Info
---
Name: Adam Martin

HW Title: Coding Quiz (Week 4 Assignment)

Submit Date: 5/22/22

Links
---
GitPage: https://amartinvt.github.io/CodingQuizHomework/#

GitRepo: https://github.com/AmartinVT/CodingQuizHomework

Description of Functionality
---
The user is sent to a launch screen with a greeting

The user can then press a start quiz button or view high scores

High scores are kept in localStorage
    *** NOTE: The high score display formatting is NOT correct. I was unable to pull individual records from the object to append to a list for neat and correct display. Data and content is correct but formatting is very poor.

Once the quiz is started, the user has 50 seconds to answer 5 web development related questions

Missing a question will remove 5 seconds of time

Once the timer hits 0 OR all questions are answered, the uswer is met with a "Game Over" screen

This screen prompts the user for name entry

This screen also displays the score from the current round

Logic
---
All questions and answer options are created as buttons

The buttons are turned into variables in the JavaScript

The buttons listen for a click

Each question has nested logic increasing or decreasing the score based on the question being correct

The final question has logic setting an object in local memory to take the users initials and save their score

Screenshots
---
![](Assets/SS_1.png?raw=true)
![](Assets/SS_2.png?raw=true)
![](Assets/SS_3.png?raw=true)
![](Assets/SS_4.png?raw=true)
![](Assets/SS_5.png?raw=true)