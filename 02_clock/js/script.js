

const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')



function setDate(){
	const now = new Date();
	const second = now.getSeconds();
	const secondDegrees = ((second / 60) * 360) +90;

	const min = now.getMinutes();
	const minDegrees = ((min / 60) * 360) +90;

	const hour = now.getHours();
	const hourDegrees = ((hour / 12) * 360) +90;


	secondHand.style.transform = `rotate(${secondDegrees}deg)`;
	minHand.style.transform = `rotate(${minDegrees}deg)`;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;


}

setInterval(setDate, 1000);