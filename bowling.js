class Bowling {
    constructor() {
        this.maxPins = 10;
        this.maxFrames = 10;
        this.currentFrame = 0;

        this.frames = [];
        this.frameScores = [0,0,0,0,0,0,0,0,0,0];
        this.startFrame();
    }

    // Add extra properties following start of game rules
    startFrame() {
        this.frameRoll = 1;
        this.remainingPins = this.maxPins;
        this.currentFrame = this.currentFrame++;
    }

    incrementFrame() {
        this.frameRoll = this.frameRoll++;
    }

    incrementScore() {
        if (this.currentFrame > this.maxFrames) return;
        this.frameScores[this.currentFrame - 1] += pins;
    }

    scoreStrike() {
        this.frames[this.currentFrame - 1] = 'X';
        this.incrementFrame();
    }

    scoreSpare() {
        this.frames[this.currentFrame - 1] = 'S';
        this.incrementFrame();
    }

    isGameOver() {
        if (this.currentFrame <= this.maxFrames) return false;
        if (this.frames[this.maxFrames - 1] !== 'X' && this.frames[this.maxFrames - 1] !== 'S') return true

        return false
    }

    roll(numPins) {
        if (numPins < 0) throw new Error('Negative roll is invalid!');
        if (numPins > this.remainingPins) throw new Error(`Only ${this.remainingPins} remaining`);
        if (this.isGameOver()) throw new Error('Cannot roll after game is over');
        this.incrementScore(numPins);
    }

}

module.exports = Bowling;