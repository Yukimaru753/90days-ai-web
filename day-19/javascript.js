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
