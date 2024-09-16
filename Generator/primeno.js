function* primeGenerator(limit) {
    for (let num = 2; num <= limit; num++) {
        if (isPrime(num)) {
            yield num;
        }
    }
}

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}


const primeGen = primeGenerator(20);
for (let prime of primeGen) {
    console.log(prime); 
}
