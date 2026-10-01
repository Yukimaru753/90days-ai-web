let user = {}; // 通常こっち使う
let user2 = new Object();

user = {
  name: "John",
  age: 30, // ハンギングカンマはつけておくと後々楽
};
user.isAdmin = true; // プロパティ追加
delete user.age; //プロパティ消去
user["likes birds"] = true; //複数語のプロパティの追加

let key = "likes birds";
// user.keyだとkeyというプロパティネームは存在しないのでundefinedになる
console.log(user[key]); //スクエアブラケットは変数を代入することもできる

let fruit = "apple";

let bag = {
  [fruit]: 3,
  [fruit + "Pie"]: 4,
};

console.log(bag.apple);
console.log(bag.applePie);
// 単純ならドット
// 複雑ならスクエアブラケット

function makeUser(name, age) {
  return {
    // プロパティ名と変数名が一緒の時は略せる
    name, // name: name, の略語
    age: 30,
  };
}

let user3 = makeUser("John", 30);
console.log(user3.name);

// 値が存在しているかはuser.プロパティで分かる（undefined）
// プロパティが存在しているかは"プロパティ名" in オブジェクト名 (true, false)
console.log(user.age);
console.log("name" in user);
console.log("age" in user);
console.log(key in user); // 変数も使える

user.age = 30;

for (let key in user) {
  console.log(key);
  console.log(user[key]);
}

// 整数は自動でソートされる
let codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  // ..,
  1: "USA",
};

// objectのfoe文
// for(let key in object)
for (let code in codes) {
    console.log(code);
}

let codes2 = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA",
};

for (let code in codes2) {
    console.log(+code);
}
// +"20"：20 ← 数値へ変換

// arrayやobjectもプロパティとして追加できる
// objectにはそのデータを使って何かを行う関数も追加できる。
// メソッドと呼ぶ
const person = {
  name: ["Bob", "Smith"],
  namObj: {
    first: "Bob",
    last: "Smith",
  },
  age: 32,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

person.name;
person.name[0];
person.age;
person.bio();
// "Bob Smith is 32 years old."
person.introduceSelf();
// "Hi! I'm Bob."
console.log(person.namObj.first);
console.log(person["namObj"]["first"]); //ブラケットver.

person.farewell = function () {
  console.log("Bye everybody!");
};

person.farewell();

// コンストラクタ
// オブジェクトを作るための設計図
// 慣習的に大文字から始まる
function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}

const salva = new Person("Salva");
// new コンストラクタ => 新しい空のオブジェクトを作る

/* これと一緒
const salva = {
  name: "Salva",

  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name}.`);
  },
};
*/
salva.introduceSelf();