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
    return sum;
}
console.log("Task 2:", Fib(4000000));
