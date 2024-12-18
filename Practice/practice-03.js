console.log(typeof "hello world");
console.log(typeof 10);
console.log(typeof 3.3333);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof []);
console.log(typeof {});
console.log(typeof (() => {}));

//지수 표기법
console.log(99999999999999999999999999);
//부동 소수점, 정밀도
console.log(3.33333333333333333);
console.log(3.55555555555555555);

const a = "hello?";
const b = "hello?";
const c = `hello?`;
console.log((a, b, c).length);

const number = 20;
console.log(`const number=${number}`);

let arr = [];
arr.push("abc");
console.log(arr);
arr.push(123);
console.log(arr);
