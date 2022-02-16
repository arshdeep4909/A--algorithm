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
