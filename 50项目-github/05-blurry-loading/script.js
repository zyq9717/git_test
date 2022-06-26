// 1s等于1000ms

// 分析：
// 声明一个全局变量 load  初始值为0
// 设置定时器，每隔30ms调用一次blurrying函数
// 每调用一次 blurrying 就让 load+1
// 当load>99时,清除定时器,不再调用 blurrying函数
// 因为load是不断变化的, 所以可以使用load来动态的调整背景图片的模糊程度（从模糊到清晰 从0-1）
// filter:blue(px)  0 完全不模糊  数值越大越模糊
// 为了调整模糊程度，声明一个函数，将load作为参数传入，来控制模糊程度


// 1. 获取元素
const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');

// 2. 声明load变量 赋值为0
let load = 0;

// 3. 定时器 30毫秒后执行
// 将blurring作为参数传递进来
// 没加括号，表示定时器到时才会触发这个函数
// 并给定时器起别名

// 每个30ms调用一次blurrying函数
let int = setInterval(blurring, 30);

// 定义blurrying函数
function blurring() {
    load++;

    if (load > 99) {
        // 清除停止定时器
        clearInterval(int);
    }

    loadText.innerHTML = `${load}%`;
    // 因为load是不断变化的 所以 透明度和滤镜的值也是在不断的变化
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

}

// 定义 scale 函数
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}