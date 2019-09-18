(function(){
  var updateHour = function(){
    var date = new Date();

    var hour = date.getHours(), min = date.getMinutes(),
    sec = date.getSeconds(), ampm, dayW = date.getDay(),
    day = date.getDate(), month = date.getMonth(),
    year = date.getFullYear();

    var pHour = document.getElementById('hour');
    var pMin = document.getElementById('min');
    var pSec = document.getElementById('seconds');
    var pAMPM = document.getElementById('ampm');

    var pDayWeek = document.getElementById('dayWeek');
    var pDay = document.getElementById('day');
    var pMonth = document.getElementById('month');
    var pYear = document.getElementById('year');

    var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    pDayWeek.textContent=week[dayW];
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    pMonth.textContent=months[month];
    pDay.textContent=day;
    pYear.textContent=year;

    if(hour>=12) {
      hour=hour-12;
      ampm='PM';
    } else {
      ampm='AM';
    }
  
    if(hour==0) {
      hour=12;
    }

    if(min<10) {
      min="0" + min;
    }

    if(sec<10){
      sec="0" + sec;
    }

    pHour.textContent=hour;
    pMin.textContent=min;
    pSec.textContent=sec;
    pAMPM.textContent=ampm;
  }
  updateHour();
  var inter= setInterval(updateHour,1000);
})();