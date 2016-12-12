function ReturnTop() {
        this.moving = 0;
        this.init();
}
ReturnTop.prototype = {
    constructor: ReturnTop,
    init: function() {
        var self = this,
            // $returntop = $("#returntop").hide();
        $returntop = document.querySelector('#returntop');
        if(!$returntop){
            $returntop = document.createElement('div');
            $returntop.id = 'returntop';
            $returntop.className = 'go-top';
            document.body.appendChild($returntop);
        }
        $returntop.style.display = 'none';
        window.onscroll = function() {
            $returntop.style.display = document.body.scrollTop > 500 ? 'block' : 'none';
        }
        $returntop.addEventListener("click", function() {
            $returntop.className = 'go-top active';
            self.topMove(document.body, 30);
        },false);
    },
    returnTop: function() { //TODO 重构完了这个就不用了

    },
    topMove: function(obj, time) {
        var that = this;
        this.moving = 1;
        if (time > 30) var s = Math.round(time / 30)
        else var s = 1;
        obj.timer = setInterval(function() {
            var bStop = true;
            var t = obj.scrollTop;
            var speed = (0 - t) / (s / 2);
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (0 != obj.scrollTop) {
                bStop = false;
            }
            obj.scrollTop = t + speed;
            if (bStop) {
                var $returntop = document.querySelector('#returntop');
                $returntop.className = 'go-top';
                clearInterval(obj.timer);
                that.moving = 0
            }
        }, 30);
    }
}

//返回顶部动画组件
function topMove(obj,time) {
    if (time > 30) var s = Math.round(time / 30)
    else var s = 1;
    obj.timer = setInterval(function (){
        var bStop = true;
        var t = obj.scrollTop;
        var speed = (0 - t) / (s / 2); 
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if(0 != obj.scrollTop)  bStop = false;
        obj.scrollTop = t + speed;
        if(bStop) clearInterval(obj.timer);
    }, 30);
};