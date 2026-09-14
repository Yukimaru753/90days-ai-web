function calculateTotal(price, quantity, tax) {
    const total = price * quantity * (1 + tax);
    return Math.round(total); 
    //Math.round() は 四捨五入
    //Math.floor()（切り捨て）
    //Math.ceil()（切り上げ）
}

const result = calculateTotal(1200, 3, 0.1);

console.log(`合計金額: ${result}円`);