const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
    console.log(cat);
}

function toUpper(string) {
  return string.toUpperCase();
}

const upperCats = cats.map(toUpper); //.map(関数)「配列catsの全要素を変換して、新しい配列upperCatsを作る」

console.log(upperCats);