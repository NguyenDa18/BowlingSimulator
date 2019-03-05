export class Bowling {
    constructor() {
        this.maxPins = 10;
        this.maxFrames = 10;
        this.currentFrame = 0;

        this.frames = [];
        this.frameScores = [0,0,0,0,0,0,0,0,0,0];
        this.startFrame();
    }

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
}