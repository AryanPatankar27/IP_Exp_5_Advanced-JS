function calculator(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        switch (operation) {
            case '+':
                resolve(num1 + num2);
                break;
            case '-':
                resolve(num1 - num2);
                break;
            case '*':
                resolve(num1 * num2);
                break;
            case '/':
                if (num2 === 0) {
                    reject('Error: Division by zero is not allowed.');
                } else {
                    resolve(num1 / num2);
                }
                break;
            default:
                reject('Error: Invalid operator.');
        }
    });
}


calculator(10, 5, '+')
    .then(result => console.log('Result:', result)) 
    .catch(error => console.log(error));

calculator(10, 0, '/')
    .then(result => console.log('Result:', result))
    .catch(error => console.log(error)); 

calculator(10, 5, '%')
    .then(result => console.log('Result:', result))
    .catch(error => console.log(error)); 
