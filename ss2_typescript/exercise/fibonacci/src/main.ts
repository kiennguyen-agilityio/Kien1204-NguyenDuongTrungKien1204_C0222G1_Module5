let number: number = 20;
let sum: number = 0;

function fibonacci(num: number): number {
    if (num <= 1)
        return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

fibonacci(number)
sum += fibonacci(number)
console.log( "tổng dãy số fibonacci là " + sum);