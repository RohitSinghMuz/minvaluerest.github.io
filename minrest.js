let ans = document.getElementById("ans");

function minNumber(...mina) {
  let i = mina;
  let j = mina.length;
  minimum = i[j - 1];
  while (j--) {
    if (i[j] < minimum) {
      minimum = i[j];
    }
  }
  return minimum;
}
ans.innerText = minNumber(2, 3, 4, 5, 6, 7, 8, 66);
