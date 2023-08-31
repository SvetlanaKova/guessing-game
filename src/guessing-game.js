class GuessingGame {
    arr = []
    min;
    max;
    constructor() {}

    setRange(min, max) {
        this.min = min
        this.max = max
        for (let i = min; i <= max; i++) {
            this.arr.push(i);
        }
    }

    guess() {
        let middle = Math.round((this.max  + this.min) / 2)
        return middle
    }

    lower() {
        let middle = Math.round((this.max  + this.min) / 2)
        this.max = middle
    }

    greater() {
        let middle = Math.round((this.max  + this.min) / 2)
        this.min = middle
    }
}

module.exports = GuessingGame;
