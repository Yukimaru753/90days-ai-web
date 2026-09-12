const string = "The revolution will not be rtelevised.";
console.log(string);

// const badString1 = This is a test;
// console.log(badString1);

const badString = string;
console.log(badString);

const name = "chris";
// const greeting = "Hello, ${name}";　``で囲まないといけない
// const greeting = 'Hello, ${name}';　だめ
const greeting = `Hello, ${name}`;
console.log(greeting);

const one = "Hello, ";
const two = "how are you?";
console.log(`${one}${two}`); //できるけどわかりにくい

const joined = `${one}${two}`; //こっちのほうがすっきりしてる
console.log(joined);

/*
const button = document.querySelector("button"); //document.querySelector() = HTMLから欲しい要素を探して持ってくる

function greet() {
  const name = prompt("What is your name?");//prompt()で入力画面を出して、ユーザーが入力した文字をnameに保存してる。
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to meeet you!`;//取得した<div>の中のテキストを書き換えている。
}

button.addEventListener("click", greet);//さっき取得したbuttonがクリックされたら、greetを実行
*/

//通常の文字列
const greeting2 = "Hello";
const name2 = "Bob";
console.log(greeting2 + ", " + name2); //通常の文字列　わかりにくい

//``テンプレートリテラル
const greeting3 = "Howdy";
const name3 = "Ramesh";
console.log(`${greeting3}, ${name3}`); //バッククォート`` + ${} で 文字列に値を埋め込める

//テンプレートリテラルにJavaScript式を含めることも可能
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;

const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output);

/*
固定された普通の文字列
→ "Hello World"
-----------------------------------------------
変数などを文字列に埋め込みたい
→ `Hello ${name}`

複数の文字列を + で大量につなげそう
→ テンプレートリテラルが便利
*/

//テンプレートリテラル
const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline); //テンプレートリテラルはソースコードと同様の改行をしてくれる

//通常の文字列
const newline2 = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline2); // \n　を間に挟む必要あり


//引用符(" ' `)を使いたいとき
// const badQuotes = "She said "I think so!"";

//方法１
const goodQuotes2 = `She said "I'm not going in there!"`; //ほかの文字で文字列を宣言する
console.log(goodQuotes2);

//方法２
const bigmouth = 'I\'ve got no right to take my place…'; // 前に\をおく
console.log(bigmouth);

// 文字列が入った時点で文字列として処理される
const coolBandName = "Front ";
const number = 242;
console.log(coolBandName + number); 

//Number()関数
const myString = "123";
const myNum = Number(myString); //引数を数字に変換
console.log(typeof myNum); //後ろの値のデータ型を調べられる

//String()関数
const myNum2 = 123;
const myString2 = String(myNum2); //引数を文字列に変換
console.log(typeof myString2)

// ----------------------------------------------
//string型のメソッド

//length()　文字数を返す
let text = "Hello World";
let length = text.length;
console.log(typeof length);
console.log(length); //numberとして返ってくる

//toUpperCase() 大文字にする
let upperCase = text.toUpperCase();
console.log(upperCase);

//toLowerCase() 小文字にする
let lowerCase = text.toLowerCase();
console.log(lowerCase);

//charAt(n), at(n), text[n] 文字列のn+1文字目を返す 最初は0番目
let char1 = text.charAt(0); //昔ながらの方法
let char2 =text.at(0) //こっちのほうが楽　しかも負の値を入れることで後ろから数えられる
let char3 =text[0] //これもある

console.log(char1);
console.log(char2);
console.log(char3)

//slice(n-1,m) n番目からm-n文字分抜き出す　最初は0番目
let slice = text.slice(1,5); //2文字目から4文字分抜き出してる
console.log(slice);

let slice2 = text.slice(6); //7文字目以降を抜き出す
console.log(slice2);

let slice3 = text.slice(-5); //後ろから5文字目以降を抜き出す
console.log(slice3);

//substring(n,m)  n番目からm-n文字分抜き出す　最初は1番目
//substr(n,m) n番目からm文字分抜き出す
//基本的にはslice()を使う

let result = text.isWellFormed();
console.log(result); //この文字列はUnicode的に壊れていない？　うん=true 壊れてる=false

//文字列の両端から空白を除去
let trim = text.trim();
console.log(trim);
//trimStart()は文字列の左側の空白を除去
//trimEnd()は右側を除去

//-------------------------
//多分まだ使わないからメモ

//padStart(n,文字)
//padEnd(n,文字)

//repeat(n)

//replace("指定する文字列", "置き換える文字列")

//split("何で区切るか")　配列を返す

//---------------------------------
//比較演算子    

// >, <, >=, <=, ==, !=(≠), など
//true, falseで返ってくる

//'2' > 1　文字は数字として認識される

//=== は型も含めて厳密に比較する
//undefined == null   // true
//undefined === null  // false

//==   → === という厳密版がある
//!=   → !== という厳密版がある
//ややこしいから絶対に厳密版でやった方がいい

//厳密版がないので、> を使うときは比較する値がどんな型なのかを意識するのが大事

//----------------------------------

//基本のif文
/*
if (条件) {

} else {

}
*/

//二個以上
/*
if (条件) {

} else  if(条件) {

} else  if(条件) {

}
*/

/*
&&  → AND → 「かつ」 ふたつともだから&&
||  → OR  → 「または」　しきられてるからどっちか||
!   → NOT → 「ではない」  
*/

// ! は反転

//三項演算子
//単純な if / else を短く書ける方法
//条件 ? YES : NO

let age=20;
let accessAllowed = (age > 18) ? true : false; //(age > 18がtrueなら左、falseなら右が返される)
console.log(accessAllowed);

// the same
let accessAllowed2 = age > 18;
console.log(accessAllowed2);

//|| は単に true / false を返すだけじゃなく、実際の値そのものを返すことがある
//|| は左から順番に見て、最初のtruthyな値を見つけたら、その値をそのまま返す
//&& は左から順番に見て、最初のfalsyな値を見つけたら、その値をそのまま返す
const result2 = null || 0 ||"Yukimaruu";
console.log(result2);

//Boolean変換（ブール変換）
//falsy 

/*
false
0
""
null
undefined
NaN
*/

//これらは条件式でfalseとして扱われる
//true / false は「実際のBoolean値」
//truthy / falsy は「Booleanとして見たときの扱われ方」


//ショートサーキット理論
const isLoggedIn = true;

isLoggedIn || alert("ログインしてください");
//||は左側がtruthyだったら、右側は評価すらしない。
//&& は逆で、左側がfalsyだった時点で右側を評価しない

//AND演算子の優先順位はOR よりも高い。&& > ||

alert(alert(1) || 2 || alert(3));
//まずalert(1)が実行される 1
//alert() の戻り値は undefined なので
//2へ
//truthyなのでここで終了
//外側のalert(2)が実行される

alert( null || 2 && 3 || 4 );
//まず2 && 3でどちらもtruthyなので真ん中は３になる
//null || 3 || 4で3が返される
//alert(3)を実行

//スイッチ文
/*
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
*/

//breakがなかったら条件が合った時点でチェックなしに次のケースのコードを実行する
/*
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );  //条件に合わない
  case 4:
    alert( 'Exactly!' );   //条件に合うのでalert()を実行
  case 5:
    alert( 'Too big' );  //breakがないのでalert()を実行
  default:
    alert( "I don't know such values" );　//breakがないのでalert()を実行
}
*/

//ケースはグループ化できる
/*
let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // 同じコードを二つのケースで共有している
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}
*/