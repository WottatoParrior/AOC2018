const numArray = require("./num.json");
let total = 0;
let x = true;
let count = 0;
const map = new Map();

while (x) {
  //n
  total += numArray[count]; //1
  if (map.has(total)) {
    //1
    console.log(total); //1
    x = false; //1
  }
  map.set(total, count.toString()); //1

  count++;
  if (count == numArray.length) {
    count = 0;
  }
}
