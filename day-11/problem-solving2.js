// Problem:
//1からnまでに存在する偶数の総和を求める関数sumEvenを作る
//公式は使わずにifとforで

// Input:
//　数字 n

// Output:
//　偶数の合計値

// Pseudocode:
// resultを初期化
//　FOR：1~nまでを処理
//　IF：iを2で割ったあまりが0の時、resultにiを足す。
//　FOREND
// resultを返す

function sumEven(n) {
    let result = 0;
    for(let i=1; i < n + 1; i++){
        if(i % 2 === 0){
            result += i;
        }
    }
    return result;
}

//動作確認
console.log(sumEven(10));
console.log(sumEven(6));
console.log(sumEven(2));