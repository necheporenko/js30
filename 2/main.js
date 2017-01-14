var secondHand = document.querySelector('.second-hand');
var minHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');

function setDate() {
  var time = new Date();
  var seconds = time.getSeconds();
  var secondsDeg = ((seconds/60)*360 + 90);
  var minutes = time.getMinutes();
  var minutesDeg = ((minutes/60)*360 + 90);
  var hours = time.getHours();
  var hoursDeg = ((hours/24)*360 + 90);

  secondHand.style.transform = `rotate(${secondsDeg}deg)`;
  minHand.style.transform = `rotate(${minutesDeg}deg)`;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(setDate, 1000);