// 1. 获取元素
const open = document.querySelector('#open');
const close = document.querySelector('#close');
const container = document.querySelector('.container');

// 2. 给open绑定点击事件
open.addEventListener('click', () => {
    // 点击添加 show-nav类名 并触发旋转动画效果
    container.classList.add('show-nav');
})

// 3. 给close绑定点击事件
close.addEventListener('click', () => {
    // 点击删除 show-nav类名
    container.classList.remove('show-nav');
})


// 点击添加 show-nav类名
// 在css样式中 使用两个类名紧挨在一起获取要应用样式的元素
// 点击添加，达成条件，应用样式，触发旋转动画

// 再次点击，删除类名，动画效果消失，位置复原