const numbers = [1, 2, 3, 4, 5];

const squareIterator = {
    numbers,
    currentIndex: 0,
    next() {
        if (this.currentIndex < this.numbers.length) {
            const value = this.numbers[this.currentIndex] ** 2;
            this.currentIndex++;
            return { value, done: false };
        } else {
            return { done: true };
        }
    }
};


let result = squareIterator.next();
while (!result.done) {
    console.log(result.value); 
    result = squareIterator.next();
}
