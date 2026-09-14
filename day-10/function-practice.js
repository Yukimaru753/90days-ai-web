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

const doubleNumber = (number) => number * 2;

let number2 = doubleNumber(4);
console.log(number2);

//-----------------------------------------
//匿名関数

const doubleNumber2 = function (number) {
    return number * 2;
};

let number3 = doubleNumber2(4);
console.log(number3);