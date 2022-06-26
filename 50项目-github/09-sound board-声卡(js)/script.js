// 学习点：
// 最重要的是这种思路！！！！！
// 创建元素，给创建元素添加类名，添加内容
// 排他思想的变种：
// 遍历伪数组，绑定点击事件，在事件的回调函数中在遍历数组（这次遍历封装在函数当中），每次点击，都会把这个数组从头到尾遍历一遍，一次实现排他
// 音频的一些方法
// 获得元素直接调用方法


// 难点在于：你怎么知道点击的这个声卡，播放的是哪一个音频？  

// 1. 将所有audio标签的id值存放到一个数组当做    ——————  这种做法第一次见   并非获取元素 但有异曲同工之妙
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// 2. 对这个数组进行遍历
// 每遍历一次，创建一个btn，添加类名，添加内容，绑定点击事件
// btn: 这些btn都包含在      <div id="buttons"></div>   这个元素里面
// <button class="btn">applause</button> //
// <button class="btn">boo</button> //
// <button class="btn">gasp</button> //
// <button class="btn">tada</button> //
// <button class="btn">victory</button> //
// <button class="btn">wrong</button> //

// 点击绑定事件：
// 每点击一次 调用 函数 stopSongs()
// 这个函数会遍历每一个audio 会将所有的音频都暂定，回到0
// (这一步相当于之前清除所有的类名)
// 然后再在点击事件的回调函数中  document.getElementById(sound).play();
// 这就会使得当前的 audio 播放音频

// 这个案例的js与之前学习js中学到的案例其实很相似
// 都是通过遍历给每一个元素设置某些属性样式,然后绑定点击事件,在点击事件中,再遍历,清除所有样式,之后再给当前的元素绑定样式


// 你怎么知道点击的这个声卡，播放的是哪一个音频？这个不难


// 通过这种方式，能够使得btn的数量随着audio的变化而变化
sounds.forEach(sound => {
    // 3. 创建元素  document.createElement('元素名称')
    const btn = document.createElement('button');

    // 4. 给创建好的btn元素添加类名 btn
    btn.classList.add('btn');

    // 5. 创建的btn元素添加内容
    // 添加的内容就是当前遍历出的元素 也就是 aution的id值之一
    btn.innerText = sound;

    // 6. 给每一个btn绑定点击事件
    btn.addEventListener('click', () => {
        // 7. 调用函数 stopSongs()    -----   作用是 排他思维
        stopSongs();

        // 8. 使用getElementById()获取带有指定id的元素

        // getElementById() 方法可返回对拥有指定 ID 的第一个对象的引用。
        // play() 方法开始播放当前的音频。

        // 首先获取到id为sound的元素，调用play()方法，播放音频
        document.getElementById(sound).play();

    })

    // 9. 获取id为buttons的元素  将btn作为其子元素节点添加进末尾
    document.getElementById('buttons').appendChild(btn);

})

// 10. 创建stopSongs()函数
function stopSongs() {
    // 11. 遍历sounds
    sounds.forEach(sound => {
        // 12. 获取id为 'applause', 'boo', 'gasp', 'tada', 'victory', 'wrong' 的元素
        // 也就是获取到每一个audio
        const song = document.getElementById(sound);

        // 13. 将每一个audio 调用 pause()
        // pause() 方法停止（暂停）当前播放的音频或视频。
        song.pause();

        // 14. 设置 currentTime属性为0
        // currentTime 属性设置或返回视频播放的当前位置（以秒计）
        song.currentTime = 0;

    })

}
