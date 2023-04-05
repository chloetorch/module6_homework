function defineNumber(num) {
   if (num <= 1 || num > 1000) {
      return 'Данные неверны';
   }
   if (num == 2) {
      return 'Число простое';
   }
   for (let i = 2; i <= num; i++) {
      if (num % i == 0) {
         return 'Число составное';
      } else {
         return 'Число простое';
      }
   }
}

console.log(defineNumber(13));