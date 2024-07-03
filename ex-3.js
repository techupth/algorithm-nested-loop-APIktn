// เริ่มเขียนโค้ดตรงนี้
function multiplicationTable(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      result += (i * j).toString().padStart(4, " ");
    }
    result += "\n";
  }
  return result;
}

const fiveTable = multiplicationTable(5);
console.log(fiveTable);
