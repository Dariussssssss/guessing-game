class GuessingGame {
    constructor() {
        this.minValue = 0;
        this.maxValue = 0;
        this.middle = 0;
    }

    setRange(minValue, maxValue) {
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.middle = Math.round((minValue + maxValue) / 2);
    }

    guess() {
        return this.middle;
    }

    lower() {
        this.maxValue = this.middle;
        this.middle = Math.round((this.minValue + this.maxValue) / 2);

    }

    greater() {
        this.minValue = this.middle;
        this.middle = Math.round((this.minValue + this.maxValue) / 2);
    }
}

module.exports = GuessingGame;
