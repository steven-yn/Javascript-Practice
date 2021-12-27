// 02 async / await

// 1초 sleep 하는 코드

/*
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function process() {
  console.log("안녕하세요!");
  await sleep(1000); // 1초쉬고
  console.log("반갑습니다!");
}

process();
*/

// .then() 으로 다음 작업수행하기

/*
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function process() {
  console.log("안녕하세요!");
  await sleep(1000); // 1초쉬고
  console.log("반갑습니다!");
}

process().then(() => {
  console.log("작업이 끝났어요!");
});
*/

// throw try/catch 로 에러발생시키기

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/*
async function makeError() {
  await sleep(1000); // 1초쉬고
  const error = new Error();
  throw error;
}

async function process() {
  try {
    await makeError();
  } catch (e) {
    console.error(e);
  }
}

process();
*/

// 여러개의 비동기 함수

const getCat = async () => {
  await sleep(1000);
  return "달미";
};

const getRabbit = async () => {
  await sleep(500);
  return "토끼";
};

const getTurtle = async () => {
  await sleep(3000);
  return "거북이";
};

/*
async function process() {
  const cat = await getCat();
  console.log(cat);
  const rabbit = await getRabbit();
  console.log(rabbit);
  const turtle = await getTurtle();
  console.log(turtle);
}

process();
*/

// promise.all 병렬 비동기 실행

/*
async function process() {
  const results = await Promise.all([getCat(), getRabbit(), getTurtle()]);
  console.log(results);
}

process();
*/

// 비구조화 할당으로 각 결과값 따로 추출조회

/*
async function process() {
  const [cat, rabbit, turtle] = await Promise.all([
    getCat(),
    getRabbit(),
    getTurtle(),
  ]);
  console.log(cat);
  console.log(rabbit);
  console.log(turtle);
}

process();
*/

// promise.race 여러개 프로미스중 가장 빨리 끝난것 하나만 가져옴.

async function process() {
  const first = await Promise.race([getCat(), getRabbit(), getTurtle()]);
  console.log(first);
}

process();
