window.addEventListener ('keydown', function(event) {
 /* Act on the event */
 const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
 if(!audio){return};
 audio.currentTime = 0;
 audio.play();
 const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
 key.classList.add('playing');
 function rem(){
  key.classList.remove('playing');
}
setTimeout(rem, 200);

console.log(audio);
console.log(event.keyCode)
});