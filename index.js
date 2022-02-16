let grid = new Array();
let cols = 5;
let rows = 5;

// creating an object for each spot
function Spot(i, j) {
  this.i = i;
  this.j = j;
  this.f = 0;
  this.g = 0;
  this.h = 0;
  // every spot has a location (i, j)
  // and they also have a f, g and h value
}

new p5();
function setup() {
  createCanvas(400, 400);

  console.log("A*");

  // creating a 2D array
  for (let i = 0; i < cols; i++) {
    grid[i] = new Array(rows);
  }

  // converting each cell into a spot
  //so it has a cost associated with it

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Spot(i, j);
    }
  }

  console.log(grid);
}

setup();
