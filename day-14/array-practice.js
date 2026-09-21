const products = [
    {name: "Keyboard", price: 8000, stock: 3},
    {name: "Mouse", price: 4000, stock: 0},
    {name: "Monitor", price: 30000, stock: 5},
    {name: "Headphones", price: 12000, stock: 2},
    {name: "Webcam", price: 7000, stock: 0},
];

//全商品の商品名: 価格円を表示
products.forEach((product) => console.log(`${product.name}: ${product.price}円`));

//在庫がある商品だけを availableProducts に保存する
let availableProducts = products.filter((product) => product.stock > 0);

//全商品の名前だけを取り出し、productNames という新しい配列を作る
let productNames = products.map((product) => product.name);

//find() で "Monitor" を探し、そのオブジェクトを表示する
const foundProduct = products.find((product) => product.name === "Monitor");
console.log(foundProduct);

//「10,000円以下 かつ 在庫あり」の商品だけを取り出す
let filteredProducts = products.filter((product) => product.price <= 10000 && product.stock > 0);

//その結果に map() をつなげて商品名だけの配列を作る
let filteredProductsName = filteredProducts.map((product) => product.name);

console.log(filteredProductsName);