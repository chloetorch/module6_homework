const multiplication = (x, n) => {
   let number = x;
   for (i = 1; n > i; i++) {
      number *= number;
   } return number;
}
console.log(multiplication(4, 2))