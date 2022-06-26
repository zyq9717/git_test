// 1. 获取元素
// left right container
// 为什么不获取 h1 按钮 伪元素  因为这些元素在 要获取元素的里面 它们会跟随着上述元素的运动而运动
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

// 2. 左边盒子绑定 鼠标进入 事件   给container盒子添加类名 hover-left
left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
// 3. 左边盒子绑定 鼠标离开 事件   给container盒子删除类名 hover-left
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

// 4. 右边盒子绑定 鼠标进入 事件   给container盒子添加类名 hover-right
right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
// 5. 右边盒子绑定 鼠标离开 事件   给container盒子删除类名 hover-right
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));



// 运动效果，都是宽度变化，而非图片移动