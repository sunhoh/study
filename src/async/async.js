// async & await
// clear style of using promise

// 1. async
// 함수 앞에 async 쓰면 promise의 역활을할 수 있다.
async function fetchUser() {
  return 'hello';
}

const user = fetchUser();
// console.log(user);
user.then(console.log);

// 2. await
// async가 붙은 곳에서만 쓸 수 있음
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}

// 프로미스의 콜백지옥 느낌
// function pickFruits() {
//   return getApple().then(apple => {
//   return getBanana().then(banana => `${apple} + ${banana}`);
//   });
// }

//예외처리는 try / catch로 해주면 됨

// 아래코드처럼할 수는 있으나 드럽다
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise();
  const banana = await bananaPromise();
  return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

// 3. useful Promise APIs // 배열이 포인트
// 프로미스 배열을 전달하게되면 모든 프로미스들이 병렬적으로 다 받을때까지 모아준다. //.all
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(fruits =>
    fruits.join('+')
  );
}

pickFruits().then(console.log);

// 어떤것이든 상관없고 먼저 출력되는것만 받아오고 싶을때 .race // 배열이 포인트
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
