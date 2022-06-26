// 1. 获取元素
const labels = document.querySelectorAll('.form-control label');


// innerText是输出其中的所有文字并且不会识别html标签。并且会自动取消所有的换行和空格。
// innerHtml可以识别所有的html标签，并且不会取消换行和空格

// string.split('')  将字符串分割成字符数组 返回值是数组

// map定义和方法 
// map()方法返回一个新数组，数组中的元素为原始数组元素调用函数处理的后值。 
// map()方法按照原始数组元素顺序依次处理元素。 
// 参数1 当前元素 参数2 当前元素的索引 参数3 当前元素的所属数组

// join() 将数组中的元素放入一个字符串中

// 2. 遍历每一个label
labels.forEach(label => {
    label.innerHTML = label.innerText.split('').map((letter, idx) => {
        return `<span style="transition-delay:${idx * 50}ms">${letter}</span>`;
    }).join('');
})

// 学习这种写法

// 点击效果呢？


// labels.forEach(label => {
//     label.innerHTML = label.innerText
//         //将字符串分割成字符 返回一个数组
//         .split('')
//         // 添加样式，指定过渡效果开始时间
//         .map((letter, idx) => `<span span style = "transition-delay:${idx * 50}ms" > ${ letter }</span > `)
//         // 合并回来
//         .join('')
// })

// const labels = document.querySelectorAll('.form-control label')

// labels.forEach(label => {
//     label.innerHTML = label.innerText
//         .split('')
//         .map((letter, idx) => `<span span style = "transition-delay:${idx * 50}ms" > ${ letter }</span > `)
//         .join('')
// })