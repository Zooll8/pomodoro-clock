bt = 5;
st = 25;
deftime = 1500000;
qwerty = 1;

function tominsec(n) {
  n = n / 1000;
  k = n;
  min = Math.floor(k / 60);
  sec = n - min * 60;
  return min + ":" + sec;
}
$(document).ready(function() {
  document.getElementById("session").innerHTML = st;
  document.getElementById("break").innerHTML = bt;
  document.getElementById("vremya").innerHTML = tominsec(deftime);

  $("#breakminus").click(function() {
    if (qwerty !== 0) {
      if (bt > 1) {
        bt = bt - 1;
        document.getElementById("break").innerHTML = bt;
      }
    }
  })
  $("#breakplus").click(function() {
    if (qwerty !== 0) {
      if (bt < 20) {
        bt = bt + 1;
        document.getElementById("break").innerHTML = bt;
      }
    }
  })
  $("#sessionplus").click(function() {
    if (qwerty !== 0) {
      if (st < 60) {
        st = st + 1;
        document.getElementById("session").innerHTML = st;
        document.getElementById("vremya").innerHTML = st + ":0";
      }
    }
  })
  $("#sessionminus").click(function() {
    if (qwerty !== 0) {
      if (st > 1) {
        st = st - 1;
        document.getElementById("session").innerHTML = st;
        document.getElementById("vremya").innerHTML = st + ":0";
      }
    }
  })
  $(".clicker").click(function() {
    if (qwerty == 1) {
      qwerty = 0;
      lol = deftime;
      qwe = st * 60000;
      zhe = bt * 60000;
      timer = setTimeout(function tick() {
        if (qwe >= 1000) {
          qwe = qwe - 1000;
          document.getElementById("vremya").innerHTML = tominsec(qwe);
          document.getElementById("work").innerHTML = "Work NOW!!";
        } 
          else if (qwe == 0 && zhe >= 1000) {
          zhe = zhe - 1000;
          document.getElementById("vremya").innerHTML = tominsec(zhe);
          document.getElementById("work").innerHTML = "Do nothing now, dude";
        } else if (zhe==0){
          alert("SET UP NEXT POMODORO!, YOOO");
          zhe=-1;
          bt = 5;
    st = 25;
    document.getElementById("break").innerHTML = bt;
    document.getElementById("session").innerHTML = st;
    qwerty = 1;
    clearTimeout(timer);
    document.getElementById("vremya").innerHTML = st + ":0";
    document.getElementById("work").innerHTML = "<span class='glyphicon glyphicon-arrow-up'></span>Click button<span class='glyphicon glyphicon-arrow-up'></span>";
        }
        timer = setTimeout(tick, 1000);
      }, 1000);

    }
  })
  $("#last").click(function() {
    bt = 5;
    st = 25;
    document.getElementById("break").innerHTML = bt;
    document.getElementById("session").innerHTML = st;
    qwerty = 1;
    clearTimeout(timer);
    document.getElementById("vremya").innerHTML = st + ":0";
    document.getElementById("work").innerHTML = "<span class='glyphicon glyphicon-arrow-right'></span>Click button<span class='glyphicon glyphicon-arrow-left'></span>";
  })
})