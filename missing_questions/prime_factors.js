function primeFactors(n) {
  if (n === 0 || n === 1) {
    return "No prime factors";
  }

  let factors = [];

  let i = 2;

  while (i * i <= n) {
    while (n % i === 0) {
      factors.push(i);
      n = Math.floor(n / i);
    }

    i++;
  }

  if (n > 1) {
    factors.push(n);
  }

  return factors.join(" ");
}
