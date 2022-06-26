// 1. 获取 .panel  panels是伪数组形式
const panels = document.querySelectorAll('.panel')

// 2. 使用forEach遍历每一个.panel 并为其注册点击事件
// panels是一个伪数组，所以能够使用forEach()进行遍历
// panel 就是 panels里面的每一个元素
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        // 跟我们之前的做法类似啊
        // 首先给所有元素清除类名
        removeActiveClasses()
        // 再给当前的panel添加类名
        panel.classList.add('active')
        // 箭头函数的this指向其最近的外层函数作用域的 this 所指对象
        // 所以这里不要用this，而用panel就行，这个panel就是当前点击的panel
        // 普通函数的this指向才是调用者
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}


// 不用for循环，而是用forEach代替
// 不用普通函数作为回调，而是用箭头函数作为回调，注意this的使用