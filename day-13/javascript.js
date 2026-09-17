const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

//書き方１：通常はこっち
for (const cat of cats) {
  console.log(cat);
}

// 書き方２：ループの途中でなんかしたいとき
for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}

console.log(cats.length);

//map = 全員を変身させる
//書き方１
function toUpper(string) {
  return string.toUpperCase();
}

const upperCats = cats.map(toUpper); //.map(関数)「配列catsの全要素を変換して、新しい配列upperCatsを作る」

console.log(upperCats);

//書き方２
const upperCats2 = cats.map((cat) => cat.toUpperCase()); //cats.map()に引数としてarrow functionを渡している

console.log(upperCats2);

// filter = 条件で選抜する
//書き方１
function lCat(cat) {
  return cat.startsWith("L");
}

const filtered = cats.filter(lCat); //lCatがtrueだったら残す、falseだったら残さない

console.log(filtered);

//書き方２

const filtered2 = cats.filter((cat) => cat.startsWith("L")); //returnは省略できる

console.log(filtered2);

//continue：その周の残りだけ飛ばして次の周回へ
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}

//break：そこでループ自体を終了
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }

  console.log(i);
}

//do while 実行=>条件確認だから　とりあえず一回は実行される
let i = 10;

do {
  console.log(i);
  i++;
} while (i <= 3);

//break labelNameでそのラベルの付いているループから抜け出せる。（入れ子状態でも抜け出せる）
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 2) {
      break outer;
    }
    console.log(j);
  }
}

console.log("Done!");

// 回数がはっきりしている：for
// 条件が満たされるまで繰り返したい：while が自然なことが多い
let count = 0;

while (count <= 10) {
  if (count === 0) {
    count++;
    continue;
  } else if (count % 2 === 0) {
    console.log(count);
  } else {
    count++;
    continue;
  }
  count++;
}

for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 任意の数nまでの素数を出力する
// INPUT
// 出力する文字列 primeMessage
// 任意の数字 n

// 素数の判定をする
// FOR
// 2~nで繰り返す
// INPUT
// 素数と判定するブール isPrime
// iを割る数字 j
// WHILE
// isPrimeがtrueかつjがiより小さい間はループする
// IF
// iがjでわれる：isPrimeをfalseにして終了
// IFEND
// WHILEEND
// IF
// isPrimeがtrue；iは素数なので文字列に追加する
// FOREND

// 文字列の最後のカンマを消去
// 文字列を表示

let n = 10; //任意の数字
let primeMessage = `n = ${n} `; //出力する文字列

//素数の判定をする
for (let i = 2; i <= n; i++) {
  let isPrime = true; // 素数だと仮定する
  let j = 2; // 2からi-1までの数で割って調べる

  while (isPrime && i !== j) {
    // i=2の場合も素数として扱える
    if (i % j === 0) {
      isPrime = false; // 割り切れたら素数ではないと判定
    }
    j++;
  }

  if (isPrime) {
    primeMessage += `${i},`; // 素数を出力文字列に追加
  }
}

console.log(primeMessage.slice(0, -1)); // 最後のカンマを削除して出力

let arr = ["1", "2", "3", "4"];
console.log(arr);
arr.push(5); //配列には数字、文字列、配列などなんでもpushできる。
// ごちゃまぜにするとややこしいので、関連するデータをまとめたほうがいい
console.log(arr);

console.log(arr.pop()); //最後の要素を抽出して返す

console.log(arr);

console.log(arr.length); //要素の数を返す

console.log(arr.shift()); //最初の要素を抽出して返す　全体が左にシフトする　だからshift

console.log(arr.unshift("1")); //最初に要素を追加する　全体が右にシフトする　だからunshift

console.log(arr);

// delete arr[2];
//空白が残って気持ち悪くなる　[ '1', '2', <1 empty item>, '4' ]

// splice(start, 個数)
console.log(arr.splice(0, 2)); //(a,b) a番目からbこの要素を削除し、返す

console.log(arr);

arr.splice(0, 0, "1", "2"); //何も削除せずに追加することも可能

console.log(arr);

//すべてをsplice()で賄うことは技術的にはできるが、
// 普通は目的が単純なら専用メソッドを使う。

// splice()は好きな位置から、好きな個数を削除・追加したいときに使う

// slice(start, end)
console.log(arr.slice(1, 3)); //(a,b) a番目からb-a番目を新しい配列としてコピーする

//concat(配列)
newArr = arr.concat(["3", "4"], [5, 6]); 
//複数の配列から、新しい配列を作る
console.log(newArr);

// forEach = 全員に何かする
arr.forEach(console.log); //forEachはデフォルトで(item, index, array)を渡す
arr.forEach((item) => {console.log(item);}); //引数を指定することでitemだけ受け取れる

console.log(arr.indexOf("3")); //見つけた場所のインデックスを返す
console.log(arr.indexOf(false)); //見つからなければ-1を返す

console.log(arr.includes("3")); //みつけたらtrue
console.log(arr.includes(3)); //みつからなければfalse
//includesメソッドは　=== で判別しているから正確

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 1, name: "Mary" }
];

let user = users.find((item) => item.id == 1); //条件にあう最初のitemを返す
console.log(user.name);