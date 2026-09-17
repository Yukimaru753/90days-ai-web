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

//書き方１
function toUpper(string) {
  return string.toUpperCase();
}

const upperCats = cats.map(toUpper); //.map(関数)「配列catsの全要素を変換して、新しい配列upperCatsを作る」

console.log(upperCats);

//書き方２
const upperCats2 = cats.map((cat) => cat.toUpperCase()); //cats.map()に引数としてarrow functionを渡している

console.log(upperCats2);

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
// nを指定する
// FOR：2~nまで繰り返す
// IF
// i = 2なら i,と文字列に追加
// ELSE
// FOR：2~n-1まで繰り返す
// iを2~i-1までわる
// IF
// わったあまりが0になる：break
// IFEND
// i,と文字列に追加
// FOREND
// IFEND
// FOREND

// 文字列を表示

// INPUT
// 出力する文字列 primeMessage
// 任意の数字 n

let n = 10;
let primeMessage = `n = ${n} `;

for (let i = 2; i <= n; i++) {
  let isPrime = true;
  let j = 2;

  while (isPrime && i !== j) {
    if (i % j === 0) {
      isPrime = false;
    }
    j++;
  }

  if (isPrime) {
    primeMessage += `${i},`;
  }
}

console.log(primeMessage.slice(0, -1));
