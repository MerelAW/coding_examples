function sumFibs(num) {
  let first = 0;
  let second = 1;
  let sum = 0;
  while (second <= num) {
    if (second % 2 !== 0) {
      sum += second;
    }
    second += first;
    first = second - first;
  }

  return sum;
}

console.log(sumFibs(10));
console.log(sumFibs(1000));
