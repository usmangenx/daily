function changeValue() {
  let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let newEl = document.getElementById("new").value;
  let position = document.getElementById("posi").value;

  for (let i = arry.length - 1; i >= 0; i--) {
    if (i >= position) {
      arry[i + 1] = arry[i];
      arry[i] = newEl;
    }
  }
  console.log(arry);
}
