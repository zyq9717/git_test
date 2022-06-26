// 分析：
// 一、变量currentActive
// 点击next按钮，圆圈添加active，并且progress宽度增长父级盒子的25%（初始宽度为0）
// 点击prev阿牛，圆圈移除active，并且progress宽度减少父级盒子的25%（初始宽度为0）
// 我们如何知道要给这个圆圈添加active呢？
// 通过声明全局变量 currentActive 来控制
// 每次点击next，就让其+1，每次点击prev就让其-1
// 因为一开始第一个圆圈就已经添加了active，所以currentActive就从1开始
// 当currentActive > 圆圈的数量时，就让currentActive = 圆圈的数量，同时禁用next按钮
// 当currentActive < 1 时，就让currentActive = 1，同时禁用prev按钮

// 二、添加active和删除active
// 添加active和删除active  (将其封装在一个函数当中,因为点击next和prev都要使用到)
// 点击next，给下一个圆圈添加active时，前面所有圆圈也要保持添加active的状态，而非删除
// 点击prev，后面所有的圆圈都要删除active
// 可以通过forEach 遍历 circles 这个数组实现，判断条件是 圆圈的索引 < currentActive   currentActive表示当前是第几个圆圈，总是大于圆圈的索引的
// 点击next按钮，假设当前currentActive = 2，forEach遍历cricles 那么 索引为 0 1 的圆圈都会添加active，索引为 2 3 的圆圈不会添加
// 也就是第1个和第2个圆圈会添加active，第3个和第4个不会添加
// 点击prev按钮，假设当前currentActive = 2，forEach遍历circles 那么 索引为 0 1 的圆圈不会删除active，索引为 2 3 的圆圈会删除
// 也就是第3个和第4个圆圈会删除active，第1个和第2个不会删除active
// 巧妙的利用了索引是从0开始，currentActive是从1开始的特点
// 以及
// 每点击一次，forEach都会遍历所有的圆圈，复合条件的添加active，不符合添加的删除active

// 三、控制progress宽度
// 控制progress的宽度,点击next和prev都要增加/减少progress的宽度

// const actives = document.querySelectorAll('.active');
// progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
// circles.length是固定不变的 = 4           那么 circles.length - 1 = 3
// actives.length是不断变化的 每次增减1      但最大值 = 3

// 当actives.length = 1 时，也就是初始状态，第一个圆圈添加active，此时 progress的宽度 = 0
// 当actives.length = 2 时，有两个圆圈添加active，此时 progress的宽度 = 1/3父级宽度
// 因为 progress 添加了 z-index = -1，所以它会在圆圈的下面显示


// 关键点：变量currenActive，circles的索引，circles.length ,actives.length


// 1. 获取元素
// 为什么要获得progress？
const progress = document.querySelector('#progress')
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');


// 难点：如何使得点击按钮，变回使得下一个circle变色，同时知道最后什么时候是最后一个circle？

// 2. 声明一个变量（关键）
let currentActive = 1;


// 表示当前所在的圆圈

// 3. 给next绑定点击事件
next.addEventListener('click', () => {
    // 3.1 每次点击，circleActive变量+1
    currentActive++;

    // 3.2 当变量 大于 circle的数量时(等于circle的数量，表示来到最后一个圆圈），变量=circle的数量
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    // 3.3 调用updata函数
    update();
})


// 4. 给prev绑定事件
prev.addEventListener('click', () => {
    // 4.1 每次点击，circleActive变量-1
    currentActive--;

    // 4.2 当变量 小于 1时（等于1表示来到第一个圆圈），变量=1
    if (currentActive < 1) {
        currentActive = 1;
    }

    // 4.3 调用update函数
    update();
})

// forEach() 不会修改数组 作用是；调用数组的每个元素，并将元素传递给回调函数


// 5. 定义update函数
function update() {
    // forEach() 第一个参数：当前元素 第二个参数：当前元素的索引值 第三个参数：当前元素所属的数组对象
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            // 如果当前圆圈的索引值 小于 变量 则为当前圆圈添加active
            // 因为圆圈的索引值是从0开始的，而变量是从1开始的，所以圆圈的索引值 <= 变量值
            // 也就是说 直到最后一个圆圈位置，所有的圆圈都会添加active类名
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    // 声明变量，将获得的所有包含类名active的元素赋值给它
    const actives = document.querySelectorAll('.active');

    // progress的宽度
    // circles.length是固定不变的 = 4px
    // actives.length是不断变化的
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if (currentActive == 1) {
        // 当变量=1 向前按钮会被禁用
        prev.disabled = true;
    } else if (currentActive == circles.length) {
        // 当变量 = 圆圈的数量  向后按钮会被禁用
        next.disabled = true;
    } else {
        // 都不是，都不禁用
        prev.disabled = false;
        next.disabled = false;
    }
}

