const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
			// This gonna try to get it from localstorage if not, it will be an empty array.

function addItem(e){
	e.preventDefault();
	const text = (this.querySelector('[name=item]')).value;
	//this here => is the all 'form'
	const item = {
		text,
		done: false
	};
	items.push(item);
	populateList(items, itemsList);
	
	localStorage
		.setItem('items', JSON.stringify(items));
	this.reset(); // console.table(items);
}

function populateList(plates = [], platesList){
	platesList.innerHTML = plates.map((plate, i) => {
		return `
			<li>
			<input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
			<label for="item${i}">${plate.text}</label>
			</li>
		`;
	}).join('');
}

function toggleDone(e){
	if(!e.target.matches('input')) return; // Skip unless it's an input
	const el = e.target;
	const index = el.dataset.index;
	items[index].done = !items[index].done; 

	localStorage
		.setItem('items', JSON.stringify(items));
	populateList(items, itemsList);

}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);