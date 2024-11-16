// Position variables
let squarePositionX = 200;
let squarePositionY = 200;

// Speed variables
let squareSpeedX = 2;
let squareSpeedY = 3;

// Radius variable
let squareRadius = 25;

// Hue variable
let squareHue = 0;

function setup() {
  // Create 400x400 canvas
  createCanvas(400, 400);

  // Cover canvas with white
  background(255);

  // Draw ellipses using their radius
  ellipseMode(RADIUS);


  // Use Hue Saturation Brightness for colors on circle trail
  colorMode(HSB);

  // Set stroke weight to 4 units
  strokeWeight(4);

  // Create screen reader accessible description
  describe(
    'A circle starts in the center of the canvas. When the user holds the mouse down, the circle bounces around the canvas, its inside switches between black and white, and its outline fades between colors, leaving a rainbow trail.'
  );
}

function draw() {
  // Set stroke color using current hue
  stroke(squareHue, 80, 90);

  // If square's x position is between 100 and 300
  if (squarePositionX >= 100 && squarePositionX <= 300) {
    // Set fill color to black
    fill(0);

    // Otherwise
  } else {
    // Set fill color to white
    fill(255);
  }

  // Draw square at current position
  rect(squarePositionX, squarePositionY, squareRadius);

  // Add speed to square's position to make it move
    squarePositionX = squarePositionX + squareSpeedX;
    squarePositionY = squarePositionY + squareSpeedY;
  
  // If mouse is held down, animate the sketch
  if (mouseIsPressed === true) {
    

    // Increase hue by 1
    squareHue = squareHue + 1;
  }

  // If hue has reached maximum value
  if (squareHue >= 360) {
    // Reset hue to 0
    squareHue = 0;
  }

  // If square is beyond left or right edge
  if (
    squarePositionX < squareRadius ||
    squarePositionX > width - squareRadius
  ) {
    // Reverse horizontal speed
    squareSpeedX = -squareSpeedX;
  }

  // If circle is beyond top or bottom edge
  if (
    squarePositionY < squareRadius ||
    squarePositionY > height - squareRadius
  ) {
    // Reverse vertical speed
    squareSpeedY = -squareSpeedY;
  }
}

function mousePressed() {
  // Start/stop the animation loop
  if (isLooping()) {
    noLoop();
  } else {
    loop();
  }
}
