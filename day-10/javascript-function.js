function favoriteAnimal(animal) {
  return animal + " is my favorite animal!";
}

const favorite = prompt("好きな動物は？");

if (favorite) {
  const answer = confirm(`本当に${favorite}で良いですか？`);

  if (answer) {
    const message = favoriteAnimal(favorite);
    console.log(message);
  } else {
    console.log("キャンセルされました");
  }
} else {
  console.log("好きな動物が入力されていません");
}
