class GuessingGame {
    constructor() {
        this.minValue = 0;
        this.maxValue = 0;
        this.middle = 0;
    }

    setRange(minValue, maxValue) {
        this.minValue = minValue;
        this.maxValue = maxValue;
    }

    guess() {
        this.middle = Math.round((this.minValue + this.maxValue) / 2);
        return this.middle;
    }

    lower() {
        this.maxValue = this.middle;

    }

    greater() {
        this.minValue = this.middle;
    }
}

module.exports = GuessingGame;
