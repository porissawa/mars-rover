/* eslint-disable no-console */
const grid = [
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
];

class Rover {
  constructor(name, x, y, direction = 'N') {
    this.name = name;
    this.direction = direction.toUpperCase();
    this.x = x;
    this.y = y;
    this.travelLog = [];
  }

  // eslint-disable-next-line class-methods-use-this
  turnLeft() {
    console.log('turnLeft was called!');
  }

  // eslint-disable-next-line class-methods-use-this
  turnRight() {
    console.log('turnRight was called!');
  }

  moveForward() {
    console.log('moveForward was called!');
    const moveDirection = this.direction;

    switch (moveDirection) {
      case 'N':
        if (typeof (grid[this.x - 1]) === 'object' && grid[this.x - 1][this.y] !== 'R') {
          this.x -= 1;
          grid[this.x][this.y] = 'R';
          grid[this.x + 1][this.y] = 0;
        } else if (typeof (grid[this.x - 1]) === 'undefined') {
          console.log(`Be careful, you're already at the edge. Current position is [${this.x}, ${this.y}]`);
        } else if (grid[this.x - 1][this.y] === 'X') {
          console.log(`You've reached an obstacle at position [${this.x - 1}, ${this.y}]`);
        } else if (grid[this.x - 1][this.y] === 'R') {
          console.log(`Careful! There's a rover at position [${this.x - 1}, ${this.y}] already.`);
        }
        break;
      case 'S':
        if (typeof (grid[this.x + 1]) === 'object' && grid[this.x + 1][this.y] !== 'R') {
          this.x += 1;
          grid[this.x][this.y] = 'R';
          grid[this.x - 1][this.y] = 0;
        } else if (typeof (grid[this.x + 1]) === 'undefined') {
          console.log(`Be careful, you're already at the edge. Current position is [${this.x}, ${this.y}]`);
        } else if (grid[this.x + 1][this.y] === 'X') {
          console.log(`You've reached an obstacle at position [${this.x + 1}, ${this.y}]`);
        } else if (grid[this.x + 1][this.y] === 'R') {
          console.log(`Careful! There's a rover at position [${this.x + 1}, ${this.y}] already.`);
        }
        break;
      case 'E':
        if (this.y < 10 && typeof (grid[this.x][this.y + 1]) === 'number') {
          this.y += 1;
          grid[this.x][this.y] = 'R';
          grid[this.x][this.y - 1] = 0;
        } else if (grid[this.x][this.y + 1] === 'X') {
          console.log(`You've reached an obstacle at position [${this.x}, ${this.y + 1}]`);
        } else if (grid[this.x][this.y + 1] === 'R') {
          console.log(`Careful! There's a rover at position [${this.x}, ${this.y + 1}] already.`);
        } else {
          console.log(`Be careful, you're already at the edge. Current position is [${this.x}, ${this.y}]`);
        }
        break;
      case 'W':
        if (this.y > 0 && typeof (grid[this.x][this.y - 1]) === 'number') {
          this.y -= 1;
          grid[this.x][this.y] = 'R';
          grid[this.x][this.y + 1] = 0;
        } else if (grid[this.x][this.y - 1] === 'X') {
          console.log(`You've reached an obstacle at position [${this.x}, ${this.y - 1}]`);
        } else if (grid[this.x][this.y - 1] === 'R') {
          console.log(`Careful! There's a rover at position [${this.x}, ${this.y - 1}] already.`);
        } else {
          console.log(`Be careful, you're already at the edge. Current position is [${this.x}, ${this.y}]`);
        }
        break;
      default:
        break;
    }
  }

  moveBackward() {
    console.log('moveBackward was called');
    const moveDirection = this.direction;

    switch (moveDirection) {
      case 'N':
        if (typeof (grid[this.x + 1]) === 'object' && grid[this.x + 1][this.y] !== 'R') {
          this.x += 1;
          grid[this.x][this.y] = 'R';
          grid[this.x - 1][this.y] = 0;
        } else if (typeof (grid[this.x + 1]) === 'undefined') {
          console.log(`Be careful, you're already at the edge. Current position is [${this.x}, ${this.y}]`);
        } else if (grid[this.x + 1][this.y] === 'X') {
          console.log(`You've reached an obstacle at position [${this.x + 1}, ${this.y}]`);
        } else if (grid[this.x + 1][this.y] === 'R') {
          console.log(`Careful! There's a rover at position [${this.x + 1}, ${this.y}] already.`);
        }
        break;
      case 'S':
        if (typeof (grid[this.x - 1]) === 'object' && grid[this.x - 1][this.y] !== 'R') {
          this.x -= 1;
          grid[this.x][this.y] = 'R';
          grid[this.x + 1][this.y] = 0;
        } else if (typeof (grid[this.x - 1]) === 'undefined') {
          console.log(`Be careful, you're already at the edge. Current position is [${this.x}, ${this.y}]`);
        } else if (grid[this.x - 1][this.y] === 'X') {
          console.log(`You've reached an obstacle at position [${this.x - 1}, ${this.y}]`);
        } else if (grid[this.x - 1][this.y] === 'R') {
          console.log(`Careful! There's a rover at position [${this.x - 1}, ${this.y}] already.`);
        }
        break;
      case 'E':
        if (this.y < 10 && typeof (grid[this.x][this.y - 1]) === 'number') {
          this.y -= 1;
          grid[this.x][this.y] = 'R';
          grid[this.x][this.y + 1] = 0;
        } else if (grid[this.x][this.y - 1] === 'X') {
          console.log(`You've reached an obstacle at position [${this.x}, ${this.y - 1}]`);
        } else if (grid[this.x][this.y - 1] === 'R') {
          console.log(`Careful! There's a rover at position [${this.x}, ${this.y - 1}] already.`);
        } else {
          console.log(`Be careful, you're already at the edge. Current position is [${this.x}, ${this.y}]`);
        }
        break;
      case 'W':
        if (this.y > 0 && typeof (grid[this.x][this.y + 1]) === 'number') {
          this.y += 1;
          grid[this.x][this.y] = 'R';
          grid[this.x][this.y - 1] = 0;
        } else if (grid[this.x][this.y + 1] === 'X') {
          console.log(`You've reached an obstacle at position [${this.x}, ${this.y + 1}]`);
        } else if (grid[this.x][this.y + 1] === 'R') {
          console.log(`Careful! There's a rover at position [${this.x}, ${this.y + 1}] already.`);
        } else {
          console.log(`Be careful, you're already at the edge. Current position is [${this.x}, ${this.y}]`);
        }
        break;
      default:
        break;
    }
  }

  turnRover(direction) {
    const currentDirection = this.direction;

    if (direction !== currentDirection) {
      switch (direction) {
        case 'W':
          if (currentDirection === 'N') {
            this.turnLeft();
            this.direction = 'W';
          } else if (currentDirection === 'S') {
            this.turnRight();
            this.direction = 'W';
          } else {
            this.turnLeft();
            this.turnLeft();
            this.direction = 'W';
          }
          break;
        case 'S':
          if (currentDirection === 'W') {
            this.turnLeft();
            this.direction = 'S';
          } else if (currentDirection === 'E') {
            this.turnRight();
            this.direction = 'S';
          } else {
            this.turnLeft();
            this.turnLeft();
            this.direction = 'S';
          }
          break;
        case 'E':
          if (currentDirection === 'S') {
            this.turnLeft();
            this.direction = 'E';
          } else if (currentDirection === 'N') {
            this.turnRight();
            this.direction = 'E';
          } else {
            this.turnLeft();
            this.turnLeft();
            this.direction = 'E';
          }
          break;
        case 'N':
          if (currentDirection === 'E') {
            this.turnLeft();
            this.direction = 'N';
          } else if (currentDirection === 'W') {
            this.turnRight();
            this.direction = 'N';
          } else {
            this.turnLeft();
            this.turnLeft();
            this.direction = 'N';
          }
          break;
        default:
          break;
      }
    } else {
      console.log(`Rover is already facing ${direction}`);
    }
    return this.direction;
  }

  commands(comString) {
    // eslint-disable-next-line no-restricted-syntax
    for (let letter of comString) {
      letter = letter.toUpperCase();
      if (letter === 'F') {
        this.moveForward();
      } else if (letter === 'B') {
        this.moveBackward();
      } else if (letter === 'N' || letter === 'S' || letter === 'E' || letter === 'W') {
        this.turnRover(letter);
      } else {
        console.log(`Rover didn't move, "${letter}" is not a valid command.`);
        letter += 1;
      }
      this.travelLog.push(`[${this.x}, ${this.y}]`);
      console.log(`Rover ${this.name} has traveled ${this.travelLog}`);
    }
  }
}

const r1 = new Rover('Rover1', 5, 5, 'E');
console.log(`Here's your starter rover. Feel free to create more!\n${JSON.stringify(r1)}`);
