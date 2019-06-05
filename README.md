# Mars Rover

### How to use it
1. Clone the repository to your computer.
2. Open index.html in your preferred browser and open up the console to see it running.
3. The program starts with a single rover (named Rover1). You can create more rovers by instantiating the Rover class, which accepts 4 arguments: Name, X Position (on a 10x10 grid), Y Position and Initial Direction the rover faces (which defaults to 'N', North, when not specified).
4. You can move your rovers by calling the commands method. Commands accepts a string with the following possibilities: 'F' moves the rover forward by one space, 'B' moves it backward by one space, 'N', 'E', 'S' and 'W' turns it to the north, east, south and west, respectively. Any other characters will log as 'Not a possible command' to the console.
5. When more than one rover is present, if they run into each other, there will be a warning on the console telling so and the rover will not take that movement.
6. You will always see the path traveled by the rover through its travelLog property, which accumulates all attempted movements and is logged after each command character.
7. By default, there the whole third column on the grid is filled with obstacles. You can add more or move them by changing the 'X' values for 0 (and vice-versa). Same as finding another rover, it will not move and log the event to your console.
8. In case you reach one of the four edges of the grid, the rover will also not move and tell you an edge has been reached.

Have fun!
