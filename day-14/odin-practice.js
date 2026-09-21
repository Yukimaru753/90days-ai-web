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

function filterRange(array,a ,b) {
    return array.filter((num) => a <= num && num <= b);
}

let noRange = [5, 3, 8, 1];
console.log(filterRange(noRange, 3, 7));
