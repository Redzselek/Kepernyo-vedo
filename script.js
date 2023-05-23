<script>
  var m = window.innerHeight;
  var sz = window.innerWidth;
  var x1 = 10;
  var y1 = 10;
  var x2 = -11;
  var y2 = 11;
  var x3 = 20;
  var y3 = -20;
  var x4 = -10;
  var y4 = -10;


  setInterval(Mozgat1, 100);
  setInterval(Mozgat2, 100);
  setInterval(Mozgat3, 100);
  setInterval(Mozgat4, 100);

  function Mozgat1() {
    var m = window.innerHeight;
    var sz = window.innerWidth;
    var e = document.getElementById("keret1");
    var p = e.getBoundingClientRect();
    if (p.bottom >= m - 20 || p.top <= 0) {
      y1 *= -1;
    }
    if (p.right >= sz - 20 || p.left <= 0) {
      x1 *= -1;
    }
    e.style.top = p.y + y1 + "px";
    e.style.left = p.x + x1 + "px";
    console.log(p.y1);
  }
  function Mozgat2() {
    var m = window.innerHeight;
    var sz = window.innerWidth;
    var e = document.getElementById("keret2");
    var p = e.getBoundingClientRect();
    if (p.bottom >= m - 20 || p.top <= 0) {
      y2 *= -1;
    }
    if (p.right >= sz - 20 || p.left <= 0) {
      x2 *= -1;
    }
    e.style.top = p.y + y2 + "px";
    e.style.left = p.x + x2 + "px";
  }
  function Mozgat3() {
    var m = window.innerHeight;
    var sz = window.innerWidth;
    var e = document.getElementById("keret3");
    var p = e.getBoundingClientRect();
    if (p.bottom >= m - 20 || p.top <= 0) {
      y3 *= -1;
    }
    if (p.right >= sz - 20 || p.left <= 0) {
      x3 *= -1;
    }
    e.style.top = p.y + y3 + "px";
    e.style.left = p.x + x3 + "px";
  }
  function Mozgat4() {
    var m = window.innerHeight;
    var sz = window.innerWidth;
    var e = document.getElementById("keret4");
    var p = e.getBoundingClientRect();
    if (p.bottom >= m - 20 || p.top <= 0) {
      y4 *= -1;
    }
    if (p.right >= sz - 20 || p.left <= 0) {
      x4 *= -1;
    }
    e.style.top = p.y + y4 + "px";
    e.style.left = p.x + x4 + "px";
  }

</script>
