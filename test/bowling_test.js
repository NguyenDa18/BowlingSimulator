const chai = require('chai');
const assert = chai.assert;
const Bowling = require('../bowling');

describe('Bowling', function() {
  describe('Check game scored correctly', function() {
    it('should be able to score game with all zeros', function() {
        const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        const bowling = new Bowling();
        rolls.forEach(roll => bowling.roll(roll));
    });
  });
});