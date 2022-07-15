var number = 20;
var sum = 0;
function fibonacci(num) {
    if (num <= 1)
        return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}
fibonacci(number);
sum += fibonacci(number);
console.log("tổng dãy số fibonacci là " + sum);
