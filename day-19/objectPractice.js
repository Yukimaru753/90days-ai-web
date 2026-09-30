let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pate";
delete user.name;

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let schedule = {};
console.log(isEmpty(schedule));

schedule["8:30"] = "get up";
console.log(isEmpty(schedule));

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (let name in salaries) {
  sum += salaries[name];
}
console.log(sum);

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric (obj) {
    for (let key in obj) {
        if(Number.isInteger(obj[key])) {
            obj[key] *= 2;
        }
    }
}
multiplyNumeric(menu);
console.log(menu);
