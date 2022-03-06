let n = Number(process.argv[3].split(" ")[0]);
let N = Number(process.argv[3].split(" ")[1]);
let inputWater = process.argv[4].split(" ");

let smallNum = false;
let bigNum = false;

for (let i = 0; i < inputWater.length; i++) {
  let curr = Number(inputWater[i]);
  if (curr === N) {
    console.log("Yes");
    break;
  } else if (curr < N) {
    smallNum = true;
  } else {
    bigNum = true;
  }

  if (bigNum === true && smallNum === true) {
    console.log("Yes");
    break;
  }
}

if (!(bigNum === true && smallNum === true)) console.log("No");
