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

//すべてのダッシュを削除し、ダッシュ以降の単語を大文字にする。最後にそれらを連結
function splitPractice(text) {
  //-で分ける
  const texts = text.split("-");
  //textsを大文字始まりに変える
  for (let i = 0; i < texts.length; i++) {
    if (i === 0) {
      texts[i] = texts[i].toLowerCase();
    } else {
      const textsFirst = texts[i].at(0).toUpperCase();
      const textsRest = texts[i].slice(1).toLowerCase();
      texts[i] = textsFirst + textsRest; 
    }
  }
  //textsの内容をまとめる
  return texts.reduce((regularedText, word) => regularedText + word, "");
}

console.log(splitPractice("my-short-string"));
