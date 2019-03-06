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

    incrementScore(pins) {
        if (this.currentFrame > this.maxFrames) return;
        this.frameScores[this.currentFrame - 1] += pins;
    }

    scoreStrike() {
        this.frames[this.currentFrame - 1] = 'X';
        this.applyStrikeBonus(this.maxPins);
        this.applySpareBonus(this.maxPins);
        this.incrementFrame();
    }

    scoreFirstRoll(pins) {
        this.remainingPins = this.remainingPins - pins;
        this.applySpareBonus(pins);
        this.applyStrikeBonus(pins);
        this.incrementFrame();
    }

    scoreSpare(pins) {
        this.frames[this.currentFrame - 1] = '/';
        this.applyStrikeBonus(pins);
        this.incrementFrame();
    }

    scoreOpenFrame(pins) {
        this.frames[this.currentFrame - 1] = (this.maxPins - this.remainingPins) + pins;
        this.applyStrikeBonus(pins);
        this.incrementFrame();
    }

    applySpareBonus(pins) {
        // pins on first roll after spare are counted twice (on frame of spare)
        if (this.frames[this.currentFrame - 2] === '/') this.frameScores[this.currentFrame - 2] += pins;
    }

    applyStrikeBonus(pins) {
        // two rolls after strike are counted twice (on frame of spare)
        if (this.frames[this.currentFrame - 3] === 'X' &&
            this.frames[this.currentFrame - 2] === 'X' &&
            this.frameRoll === 1 &&
            this.currentFrame <= this.maxFrames + 2
        ) {
            this.frameScores[this.currentFrame - 3] += pins;
        }
        if (this.frames[this.currentFrame - 2] === 'X' && this.currentFrame <= this.maxFrames + 1) this.frameScores[this.currentFrame - 2] += pins;
    }

    isGameOver() {
        if (this.currentFrame <= this.maxFrames) return false;
        if (this.frames[this.maxFrames - 1] !== 'X' && this.frames[this.maxFrames - 1] !== '/') return true

        // Spare in last frame gets no more than bonus roll
        if (this.frames[this.maxFrames - 1] === '/' && this.frameRoll > 1) return true;

        // Bonus roll after spare in last frame may get strike but then game ends without new roll
        if (this.frames[this.maxFrames - 1] === '/' && this.frames[this.maxFrames] === 'X') return true;

        if (this.frames[this.maxFrames - 1] === 'X') {
            // if the first bonus roll is not a strike then finish the bonus frame
            if (this.frames[this.maxFrames] !== 'X' && this.currentFrame > this.maxFrames + 1) return true;
      
            if (this.frames[this.maxFrames] === 'X') {
              // if the second bonus roll is a strike, but was still used, the game is over
              if (this.frames[this.maxFrames + 1] !== 'X' && this.frameRoll > 1) return true;
              // if the second bonus roll is a strike the game is over
              if (this.frames[this.maxFrames + 1] === 'X') return true;
            }
        }

        return false
    }

    roll(pins) {
        if (pins < 0) throw new Error('Negative roll is invalid');
        if (pins > this.remainingPins) throw new Error(`Only ${this.remainingPins} remaining`);
        if (this.isGameOver()) throw new Error('Cannot roll after game is over');
        this.incrementScore(pins);

        if (this.frameRoll === 1) {
            if (pins === this.maxPins) {
              this.scoreStrike();
              this.startFrame();
            } 
            else { this.scoreFirstRoll(pins); }
        } 
        else {
            if (pins === this.remainingPins) { this.scoreSpare(pins); } 
            else { this.scoreOpenFrame(pins); }
            this.initializeFrame();
        }
    }

    score() {
        if (!this.isGameOver()) throw new Error('Score cannot be taken until game is finished');
        return this.frameScores.reduce((total, num) => (total + num));
    }

}

module.exports = Bowling;