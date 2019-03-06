const Bowling = require('./bowling');
const args = process.argv.slice(2);

const chalk = require('chalk');

const [frame] = args;

if (frame === undefined) {
    console.error('Please pass a frame, e.g. node example.js 2');
    process.exit(0);
}

console.log(`Frame ${frame}`);

