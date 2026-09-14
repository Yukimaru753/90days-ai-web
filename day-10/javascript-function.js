function favoriteAnimal(animal) {
  return animal + " is my favorite animal!";
}

const favorite = prompt("好きな動物は？");

if (favorite) {
  const answer = confirm(`本当に${favorite}で良いですか？`);

  const message = answer ? favoriteAnimal(favorite) : "キャンセルされました";

  console.log(message);
} else {
  console.log("好きな動物が入力されていません");
}
