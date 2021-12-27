// 01 promise

// 숫자 n 을 파라미터로 받아와서 다섯번에 걸쳐
// 1초마다 1씩 더해서 출력하는 작업을 setTimeout 으로 구현

/*
function increaseAndPrint(n, callback) {
  setTimeout(() => {
    const increased = n + 1;
    console.log(increased);
    if (callback) {
      callback(increased);
    }
  }, 1000);
}

increaseAndPrint(0, (n) => {
  increaseAndPrint(n, (n) => {
    increaseAndPrint(n, (n) => {
      increaseAndPrint(n, (n) => {
        increaseAndPrint(n, (n) => {
          console.log("끝!");
        });
      });
    });
  });
});
*/

// Promise 만들기

/*
const myPromise = new Promise((resolve, reject) => {
  // 구현..
})
*/

// 1초뒤에 성공시키는 상황

/*
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

myPromise.then((n) => {
  console.log(n);
});
*/

// 1초뒤에 실패시키는 상황

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 1000);
});

myPromise
  .then((n) => {
    console.log(n);
  })
  .catch((error) => {
    console.log(error);
  });

// Promise 를 만드는 함수 작성.

/*
function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = "ValueIsFiveError";
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

increaseAndPrint(0).then((n) => {
  console.log("result: ", n);
});
*/

function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = "ValueIsFiveError";
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

increaseAndPrint(0)
  .then((n) => {
    return increaseAndPrint(n);
  })
  .then((n) => {
    return increaseAndPrint(n);
  })
  .then((n) => {
    return increaseAndPrint(n);
  })
  .then((n) => {
    return increaseAndPrint(n);
  })
  .then((n) => {
    return increaseAndPrint(n);
  })
  .catch((e) => {
    console.error(e);
  });
