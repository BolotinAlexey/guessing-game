class GuessingGame {
  constructor() {
    this.min;
    this.max;
    this.current;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.current = Math.ceil((this.max - this.min) / 2 + this.min);
    console.log(
      "max:" + this.max,
      "min:" + this.min,
      "current:" + this.current
    );
    return this.current;
  }

  lower() {
    this.max = this.current;
    console.log("lower");
  }

  greater() {
    this.min = this.current;
    console.log("greater");
  }
}

module.exports = GuessingGame;
