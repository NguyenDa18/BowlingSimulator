// requires separate install of `async` and `text-table` modules

const chalk = require("chalk")
const lib = require('./bowling')
const async = require('async')
const tt = require('text-table')
const progression = []
const args = process.argv.slice(2);

const [playerName] = args
if (/\d/.test(playerName) || playerName.indexOf('x') > -1 ) {
  console.error('Name cannot have a number')
  process.exit(0)
}
args.shift();
const games = parseArgs();
progression.push(games)

function parseArgs() {
  let games = []
  args.forEach(arg => {
    arg = JSON.stringify(arg)
    arg = JSON.parse(arg)
    games.push(arg)
  })
  return games
}

let scoreboard = [
  ['  1', '  2', '  3', '  4', '  5', '  6', '  7', '  8', '  9', ' 10'],
  null,
  null
]

const scoreboardFmt = {
  align: ['r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r']
}

async.eachSeries(progression, function (state, cb) {
  var thruRoll = lib(state)

  scoreboard[1] = thruRoll.map(function (frame) {
    return frame.outcome || ''
  })

  scoreboard[2] = thruRoll.map(function (frame) {
    return frame.cumulative || ''
  })
  let output = tt(scoreboard, scoreboardFmt)
  process.stdout.write('\x1B[2J\n')
  process.stdout.write(output)
  process.stdout.write('\n')
  setTimeout(cb, 400)
}, function () {
  console.info(chalk.magenta(`
  _....._
  .;;'      '-.
.;;: _         '.
/;;:'(_)          \
|;;:'_     _        |
|;;:(_)   (_)       |
|;;::.              |
\;;::.            /
';;::.         .'
  '-;;:..  _.-'
jgs       '''''

------------------------------------------------
This ASCII pic can be found at
https://asciiart.website//index.php?art=sports%20and%20activities/bowling
  `))
  console.log(chalk.blue(`${playerName.toUpperCase()}'s game is done`))
})
