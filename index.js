function removeFromArray(arr, element) {
  // loop through array backward so we do not skip an element
  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] === element) {
      arr.splice(i, 1);
    }
  }
}

let grid = new Array();
let cols = 5;
let rows = 5;

// defining openSet and closedSet as Arrays  in global variables
// creating an object for each spot
let openSet = [];
let closedSet = [];
// following p5 principles defining variables outside and then
// assigning values inside the setup() OR draw()
let start;
let end;
//defining for width and height of the rectangle
let w, h;

function Spot(i, j) {
  this.i = i;
  this.j = j;
  this.f = 0;
  this.g = 0;
  this.h = 0;

  // every spot has a location (i, j)
  // and they also have a f, g and h value

  // this creates a rectangle for each cell in the grid
  // we call this method in draw function()
  this.show = function (col) {
    fill(col);
    rect(this.i * w, this.j * h, w, h);
  };
}

function setup() {
  createCanvas(400, 400);

  console.log("A*");
  // widht and height is the one define in our createCanvas property
  w = width / cols;
  h = height / rows;
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

  // defining the start and the end node
  //   top left to bottom right
  start = grid[0][0];
  end = grid[cols - 1][rows - 1];
  //adding our starting point to the openSet
  openSet.push(start);

  console.log(grid);
}

// the algorithm itself is a loop that keep running
// utill we either have an empty openset or we reach
//  the destination hence draw function keeps running in a loop

// draw function keeps looping as we are using p5
function draw() {
  if (openSet.length > 0) {
    // we assume current is the index with lowest f
    let winner = 0;
    for (let i = 0; i < openSet.length; i++) {
      if (openSet[i].f < openSet[winner].f) {
        winner = i;
      }
    }
    let current = openSet[winner];

    // if the winner is end that means we have reached
    // the end; our loop if finished
    if (openSet[winner] === end) {
      console.log("DONE!");
    }
    // we remove the current because that is the lowest f we have
    // so next we will evaluate that node

    removeFromArray(openSet, current);
    closedSet.push(current);
  } else {
    //no solution
  }

  background(0);

  // defninig function so each spot is shown when it is tested
  // now each gir[i][j] is a spot which a constructor function
  // and it has a property called show so we can use it as we did here with
  // dot notation
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].show(color(255));
    }
  }

  for (let i = 0; i < closedSet.length; i++) {
    closedSet[i].show(color(255, 0, 0));
  }

  for (let i = 0; i < openSet.length; i++) {
    openSet[i].show(color(0, 255, 0));
  }
}
