// เริ่มเขียนโค้ดตรงนี้
function printPattern(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result += j + " ";
    }
    result += "\n";
  }
  return result;
}

const fiveRow = printPattern(5);
console.log(fiveRow);
