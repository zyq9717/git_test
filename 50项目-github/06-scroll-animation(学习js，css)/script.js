// 注册事件的回调函数 ，如果不是使用function() {}  而是传入一个从外界创建的函数  函数名后面不能加() 否则会未经事件触发就调用

// 1. 获取元素
// 获取所有的box
const boxes = document.querySelectorAll('.box');

// 2. 给window绑定窗口卷动事件
// 窗口卷动，就调用这个函数
window.addEventListener('scroll', checkBoxes);

// 3. 定义checkBoxes函数
function checkBoxes() {
    // window.innerHeight 浏览器可视窗口的高度
    // triggerBottom 是 浏览器可视窗口高度的五分之四
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        // boxTop 变量 = box距离浏览器可视窗口上沿的距离
        // element.getBoundingClientRect() 能够获得元素上下左右以及元素自身的高度，返回值是一个对象，包含这6个属性的对象
        // element.getBoundingClientRect().top   element.getBoundingClientRect() 是一个对象  element.getBoundingClientRect().top 获得这个对象的top属性的值
        const boxTop = box.getBoundingClientRect().top;

        // 如果 box距离浏览器可视窗口上沿的距离 小于 浏览器可视窗口的高度的五分之四
        // 也就是说当某一个box盒子刚刚出现在浏览器可视窗口时
        if (boxTop < triggerBottom) {
            // 为box添加show类名 让box的动画效果消失 回归原来的位置
            box.classList.add('show');
        } else {
            // 如果 box距离浏览器可视窗口上沿的距离 大于等于 浏览器可视窗口的高度的五分之四
            // 也就是说某个box盒子即将消失在浏览器可视窗口时
            box.classList.remove('show');
        }
    })

}