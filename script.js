// OpeningCeremony() → Race100M() → LongJump() → HighJump() → AwardCeremony()
// {red:0,blue:0,green:0,yellow:0}

// The OpeningCeremony() function will have a console.log saying “Let the games begin”. The console log will be in a timeout of 1000 milliseconds. It will also initialise a score object as told above and It will then call the Race100M() while passing the sports obj and the next callback fnc.

// The Race100M() function will take another 3000 milliseconds to execute and it will randomly generate an int between 10 to 15 seconds for all the 4 colours. Now the colour with the least time will get 50 points, while the colour with the second least time will get 25 points. The score object will be updated and the callbackFnc will be called. Again in the callbackFnc you have to pass the score object and then you have to pass the callback Fnc.

// The LongJump() function will randomly select one colour out of red,yellow,green and blue and give that color 150 points and will update the score object and call the next callback fnc. Again in the callbackFnc you have to pass the score object and then you have to pass the callback Fnc. This function will take 2000 milliseconds to execute.

// The HighJump() function will open up a prompt (js prompt : hint - https://www.w3schools.com/js/tryit.asp?filename=tryjs_prompt) and ask the user What colour secured the highest jump - if the user enters red increase red’s score by 100, if yellow then increase the score of yellow by 100 and so on for all the other colours. But if the user enters a wrong colour or doesn't enter anything or cancels then you console.log (”Event was cancelled”) and move forward. Call the AwardCermony with the updated score object.

// The AwardCeremony() will console.log score values and declare who came first,second and third. So the output will look like - Yellow came first with ${yellow’s score} points. Red came second with ${red’s score} points. and so on.

// Also console.log values on every step of the way. Every function when called should console log the previous score and the updated new score. And it should also tell which colour won which sport.

"use strict";

const rand = function (max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const OpeningCeremony = function () {
  const score = {
    red: 0,
    blue: 0,
    green: 0,
    yellow: 0,
  };
  setTimeout(() => {
    console.log("Let the games begin");
    Race100M(score, LongJump);
  }, 1000);
};

const Race100M = function (score, LongJump) {
  setTimeout(() => {
    console.log(score);
    const race = {
      red: rand(15, 10),
      blue: rand(15, 10),
      green: rand(15, 10),
      yellow: rand(15, 10),
    };
    const arr = Object.entries(race);
    arr.sort((a, b) => a[1] - b[1]);
    score[arr[0][0]] = 50;
    score[arr[1][0]] = 25;
    console.log(`${arr[0][0]} won the Race 100M`);
    console.log(score);
    //calling next function
    LongJump(score, HighJump);
  }, 3000);
};

const LongJump = function (score, HighJump) {
  setTimeout(() => {
    console.log(score);
    let arr = ["red", "blue", "green", "yellow"];
    let randomColor = rand(3, 0);
    score[arr[randomColor]] += 150;
    console.log(`${arr[randomColor]} won the Long Jump`);
    console.log(score);
    HighJump(score, AwardCeremony);
  }, 2000);
};

const HighJump = function (score, AwardCeremony) {
  console.log(score);
  const usersChoice = prompt("What colour secured the highest jump ?");
  if (
    usersChoice !== null ||
    usersChoice == "red" ||
    usersChoice == "blue" ||
    usersChoice == "greem" ||
    usersChoice == "yellow"
  ) {
    score[usersChoice] += 100;
    console.log(`${usersChoice} won the High Jump`);
  } else {
    console.log("Event was cancelled");
  }
  console.log(score);
  AwardCeremony(score);
};

const AwardCeremony = function (score) {
  const arr = Object.entries(score);
  arr.sort((a, b) => b[1] - a[1]);
  console.log(
    `${arr[0][0]} came first with ${arr[0][1]} points. ${arr[1][0]} came second with ${arr[1][1]} points. ${arr[2][0]} came third with ${arr[2][1]} points. ${arr[3][0]} came fourth with ${arr[3][1]} points.`
  );
};

OpeningCeremony();
