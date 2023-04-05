function showNumbers(a, b) {
   let firstNumber = a;

   let intervalId = setInterval(function () {
      console.log(firstNumber);
      if (firstNumber == b) {
         clearInterval(intervalId);
      }
      firstNumber++;
   }, 1000);
}

showNumbers(5, 15);