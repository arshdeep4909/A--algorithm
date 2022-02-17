# Notes on p5 library

we have two function
function setup(){

}

function draw(){

}
now draw is a function that will keep looping. this can be used to create animations

createCanvas- creates a canvas and appends it to out HTML document.

------- In p5 we cannot assign variables using p5functions and variables before setup-----

the reason for this is the order in which things are run, the script is run before the
p5 library is loaded, so we have two options to solve this problem

1.  let n;
    function setup() {
    createCanvas(100, 100);
    n = random(100);
    }

if we declare variables before set up then we need to assign them values inside set up

OR

2.

new p5();

var boop = random(100);

function setup() {
createCanvas(100, 100);
}

function draw() {
background(255, 0, boop);
}

here we did not assign values inside the function but we have called the p5 library
right before we defined the variable, this is called on demand global mode.
so, we don't get an error

if we use this then we get a warning that p5 is imported twice

# A--algorithm

Install the p5.js library, can reference to the file online using link

<script src="https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.js"></script>

- the first thing to do is to create a 2 Dimensional grid ( 2D array)

2D array

- a normal array is just an array with certain numbrer of columns
- a two dimensional array is just an array where each cols have a certain
  number or arrays which we can call rows hence a two dimensional rows

for (let i = 0; i < cols; i++) {
grid[i] = new Array(rows);

    // for each gird[i] (for each cols)
    // define an array with ceratin number of rows

}

Spot()
-this function makes every cell in the grid / every spot into an object

- this object will then define the cost associated with each cell.
- now the spot function is an object with a f, g and h value

closed set - possibly an array that contains the nodes that are already evaluated
open set - possibly an array that contains the nodes that still needs to be evaluated
openSet and closedSet can either be a map, array or list
here we are using them as an array but we can use whatever data structure that we wish to use
algorithm is finished when open set is empty OR we have reached the destination

-- openSet has only one node: which is the starting node
-- closedSet starts as empty

# loop funcitonality of algorithm

1.  So in set up we add a start point and push it openSet.
    so we only have one node in openSet then we evaluate it once it is done we remove
    it from OpenSet and then we push it to closedSet
2.  the next step is to add neighbours of that node to the openSet
    once we add neighbors then we need to define the g scores and then keep looping
    until we reach the end
3.  defining g scores as we are looping

G SCORE FUNCTIONALITY

- we evaluate the current node and then we add neighbors
- we evaluate g scores for all the neighbors and remember them
- when we are assigning g scores we can have different situations that we have to
  keep in mind to make sure that we assign the shortest g scores to each nodes

1. if a node is already in the closed Set then we do not need to compare as we have already found the most efficient path to that node
2. if it is not in the closedSet then

A. it can either be in an openset or it can be in neither of those

if it is in neither one then we just give it the g score and then we add it to
the openset( we do this to remember that we have given it a gscore and that we need
to comapre it next time we loop over)

B. it can be in openSet
this means it has a previous g score so we need to compare and assign it the lowest gscore.

# Looping through array backwards

function removeFromArray(arr, element) {
// loop through array backward so we do not skip an element
for (let i = arr.length; i >= 0; i--) {
if (arr[i] === element) {
arr.splice(i, 1);
}
}
}

lets say we delete the element 6; so the next time the loop will run for i =7;
but the element that was at 7 is now at 6 so we can miss checking that element.
