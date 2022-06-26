// 1. 获得元素
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

// 2. 给按钮绑定点击事件
btn.addEventListener('click', () => {
    // toggle() 没有这个类名就添加，有这个类名则删除
    // 但toggle()不应该是jquery的语法吗，原生js不能使用吗？
    search.classList.toggle('active');

    // 文本输入框要鼠标点击下输入框，等光标在里面之后再敲键盘输入。
    // focus()的作用就是将光标放在输入框中，省掉了你点击的那一下，直接输入你要输入的内容。
    input.focus();
})