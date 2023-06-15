function makeTimer() {

    const dayElement = document.getElementById("days");
    const hourElement = document.getElementById("hours");
    const minElement = document.getElementById("minutes");
    const secElement = document.getElementById("seconds");
    const progressdiv = document.getElementById("progress");
    
    var endTime = new Date("July 17, 2023 00:00:00 GMT+10");			
    var endTime = (Date.parse(endTime)) / 1000;
  
    var now = new Date();
    var now = (Date.parse(now) / 1000);
  
    var timeLeft = endTime - now;
  
    var days = Math.floor(timeLeft / 86400); 
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }
  
  
  
    dayElement.innerHTML = days + "<span>Days</span>";
    hourElement.innerHTML = hours + "<span>Hours</span>";
    minElement.innerHTML = minutes + "<span>Minutes</span>";
    secElement.innerHTML =seconds + "<span>Seconds</span>";		
  
    progressdiv.innerHTML = "Until Saritah's Birthday" + ".".repeat(60 - seconds);
  }
  
  setInterval(function() { makeTimer(); }, 1000);