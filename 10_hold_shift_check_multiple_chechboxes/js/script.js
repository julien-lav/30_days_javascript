const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");

let lastChecked; //firstChecked (?)

function handleCheck (e) {
	
	let inBetween = false;
	if(e.shiftKey && this.checked) {

		checkboxes.forEach(checkbox => {
			console.log(checkbox);
			//if(checkbox.checked || checkbox === lastChecked) { // that line also works fine
			if(checkbox === this || checkbox === lastChecked) {
				inBetween = !inBetween;
				console.log(this + ' ici');
			}
			if (inBetween) {
				checkbox.checked = true;
			}
		});
	}
	lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));