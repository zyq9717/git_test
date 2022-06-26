// 先思考以下要怎么做，再去参考别人写的

// 实现效果：点击按钮 笑话来到下一个
// 获取按钮和joke  按钮绑定点击事件  每点击一次 joke元素的innerHTML就随之替换
// 笑话的来源在哪里

// 1. 获取元素
const jokeE1 = document.querySelector('.joke');
const jokeBtn = document.querySelector('.btn');

// 2. 给按钮绑定点击事件
jokeBtn.addEventListener('click', generateJoke)

// 3. 再调用一次generateJoke()
generateJoke();


// aync/await 跟fetch() API配合使用

// 4. 声明一个异步函数
// generateJoke() 是一个异步方法，因为前面有async这个关键词
async function generateJoke() {
    const config = { headers: { Accept: 'application/json', }, };
    // async 函数执行时，如果遇到 await 就会先暂停执行 ，等到触发的异步操作完成后，恢复 async 函数的执行并返回解析值
    // await的意思是这个异步请求暂停直到请求完成
    // 也就是说先执行 await后面的吗？
    // 等待资源做出回应，做出回应之后，才会执行后面的

    // fetch()开启一个请求并返回promise对象
    // fetch() 也是一个异步函数，返回值是promise对象
    // 当请求完成，回应会编程response对象，就是resolve, 如果请求失败会变成reject
    const res = await fetch('https://icanhazdadjoke.com', config);

    // 这个res对象，通过await fetch()返回的是一个有着多种形态的数据，需要提取它的JSON对象
    // res.json()方法是一个response对象上的提取JSON对象的方法，这个方法会返回一个promise对象，所以还要用await。
    const data = await res.json();

    jokeE1.innerHTML = data.joke;
}



// const jokeEl = document.getElementById('joke')
// const jokeBtn = document.getElementById('jokeBtn')

// jokeBtn.addEventListener('click', generateJoke)

// generateJoke()

// // USING ASYNC/AWAIT
// async function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   const res = await fetch('https://icanhazdadjoke.com', config)

//   const data = await res.json()

//   jokeEl.innerHTML = data.joke
// }