const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
    console.log(cat);
}

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

