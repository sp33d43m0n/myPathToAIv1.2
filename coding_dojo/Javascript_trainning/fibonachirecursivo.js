function fib(n){
    if (n==0 || n==1){
        return n;
    }
    let rpta = fib(n-2)+fib(n-1);
    return rpta;
}

n = fib(5)
console.log(n)