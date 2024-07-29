window.addEventListener('load',function() {
    //手机号码格式验证
    var tel = document.getElementById('tel');
    var span = document.querySelector('#span');
    tel.onblur = function() {
        if(tel.value.length < 6 || tel.value.length > 11) {
            span.innerHTML = '<i class="error_icon"></i>手机号码格式不正确，请重新输入';
            span.className = 'error';
        }
        else {
            span.innerHTML = '<i class="success_icon"></i>手机号码格式正确';
            span.className = 'success';
        }
    }
    // 
    var flag1 = 0;
    var eye_btn1 = document.getElementById('eye1');
    var input1 = document.getElementById('pwd');
    eye_btn1.onclick = function() {
        if (flag1 === 0) {                                
            this.src = '../../JavaScript/images/icon/睁眼显示密码.png';
            input1.type = 'text';
            flag1 = 1;
        }
        else {
            this.src = '../../JavaScript/images/icon/闭眼隐藏密码.png';
            input1.type = 'password';
            flag1 = 0;
        }
    }

    var flag2 = 0;
    var eye_btn2 = document.getElementById('eye2');
    var input2 = document.getElementById('pwd_confirm');
    eye_btn2.onclick = function() {
        if (flag2 === 0) {                                
            this.src = '../../../JavaScript/images/icon/睁眼显示密码.png';
            input2.type = 'text';
            flag2 = 1;
        }
        else {
            this.src = '../../../JavaScript/images/icon/闭眼隐藏密码.png';
            input2.type = 'password';
            flag2 = 0;
        }
    } 
})