/* SLOT MACHINE */

class SlotMachine {
  constructor() {
    // Each time an instance of slotMachine is created, its property coins is initialized
    this.coins = 0;
  }

  randomBoolean() {
    // Random value between 0..1
    return Math.random() >= 0.5;
  }

  play() {
    this.coins++;
    const slots = [this.randomBoolean(), this.randomBoolean(), this.randomBoolean()];
    console.log(slots)
    // Check if every element of array is truthy
    if(slots.every( (elem) => elem )) {
      // True and reset
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log('Good luck next time!!');
    }
  }
}

const machine1 = new SlotMachine();

machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"