
/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

const starters = [video, toggle];

/* Build out functions */

function togglePlay(){
	video[video.paused ? 'play' : 'pause']();
	toggle.textContent = video.paused ? '►' : '❚❚';	
} 

function skip(){
	video.currentTime += parseFloat(this.dataset.skip);
}
 
function handleRangeUpdate(){
	video[this.name] = this.value;

}

function handleProgress(){
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration ; 
	video.currentTime = scrubTime;
	console.log(e);
}

/* Hook up the event listners */

video.addEventListener('timeupdate', handleProgress);
progress.addEventListener('click', scrub);

let mousedown = false;

progress.addEventListener('mousemmove', ()=> { if(mousedown){
	scrub();
		}
});


//progress.addEventListener('mousemmove', (e)=> mousedown && scrub(e));
progress.addEventListener('mousedown', ()=> mousedown = true);

progress.addEventListener('mouseup', ()=> mousedown = false);

starters
	.forEach(start => start.addEventListener('click', togglePlay));
skipButtons
	.forEach(button => button.addEventListener('click', skip));
ranges
	.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges
	.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));



/*
function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  console.log(icon);
  toggle.textContent = icon;
}
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

// Separate because some people using plugging (or remote ?)
// So you check if it's playing or not - not taking care of 'click'
*/