window.addEventListener('load',function() {
    // 下拉菜单
    var downMenu = document.getElementById('downMenu');
    var a = downMenu.parentNode;
    a.onmouseover = function() {
       downMenu.style.display = 'block'; 
    }
    a.onmouseout = function() {
       downMenu.style.display = 'none'; 
    }
    // 快速搜索
    var search = document.querySelector('#search');
    search.onfocus = function() {
        if(this.placeholder === '数码相机 (按下 s 快速定位至此)') {
            this.placeholder = '';
        }
    }
    search.onblur = function() {
        this.placeholder = '数码相机 (按下 s 快速定位至此)';
    }
    document.addEventListener('keyup',function(e) {
        if(e.keyCode === 83) {
            search.focus();
        }
    })
    // 返回顶部
    var top = document.querySelector('#top');
    var floor = document.querySelector('.floor');
    var floorTop = floor.offsetTop;
    document.addEventListener('scroll',function() {
        if(pageYOffset >= floorTop) {
            top.style.display = 'block';
        }
        else {
            top.style.display = 'none';
        }
    })
})