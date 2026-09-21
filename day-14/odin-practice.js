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
filterRangeInPlace(noRange2, 3, 7);
console.log(noRange2);

let arr = [5, 2, 1, -10, 8];
console.log(arr.sort((a, b) => b - a));

function copySorted(array) {
  return array.slice().sort();
}

let original = ["HTML", "JavaScript", "CSS"];
let copy = copySorted(original);
console.log(copy);

function shuffle(array) {
  //配列a[1, 2, 3, ...,n]をランダムに並び替える
  //   aのコピーbを用意
  // FOR
  // [0, 2, 3, ...,n-1]の数字をいれた配列cを用意
  // FOREND
  // FOR
  // bのi番目をaの何番目に入れるかをcの配列からランダムにとりだした数字で決める
  // cからランダムに数字を一つ取り出し、取り出した数字はcから消去
  // aの取り出した数字番目をbのi番目に置き換え
  // FOREND

  let indexBox = [];
  let copyBox = array.slice();
  for (let i = 0; i < array.length; i++) {
    indexBox.push(i);
  }

  for (let i = 0; i < array.length; i++) {
    //index:idnexBox内のランダムな数字
    let num = Math.floor(Math.random() * indexBox.length);
    //spliceで一度出た数字は削除される
    let index = indexBox.splice(num, 1)[0];
    array[index] = copyBox[i];
  }
}

let originalArray = [1, 2, 3];
shuffle(originalArray);
console.log(originalArray);

function unique(array) {
  //配列内から同じ内容を削除して、新たな一意な配列を作る
  // WHILE
  // 元の配列の中身がなくなったら終了
  // 元の配列の先頭を新配列にpushする
  // 元の配列の先頭を消去
  // WHILE
  // 元の配列に削除した先頭と一致している項があった場合消去
  // WHILEEND
  // WHILEEND
  // 新配列を返す

  // RETURN
  // 一意な新配列 uniqueArr

  // parameter
  // 元の配列 array

  // INPUT
  // 返す配列 uniqueArr
  // 削除した先頭を一時保存する keepTop
  // 元の配列のコピー copyArr

  let uniqueArr = [];
  let copyArr = array.slice();

  while (copyArr.length > 0) {
    //元の配列の第一項を取り出す
    let keepTop = copyArr.shift();
    //新配列に保存
    uniqueArr.push(keepTop);
    //同様の内容を元の配列から消去
    while (copyArr.indexOf(keepTop) !== -1) {
      copyArr.splice(copyArr.indexOf(keepTop), 1);
    }
  }

  return uniqueArr;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(strings));
