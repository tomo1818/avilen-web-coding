// node problem1.js "A1-1 B1-2 C3-3" ... "An-1 Bn-2 An-3" で実行

let t = Number(process.argv[3])
let queryLen = process.argv.length;

for (let i = 4; i < queryLen; i++) {
  let curr = process.argv[i].split(" ");
  let a = Number(curr[0]);
  let b = Number(curr[1]);
  let c = Number(curr[2]);
  if (isNoAction(a, b, c)) console.log(0);
  else if (a === b && b === c) {
    if (a >= 3) console.log(3);
    else console.log(-1);
  } else if (a === b || b === c) {
    if ((c > a && a >= 2) || (a > c && c >= 2)) console.log(1);
    else if ((a > c && Math.abs(a - c) >= 2) || (c > a && Math.abs(a - c) >= 2))
      console.log(1);
    else console.log(-1);
  } else if (a === c) {
    if (b > a && a >= 2) console.log(1);
    else if (a > b && Math.abs(a - b) >= 2) console.log(1);
    else if (a > b && Math.abs(a - b) === 1 && (a - 3) >= 1) console.log(5);
    else console.log(-1);
  } else {
    let differenceAB = Math.abs(a - b);
    let differenceBC = Math.abs(b - c);
    if (a > c) {
      if (differenceAB >= differenceBC && b - (differenceBC + 1) >= 1) console.log(differenceBC + 1);
      else if (a - (differenceAB + 1) != c) console.log(differenceAB + 1);
      else console.log(-1);
    } else {
      if (differenceBC >= differenceAB && b - (differenceAB + 1) >= 1)
        console.log(differenceAB + 1);
      else if (c - (differenceBC + 1) != a) console.log(differenceBC + 1);
      else console.log(-1);
    }
  }
}

function isNoAction(a, b, c) {
  if (a > c && c > b) return true;
  else if (c > a && a > b) return true;
  else if (b > a && a > c) return true;
  else if (b > c && c > a) return true;
  else return false;
}
