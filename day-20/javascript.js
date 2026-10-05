let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary]; // john が参照していたオブジェクトへの参照が入っている

let names = users.map((user) => user.name).join(", ");

console.log(names); // John, Pete, Mary

john = { name: "John", surname: "Smith", id: 1 }; // 参照先を新しいオブジェクトに変更している
pete = { name: "Pete", surname: "Hunt", id: 2 }; // 参照先を新しいオブジェクトに変更している
mary = { name: "Mary", surname: "Key", id: 3 }; // 参照先を新しいオブジェクトに変更している

users = [john, pete, mary]; //参照先を新しいオブジェクトに変更

let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));
console.log(usersMapped);

john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 28 };

users = [john, pete, mary];

function sortByAge(users) {
  return users.sort((a, b) => a.age - b.age);
}

sortByAge(users);
console.log(users[0].name); // John
console.log(users[1].name); // Mary
console.log(users[2].name); // Pete

john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 29 };

users = [john, pete, mary];

function getAverageAge(users) {
  let totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users.length;
}

console.log(getAverageAge(users)); // 28

users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(users) {
    return users.reduce((obj, user) => {
        obj[user.id] = user;
        return obj;
    }, {});
}

let usersById = groupById(users);
console.log(usersById);