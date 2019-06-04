// Rover Object Goes Here
// ======================
let rover = [
  {
    name: 1,
    direction: "N",
    x: 1,
    y: 0,
    travelLog: [],
  },
  {
    name: 2,
    direction: "N",
    x: 3,
    y: 0,
    travelLog: [],
  },
  {
    name: 3,
    direction: "N",
    x: 3,
    y: 5,
    travelLog: [],
  },
]

let comString = '';

let grid = [
  [0, 0, 'X', 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 'X', 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 'X', 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 'X', 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 'X', 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 'X', 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 'X', 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 'X', 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 'X', 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 'X', 0, 0, 0, 0, 0, 0, 0],
]
// ======================
function turnLeft(){
  console.log("turnLeft was called!");
}

function turnRight(){
  console.log("turnRight was called!");
}

function moveForward(whichRover){
  console.log("moveForward was called")

  let moveDirection = whichRover.direction

  switch(moveDirection) {
    case 'N':
      if(typeof(grid[whichRover.x - 1]) === 'object' && grid[whichRover.x - 1][whichRover.y] !== 'R') {
          whichRover.x--;
          grid[whichRover.x][whichRover.y] = 'R'
          grid[whichRover.x + 1][whichRover.y] = 0
          return whichRover.x;
      } else if (typeof(grid[whichRover.x - 1]) === 'undefined') {
        console.log(`Be careful, you're already at the edge. Current position is [${whichRover.x}, ${whichRover.y}]`)
        return 
      } else if(grid[whichRover.x - 1][whichRover.y] === 'X') { 
        console.log(`You've reached an obstacle at position [${whichRover.x - 1}, ${whichRover.y}]`)
        return
      } else if(grid[whichRover.x - 1][whichRover.y] === 'R') { 
        console.log(`Careful! There's a rover at position [${whichRover.x - 1}, ${whichRover.y}] already.`)
        return 
      }
    case 'S':
      if(typeof(grid[whichRover.x + 1]) === 'object' && grid[whichRover.x + 1][whichRover.y] !== 'R') {
        whichRover.x++;
        grid[whichRover.x][whichRover.y] = 'R'
        grid[whichRover.x - 1][whichRover.y] = 0
        return whichRover.x;
      } else if (typeof(grid[whichRover.x + 1]) === 'undefined') {
        console.log(`Be careful, you're already at the edge. Current position is [${whichRover.x}, ${whichRover.y}]`)
        return 
      } else if(grid[whichRover.x + 1][whichRover.y] === 'X') { 
        console.log(`You've reached an obstacle at position [${whichRover.x + 1}, ${whichRover.y}]`)
        return
      } else if(grid[whichRover.x + 1][whichRover.y] === 'R') { 
        console.log(`Careful! There's a rover at position [${whichRover.x + 1}, ${whichRover.y}] already.`)
        return 
      }
    case 'E': 
      if(whichRover.y < 10 && typeof(grid[whichRover.x][whichRover.y + 1]) === 'number') {
        whichRover.y++;
        grid[whichRover.x][whichRover.y] = 'R'
        grid[whichRover.x][whichRover.y - 1] = 0
        return whichRover.y;
      } else if(grid[whichRover.x][whichRover.y + 1] === 'X') {
        console.log(`You've reached an obstacle at position [${whichRover.x}, ${whichRover.y + 1}]`)
        return
      } else if(grid[whichRover.x][whichRover.y + 1] === 'R') { 
        console.log(`Careful! There's a rover at position [${whichRover.x}, ${whichRover.y + 1}] already.`)
        return
      } else {
        console.log(`Be careful, you're already at the edge. Current position is [${whichRover.x}, ${whichRover.y}]`)
        return 
      }
    case 'W':
      if(whichRover.y > 0 && typeof(grid[whichRover.x][whichRover.y - 1]) === 'number') {
        whichRover.y--;
        grid[whichRover.x][whichRover.y] = 'R'
        grid[whichRover.x][whichRover.y + 1] = 0
        return whichRover.y;
      } else if(grid[whichRover.x][whichRover.y - 1] === 'X') {
        console.log(`You've reached an obstacle at position [${whichRover.x}, ${whichRover.y - 1}]`)
        return
      } else if(grid[whichRover.x][whichRover.y - 1] === 'R') { 
        console.log(`Careful! There's a rover at position [${whichRover.x}, ${whichRover.y - 1}] already.`)
        return
      } else {
        console.log(`Be careful, you're already at the edge. Current position is [${whichRover.x}, ${whichRover.y}]`)
        return 
      }
  }
}

function moveBackward(whichRover){
  console.log("moveBackward was called")

  let moveDirection = whichRover.direction

  switch(moveDirection) {
    case 'N':
      if(typeof(grid[whichRover.x + 1]) === 'object' && grid[whichRover.x + 1][whichRover.y] !== 'R') {
          whichRover.x++;
          grid[whichRover.x][whichRover.y] = 'R'
          grid[whichRover.x - 1][whichRover.y] = 0
          return whichRover.x;
      } else if (typeof(grid[whichRover.x + 1]) === 'undefined') {
        console.log(`Be careful, you're already at the edge. Current position is [${whichRover.x}, ${whichRover.y}]`)
        return 
      } else if(grid[whichRover.x + 1][whichRover.y] === 'X') { 
        console.log(`You've reached an obstacle at position [${whichRover.x + 1}, ${whichRover.y}]`)
        return
      } else if(grid[whichRover.x + 1][whichRover.y] === 'R') { 
        console.log(`Careful! There's a rover at position [${whichRover.x + 1}, ${whichRover.y}] already.`)
        return 
      }
    case 'S':
      if(typeof(grid[whichRover.x - 1]) === 'object' && grid[whichRover.x - 1][whichRover.y] !== 'R') {
        whichRover.x--;
        grid[whichRover.x][whichRover.y] = 'R'
        grid[whichRover.x + 1][whichRover.y] = 0
        return whichRover.x;
      } else if (typeof(grid[whichRover.x - 1]) === 'undefined') {
        console.log(`Be careful, you're already at the edge. Current position is [${whichRover.x}, ${whichRover.y}]`)
        return 
      } else if(grid[whichRover.x - 1][whichRover.y] === 'X') { 
        console.log(`You've reached an obstacle at position [${whichRover.x - 1}, ${whichRover.y}]`)
        return
      } else if(grid[whichRover.x - 1][whichRover.y] === 'R') { 
        console.log(`Careful! There's a rover at position [${whichRover.x - 1}, ${whichRover.y}] already.`)
        return 
      }
    case 'E': 
      if(whichRover.y < 10 && typeof(grid[whichRover.x][whichRover.y - 1]) === 'number') {
        whichRover.y--;
        grid[whichRover.x][whichRover.y] = 'R'
        grid[whichRover.x][whichRover.y + 1] = 0
        return whichRover.y;
      } else if(grid[whichRover.x][whichRover.y - 1] === 'X') {
        console.log(`You've reached an obstacle at position [${whichRover.x}, ${whichRover.y - 1}]`)
        return
      } else if(grid[whichRover.x][whichRover.y - 1] === 'R') { 
        console.log(`Careful! There's a rover at position [${whichRover.x}, ${whichRover.y - 1}] already.`)
        return
      } else {
        console.log(`Be careful, you're already at the edge. Current position is [${whichRover.x}, ${whichRover.y}]`)
        return 
      }
    case 'W':
      if(whichRover.y > 0 && typeof(grid[whichRover.x][whichRover.y + 1]) === 'number') {
        whichRover.y++;
        grid[whichRover.x][whichRover.y] = 'R'
        grid[whichRover.x][whichRover.y - 1] = 0
        return whichRover.y;
      } else if(grid[whichRover.x][whichRover.y + 1] === 'X') {
        console.log(`You've reached an obstacle at position [${whichRover.x}, ${whichRover.y + 1}]`)
        return
      } else if(grid[whichRover.x][whichRover.y + 1] === 'R') { 
        console.log(`Careful! There's a rover at position [${whichRover.x}, ${whichRover.y + 1}] already.`)
        return
      } else {
        console.log(`Be careful, you're already at the edge. Current position is [${whichRover.x}, ${whichRover.y}]`)
        return 
      }
  }
}

function turnRover(whichRover, direction) {
  let currentDirection = whichRover.direction

  if (direction !== currentDirection) {
    switch(direction) {
      case 'W':
        if(currentDirection === 'N') {
          turnLeft();
          whichRover.direction = 'W'
        } else if (currentDirection === 'S') {
          turnRight();
          whichRover.direction = 'W'
        } else {
          turnLeft()
          turnLeft()
          whichRover.direction = 'W'
        }
        return whichRover.direction
      case 'S':
          if(currentDirection === 'W') {
            turnLeft();
            whichRover.direction = 'S'
          } else if (currentDirection === 'E') {
            turnRight();
            whichRover.direction = 'S'
          } else {
            turnLeft()
            turnLeft()
            whichRover.direction = 'S'
          }
          return whichRover.direction
      case 'E':
          if(currentDirection === 'S') {
            turnLeft();
            whichRover.direction = 'E'
          } else if (currentDirection === 'N') {
            turnRight();
            whichRover.direction = 'E'
          } else {
            turnLeft()
            turnLeft()
            whichRover.direction = 'E'
          }
          return whichRover.direction
      case 'N':
          if(currentDirection === 'E') {
            turnLeft();
            whichRover.direction = 'N'
          } else if (currentDirection === 'W') {
            turnRight();
            whichRover.direction = 'N'
          } else {
            turnLeft()
            turnLeft()
            whichRover.direction = 'N'
          }
          return whichRover.direction
    }
    return whichRover.direction
  } else {
    console.log(`Rover is already facing ${direction}`)
  }
  return whichRover.direction
}

function turnBasedCommands() {
  let i = 1;
  let whichRover = rover[0];

  while(whichRover) {
    let comString = prompt('Enter commands for ' + whichRover.name);
    commands(whichRover, comString);
    whichRover = rover[i];
    i++;
    if(i === 3) {
      i = 0
    }
  }
}

function commands(whichRover, comString) {
  for (let letter of comString) {
    letter = letter.toUpperCase()
    if (letter === 'F') {
      moveForward(whichRover)
    } else if (letter === 'B') {
      moveBackward(whichRover)
    } else if (letter === 'N' || letter === 'S' || letter === 'E' || letter === 'W') {
      turnRover(whichRover, letter)
    } else {
      console.log(`Rover didn't move, "${letter}" is not a valid command.`)
      letter++
    }
    whichRover.travelLog.push('[' + whichRover.x, whichRover.y + ']')
    console.log(`Rover ${whichRover.name} has traveled ${whichRover.travelLog}`)
  }
}

turnBasedCommands()