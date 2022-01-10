// Callback Hell example

class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'call' && password === 'back') ||
          (id === 'coder' && password === 'study')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'call') {
          resolve({ name: 'call', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

// async
async function checkUser() {
  try {
    const userId = await userStorage.loginUser(id, password);
    const user = await userStorage.getRoles(userId);
    alert(`Hello ${user.name},you have a ${user.role}`);
  } catch (error) {
    console.log(error);
  }
}

checkUser();

// promise
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then(user => alert(`Hello ${user.name}, you have a ${user.role}`))
  .catch(console.log);

// callback
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role}`);
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);
