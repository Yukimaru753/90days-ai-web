const numbers = [1,2,3,4,5,6,7,8,9,10];

//偶数だけを取り出し、それぞれを三倍し、合計する
//配列メソッドを使うことで、ループなどを使うよりスマートになるかも
function sumOfTripleEven(array) {
    //偶数だけを取り出し、新しい配列を作成
    let arrayEven = array.filter((num) => num % 2 === 0);
    //すべての数を三倍する
    let evenTriple = arrayEven.map((num) => num * 3);
    // 合計する
    let sumTriple = evenTriple.reduce((total, num) => {return total + num}, 0);

    return sumTriple
}

console.log(sumOfTripleEven(numbers));