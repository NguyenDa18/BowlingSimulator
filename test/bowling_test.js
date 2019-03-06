const chai = require('chai');
const assert = chai.assert;
const Bowling = require('../bowling');
const expect = require('chai').expect;
const should = require('chai').should();

describe('Bowling', function() {
  describe('Check game is scored correctly', function() {
    it('should be able to score game with all zeros', function() {
        const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const bowling = new Bowling();
        rolls.forEach(roll => bowling.roll(roll));
        expect(bowling.score()).to.equal(0);
    });

    it('should be able to score a game with no strikes or spares', () => {
      const rolls = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
      const bowling = new Bowling();
      rolls.forEach((roll) => { bowling.roll(roll); });
      expect(bowling.score()).to.equal(90);
    });
  });
});

describe('Logic check', function() {
  it('Should not be able to count negative points', function() {
    const bowling = new Bowling();
    const err = new Error('Negative roll is invalid');
    expect(() => { bowling.roll(-1); }).to.throw(err);

  })
});