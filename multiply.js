function Mult(limit) {
    let sum = 0;
    for (let i = 3; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
	console.log("Task 1:", Mul(1000));
    return sum;
}

