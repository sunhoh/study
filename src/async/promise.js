// state: pending -> fulfilled or rejected
// Producer vs Consumer
// 데이터를 받아올때 시간이 걸리는것들은 비동기적으로 받아오는것이 좋다

// 1.Producer
// when new Promise is created, the executor runs automatically.
// resolve = 수행, reject = 예외처리
export const promise = new Promise((resolve, reject) => {
  console.log('doing something...');
  setTimeout(() => {
    resolve('hello world');
    // reject(new Error('no network')); // uncaught라는 에러창이 뜸
  }, 2000);
});

// 2.Consumer: then, catch, finally
// then -> 정상 수행 resolve를 통해서 들어온 데이터 // 프로미스랑 값을 바로 전달 가능
// catch -> error잡는 기능
// finally -> 성공하든 실패하든 상관없이 수행하고 싶을때 finally사용
promise
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num));

//4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('닭'), 1000);
  });

const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`${hen} => 알`)), 1000);
  });

const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => food`), 1000);
  });

getHen() // 인자가 똑같은면 단축시킬 수 있음
  .then(getEgg)
  // .catch(() => {
  //   return '🥖';
  // })
  .then(cook)
  .then(console.log)
  .catch(console.log);
// .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal));
