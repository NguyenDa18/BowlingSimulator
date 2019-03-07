# Bowling Simulator

## Sources
- [Basic Bowling Rules](https://www.thoughtco.com/bowling-scoring-420895)
- [Node Bowling](https://www.npmjs.com/package/bowling)

## Running
1. Install NodeJS and NPM if you don't already have it on your system
2. Run `npm i` or `npm install`
3. To run main CLI program: `node main.js <player name> <rolls>`
4. To run unit tests: `npm test`

## Running with Docker
1. Make sure you have Docker installed
2. Run `docker build -t <bowling> .`
3. Check that image has been built: `docker images`
4. Run the image: `docker run -p 49160:8080 <bowling>`
5. All the unit tests will be run in a docker container :)

## Sample Rolls Input: Just copy+paste like so: `node main.js Bob <sample rolls input>`
1. 81 9- 9/ 71 9- x 90 70 x 71
2. x x x x x x x x x xxX (Perfect game)
3. x 7/
4. 23
5. 3/ x 6

# Bowling Info

## Bowl Scoring Basics
- One game: 10 frames, score range 0 - 300, each frame has two chances to known down 10 pins

### Strikes
- Knocking down all ten pins with first ball = strike (X)
- Worth 10 plus value of next two rolls
- Minimum = 10 (10 + 0 + 0)
- Maximum = 30 (10 + 10 + 10)
- E.g. 1 strike in first frame, 6 then 2 balls in second frame (10 + 6 + 2)

### Spares
- If two shots to knock down all pins = spare (/)
- Worth 10 plus value of next roll
- Maximum = 20 (10 + 10), spare then strike
- Minimum = 10 (10 + 0), spare then gutter ball

### Open Frames
- If after two shots at least one pin is standing
- Score is total number of pins knocked down