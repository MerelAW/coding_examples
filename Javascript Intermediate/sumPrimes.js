function sumPrimes(num) {
  let sum = 0;
  for(let prime = 2; prime<=num; prime++){
    let isPrime = true;
    for (let p = 2; p<prime; p++){
      if(prime%p == 0){
        isPrime = false;
        break;
      }
    }
    if(isPrime){
      sum+=prime;
      isPrime = false;
    }
  }
  console.log(sum);
  return sum;
}

sumPrimes(10);
sumPrimes(977);
