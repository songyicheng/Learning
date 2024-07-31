window.addEventListener('load', function () {
    // 下拉菜单
    var downMenu = document.getElementById('downMenu');
    var a = downMenu.parentNode;
    a.onmouseover = function () {
        downMenu.style.display = 'block';
    }
    a.onmouseout = function () {
        downMenu.style.display = 'none';
    }

    // 快速搜索
    var search = document.querySelector('#search');
    search.onfocus = function () {
        if (this.placeholder === '数码相机 (按下 s 快速定位至此)') {
            this.placeholder = '';
        }
    }
    search.onblur = function () {
        this.placeholder = '数码相机 (按下 s 快速定位至此)';
    }
    document.addEventListener('keyup', function (e) {
        if (e.keyCode === 83) {
            search.focus();
        }
    })

    // 返回顶部
    var top = document.querySelector('#top');
    var floor = document.querySelector('.floor');
    var floorTop = floor.offsetTop;
    document.addEventListener('scroll', function () {
        if (pageYOffset >= floorTop) {
            top.style.display = 'block';
        }
        else {
            top.style.display = 'none';
        }
    })
    top.addEventListener('click',function() {
        animateTop(window,0);
    })
    function animateTop(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            if (window.scrollY == target) {
                clearInterval(obj.timer);
                callback && callback();
            }
            var step = (target - window.scrollY) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            window.scroll(0,window.scrollY + step)
        }, 10)
    }


    // 轮播图
    var playFlag = true;//节流阀
    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    var focus = this.document.querySelector('.focus');
    focus.addEventListener('mouseenter', function () {
        prev.style.display = 'block';
        next.style.display = 'block';
        clearInterval(auto);
        auto = null; //清除定时器变量
    })
    focus.addEventListener('mouseleave', function () {
        prev.style.display = 'none';
        next.style.display = 'none';
        auto = setInterval(function () {
            next.click();
        }, 2000)
    })
    var pic = focus.querySelectorAll('ul li');
    var ul = focus.querySelector('ul');
    var pro_nav = document.querySelector('.pro-nav');
    pro_nav.style.width = pic.length * 22 + 12 + 'px';
    ul.style.width = focus.offsetWidth * pic.length + 'px';
    var clickNum = 0;
    for (var i = 0; i < pic.length; i++) {
        var li = this.document.createElement('li');
        li.setAttribute('index', i);
        pro_nav.appendChild(li);
        li.addEventListener('click', function () {
            for (i = 0; i < pro_nav.children.length; i++) {
                pro_nav.children[i].className = '';
            }
            this.className = 'current';
            clickNum = this.getAttribute('index');
            animateSlow(ul, -focus.offsetWidth * this.getAttribute('index'));
        })
    }
    pro_nav.children[0].className = 'current';
    var first_pic = ul.children[0].cloneNode(true);
    ul.appendChild(first_pic);
    ul.style.width = focus.offsetWidth * ul.children.length + 'px';
    next.addEventListener('click', function () {
        if (playFlag) {
            playFlag = false;
            // clickNum = ++clickNum % 4;
            if (clickNum == (ul.children.length - 1)) {
                ul.style.left = 0;
                clickNum = 0;
            }
            clickNum++;
            animateSlow(ul, -focus.offsetWidth * clickNum, function () {
                playFlag = true;
            });
            for (i = 0; i < pro_nav.children.length; i++) {
                pro_nav.children[i].className = '';
            }
            if (clickNum == (ul.children.length - 1)) {
                pro_nav.children[0].className = 'current';
            }
            else {
                pro_nav.children[clickNum].className = 'current';
            }
        }
    })
    prev.addEventListener('click', function () {
        if (playFlag) {
            playFlag = false;
            // clickNum = (--clickNum + 4) % 4;
            if (clickNum == 0) {
                ul.style.left = -focus.offsetWidth * (ul.children.length - 1) + 'px';
                clickNum = ul.children.length - 1;
            }
            clickNum--;
            animateSlow(ul, -focus.offsetWidth * clickNum, function () {
                playFlag = true;
            });
            for (i = 0; i < pro_nav.children.length; i++) {
                pro_nav.children[i].className = '';
            }
            pro_nav.children[clickNum].className = 'current';
        }
    })
    // 轮播图-自动播放
    var auto = setInterval(function () {
        next.click();
    }, 2000)
})