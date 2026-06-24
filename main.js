function fib(n) {

    let cache = {}

    return fib2(n)

    function fib2(n){

        if (cache[n]){
            return cache[n]
        }else{
            //console.log(n)
            if (n < 2) return n;

            cache[n] = fib2(n-1)+fib2(n-2)

            return cache[n]

        }


    }


}


console.log(fib(20))