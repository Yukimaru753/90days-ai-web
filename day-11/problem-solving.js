// Problem:
// 1から指定された数字までを全部足す（1+2+3+...+n）の総和

// Input:
// 数字 n

// Output:
// 合計値

// Pseudocode:
// nを受け取る

// n(n+1)/2の値を返す


function sumTo(n) {
    return n * (n + 1) / 2;
}

//動作確認
console.log(sumTo(4));