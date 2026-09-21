const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//偶数だけを取り出し、それぞれを三倍し、合計する
//配列メソッドを使うことで、ループなどを使うよりスマートになるかも
function sumOfTripleEven(array) {
  //メソッドチェーン
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((total, num) => total + num, 0);
}

console.log(sumOfTripleEven(numbers));

// forを使う前に目的に合う配列メソッドを検討
//すべてのダッシュを削除し、ダッシュ以降の単語を大文字にする。最後にそれらを連結
function camelize(text) {
  return text
    .split("-")
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word[0].toUpperCase() + word.slice(1).toLowerCase(),
    )
    .join("");
}

console.log(camelize("my-short-string"));

function filterRange(array, a, b) {
  return array.filter((num) => a <= num && num <= b);
}

let noRange = [5, 3, 8, 1];
console.log(filterRange(noRange, 3, 7));
console.log(noRange);

function filterRangeInPlace(array, a, b) {
  for (let i = 0; i < array.length; i++) {
    if (a > array[i] || array[i] > b) {
      array.splice(i, 1);
      i--;
    }
  }
}

let noRange2 = [5, 3, 8, 1];
filterRangeInPlace(noRange2, 3, 7)
console.log(noRange2);

let arr = [5, 2, 1, -10, 8];
console.log(arr.sort((a, b) => b - a));

function copySorted(array) {
    return array.slice().sort();
}

let original = ["HTML", "JavaScript", "CSS"];
let copy = copySorted(original);
console.log(copy);