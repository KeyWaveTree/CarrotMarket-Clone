// object
const a = {
  hello: "world",
  world: "haha",
};
console.log(a);
console.log(a.hello);
a.test = 123;
console.log(a);
delete a.hello;

//블록스코프, 쉐도윙
const b = 10;
if (b > 0) {
  const b = 20;
  console.log(b);
}

const arr = [10, 20, 30, 40];

console.log(arr.pop());
