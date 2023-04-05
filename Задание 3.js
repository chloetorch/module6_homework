function numberSummary(number1) {
   return function (number2) {
      return number1 + number2;
   }
}
const sum = numberSummary(3)(5);
console.log(sum);
numberSummary();

// const numberSummary = () => {
//    const sum = (a, b) => a + b;
//    return sum;
// };
// const sum = numberSummary();
// sum(1, 5);


