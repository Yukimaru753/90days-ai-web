// Problem:
// 1から指定された数字までを全部足す（1+2+3+...+n）の総和

// Input:
// 数字 n
let n = 5;

// Output:
// 合計値
let result;

// Pseudocode:
// resultを0にする
result = 0;
// resultにn(n+1)/2を代入
result = n * (n + 1) / 2;
// resultを返す
console.log(result);