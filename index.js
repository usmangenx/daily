// get maximum number
// maximumNumber = (num1 , num2)   =>   {
//       if (num1>num2)
//         return num1;
//         return num2;
//        }
//       console.log(maximumNumber(6, 4));

// Check if landscape

// function isLandscape (width, height)  {
//     return (width > height) ;
// }
// console.log(isLandscape(240, 250));

// FizzBuzz Algorithm


function FizzBuzz(input) {
    if (typeof input !== 'number') return "not a number"
    if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz"
    if (input % 3 === 0) return "Fizz"
    if (input % 5 === 0) return "Buzz"
  return input
}
console.log(FizzBuzz(15))
