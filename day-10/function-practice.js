function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
console.log(result);

function min(a, b) {
  return a >= b ? a : b;
}

let minNumber = min(2, 5);
console.log(minNumber);

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let powNumber = pow(3, 3);
console.log(powNumber);

//---------------------------------------
//元の関数

function double(number) {
  return number * 2;
}

let number = double(4);
console.log(number);

//----------------------------------------
//アロー関数
//短く書ける
//アロー関数は特に「短い関数」「他の関数に渡す関数」を書くとき便利
//=>をつかって関数を書く方法

const doubleNumber = (number) => number * 2;
//const doubleNumber = number => number * 2;
//引数が一つなので()も短縮できて、さらにみじかくなる
//引数がない場合は　() => 実行する文　のようになる

let number2 = doubleNumber(4);
console.log(number2);

//-----------------------------------------
//匿名関数
//名前のないfunction

const doubleNumber2 = function (number) {
  return number * 2;
};

let number3 = doubleNumber2(4);
console.log(number3);

//-----------------------------------------
//The Odin Project Assighment3

const message = "text meSsaGe";

function capitalize(text) {
  let first = text.slice(0, 1).toUpperCase();
  let rest = text.slice(1).toLowerCase();

  return first + rest;
}

const capitalizedMessage = capitalize(message);
console.log(capitalizedMessage);

//-----------------------------------------
//The Odin Project Assighment4

const text = "Abcd";

const lastLetter = text => text.slice(-1); //短い処理なのでアロー関数

console.log(lastLetter(text));

//関数のメリット
//必要なときに短いコマンドでそのコードを呼び出すことができる
// 同じコードを何度もタイプする必要がなくなる

//関数宣言：関数呼び出し後に関数が宣言されていても実行される
//↑いつものfunction

//関数式：関数呼び出し前に関数が宣言されていないとエラーになる
//↑アロー関数とか