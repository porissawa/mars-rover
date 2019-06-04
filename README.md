# Mars Rover

### How to use it
1. Clone the repository to your computer.
2. Open index.html in your preferred browser and open up the console to see it running.
3. The program invokes the turnBasedCommands function by default (as per l294). This prompts an user input that will be used to control each of the three rovers, one at a time.
4. The function accepts the following arguments:
  'F' to move the rover forward, 'B' to move it backwards, 'E', 'W', 'N', 'S' to turn the rover East, West, North or South, respectively.
5. Commands can be issued as a single string, such as FWFFSFFEB (forward, turn west, forward, forward, turn south, forward, forward, turn east, backward).
6. The rovers will move over a 10x10 grid with some obstacles, marked 'X' in the grid variable (l29). If it hits an obstacle, another rover or tries to move over the edge, the program will log the attempt on the rover's travelLog property and the rover will stand still.
7. Another way to control the rovers is with the commands(rover, comString) function. For instance, commands(rover[0], 'ff') will move Rover 1 forward twice.
8. Have fun!
