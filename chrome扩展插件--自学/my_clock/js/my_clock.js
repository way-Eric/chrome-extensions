function my_clock (el) {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = m >= 10 ? m : ('0' + m);
    s = s >= 10 ? s : ('0' + s);
    el.innerHTML = h + ":" + m + ":" + s;
    el.style.color = randomColor()
    setTimeout(function(){my_clock(el)}, 1000);
}
function randomColor () {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
  }
var clock_div = document.getElementById('clock_div');
my_clock(clock_div);