const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
	if(video.paused){
		video.play();
		toggle.textContent = '►';
	} else {
		video.pause();
		toggle.textContent = '❚ ❚';
	}
//	const method = video.paused ? 'play' : 'pause';
// 	video[method]();
};
function skip() {
	video.currentTime += parseFloat(this.dataset.skip);
};

function changeRange() {
	video[this.name] = this.value;
	//console.log(this.name);
	//console.log(this.value);
};

function changeProgress() {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = percent+"%";
};

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', changeProgress);

skipButtons.forEach( btn => btn.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('mousemove', changeRange));
ranges.forEach(range => range.addEventListener('change', changeRange));

progress.addEventListener('click', scrub);
let mousedown = false;
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);