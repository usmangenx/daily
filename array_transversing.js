let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let req = 5;
let index = undefined;

for (let i = 0; i < arry.length; i++) {
  if (arry[i] === req) {
    index = i;
  }
}
console.log(index);
