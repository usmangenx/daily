let arry = [23, 30, 40, 54];
let arry2 = [50, 18, 16, 23];
let arry3 = [];
for (i = 0; i < arry.length; i++) {
  arry3[i] = arry[i];
}
for (i = 0; i < arry2.length; i++) {
  arry3[arry.length + i] = arry2[i];
}

console.log(arry3);
