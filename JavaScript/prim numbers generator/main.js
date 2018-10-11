 function five () {
     let isPrime = false;
     let number = document.getElementById("five");
     if (number.innerHTML === '1') {
         number.innerHTML = '3';
         console.log(number.innerHTML);
     } else {
         findNextPrime(parseInt(number.innerHTML));
     }

     function findNextPrime(prime) {
         let counter =0;
         prime ++;
         isPrime = false;

         while (!isPrime) {
             if (prime %2 === 0) {
                 console.log('not prime' + prime)
                 prime ++;
             }

         for (var i=2; i < prime; i ++) {
             if (prime % i === 0) {
                 return isPrime = false;
             } else {
                 counter ++;
             }
             if (counter === (prime -2)) {
                 console.log(prime);
                 number.innerHTML = prime;
                 return isPrime = true;
             }
         }
         prime ++;
         }
     }
 }