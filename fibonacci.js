function Fib(limit) {
    let sum = 0;
    let prev = 1;
    let curr = 2;
    while (curr <= limit) {
        if (curr % 2 === 0) {
            sum += curr;
        }
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
	console.log("Task 2:", sumEvenFibonacci(4000000));
    return sum;
}
