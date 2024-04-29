/**
 * Project 3 versions 0-4 - 2D Web Game
 * Name:Patrick Memong
 * 
 * Use this template to get started creating a simple 2D game for the web using P5.js. 
 */
// Global variable to store the current game state
let gameState = "splash";

function setup() {
  createCanvas(600, 400);
}

function draw() {
  // Switch statement to determine which screen to display based on the current game state
  switch (gameState) {
    case "splash":
      splash(); // Display the splash screen
      break;
    case "play":
      play(); // Display the play screen
      break;
    case "gameOver":
      gameOver(); // Display the game over screen
      break;
    default:
      console.log("No match found - check your mousePressed() function!");
  }
}

// Function to display the splash screen
function splash() {
  background(200); // Light gray background
  textAlign(CENTER);
  textSize(32);
  fill(0); // Black text color
  text("Splash Screen", width / 2, height / 2); // Display text in the center of the canvas
}

// Function to display the play screen
function play() {
  background(0, 200, 0); // Green background
  textAlign(CENTER);
  textSize(32);
  fill(0); // Black text color
  text("Play Screen", width / 2, height / 2); // Display text in the center of the canvas
}

// Function to display the game over screen
function gameOver() {
  background(0); // Black background
  textAlign(CENTER);
  textSize(32);
  fill(255, 0, 0); // Red text color
  text("Game Over Screen", width / 2, height / 2); // Display text in the center of the canvas
}

// Function to handle mouse clicks and change the game state
function mousePressed() {
  // Change the game state based on the current state
  if (gameState == "splash") {
    gameState = "play";
  } else if (gameState == "play") {
    gameState = "gameOver";
  } else if (gameState == "gameOver") {
    gameState = "splash";
  }
}