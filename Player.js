function Player(tempX, tempY) {
  // Properties
  this.x = tempX;
  this.y = tempY;
  this.diam = 50;
  this.angle = 0;

  // Method to display the player sprite
  this.display = function () {
    push(); // Create a drawing layer
    translate(this.x, this.y); // Move origin point
    rotate(this.angle); // Player can rotate

    fill(0); // Black
    // Calculate points on a triangle based on a unit circle
    let r = this.diam / 2; // Radius
    // 270 degrees (top)
    let x1 = cos(PI + HALF_PI) * r; 
    let y1 = sin(PI + HALF_PI) * r; 
    // 30 degrees (bottom right)
    let x2 = cos(PI / 6) * r;
    let y2 = sin(PI / 6) * r;
    // 150 degrees (bottom left)
    let x3 = cos(PI * 5 / 6) * r;
    let y3 = sin(PI * 5 / 6) * r;
    // Draw the triangle
    beginShape();
    vertex(x1, y1);
    vertex(x2, y2);
    vertex(x3, y3);
    endShape();

    pop(); // Dispose of this layer
  }

  // Method to move the player
  this.move = function () {
    // Follow the mouse for now
    this.x = mouseX;
    this.y = mouseY;
  }
}
