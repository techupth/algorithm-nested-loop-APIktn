// เริ่มเขียนโค้ดตรงนี้
function printStar(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result += "* ";
    }
    result += "\n";
  }
  return result;
}

const fiveStar = printStar(5);
console.log(fiveStar);
