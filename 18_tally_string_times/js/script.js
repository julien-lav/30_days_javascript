
const text = document.querySelector('.total');

const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
	.map(node => node.dataset.time)
	.map(timeCode => {
		const [mins, secs] = timeCode.split(':').map(parseFloat);
		return (mins * 60) + secs;
		console.log(mins, secs);
	})
	.reduce((total, vidSeconds) => total + vidSeconds);


	let secondsLeft = seconds;
	const hours = Math.floor(secondsLeft / 3600);

	secondsLeft = secondsLeft % 3600;

	const minutes = Math.floor(secondsLeft / 60);

	secondsLeft = secondsLeft % 60;


text.innerHTML = hours + ' heure(s) ' + minutes + ' min(s) ' + secondsLeft;


/*--------*/

myArray = [1,2,3,4]; 

// myArray.reduce((acc, val) => acc + val);

// Summing
output = myArray.reduce((acc, val, i , arr) =>
	{
		console.log(
			'acc:', acc,
			'val:', val,
			'index:', i,
			'arr:', arr);
		return acc + val;
	}, 100);
console.log('output:', output);

// Flatten an array of arrays:

myData = [[8,6],[4,5,6],[2]];
output2 = myData.reduce((acc, val) => {
	return acc.concat(val);

},[]);

//get the average of elements in array
myTransactions = [12.50, 3.84, 2.97];
average = myTransactions.reduce((acc, val, i , arr) => {
	acc += val;
	if(i === arr.length-1) {
		return acc/arr.length;		
	}
	else {
		return acc;
	}
});

console.log('average: ' + average);
