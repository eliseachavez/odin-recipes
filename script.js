//input form for usesr to choose grid size
const numberInputValue = document.getElementById('numInput').value;
const button = document.getElementById('submit');
const numberInput = document.getElementById('number'); 

/*button.addEventListener('click', () => {
	makeGrid(e);
});
this also works! But I prefer the one below for brevity. 
I'd use the one above if I had more than one parameter
Because it's a function inside a function. It will 
evaluate the inside function first, but it won't have received 
the event data that comes from the event listener fxn first
*/

//one of the mistakes I made below was not realizing the e itself is the value. no need to do e.value
button.addEventListener('click', makeGrid);
//default grid created
makeGrid(16);

function makeGrid(e) {
	var num = e;
	//make a container row for num
//each container row has num cells in it
	//make the divs for each row
	for (let i=1;i<num+1;i++) {
		var container = document.querySelector('#container');
		var divCol = document.createElement('div');

		let concatWord = 'column';
		let concatNum = i.toString();
		let idName = concatWord.concat(concatNum);

		divCol.setAttribute('id',`${idName}`);
		divCol.setAttribute('class','column');

		container.appendChild(divCol);

		//now append num new div nodes to that node just created
		for(let j=1;j<num+1;j++) {
                        var divRow = document.createElement('div');
			
			concatNum = j.toString();
			concatWord = 'row';
			idName = concatWord.concat(concatNum);
			
			divRow.setAttribute('id',`${idName}`);
			divRow.setAttribute('class','row');
			divCol.appendChild(divRow);

                }


	}
}

function clearGrid() {
	var container = document.getElementById('container');
	const inputDiv = container.removeChild(container.firstChild);
	const label = container.removeChild(container.firstChild);
	const number = container.removeChild(container.firstChild);
	//const submit = container.removeChild(container.firstChild);

	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
	
	container.appendChild(inputDiv);
	container.appendChild(label);
	container.appendChild(number);
	//container.appendChild(submit);
}

////hover event that changes div colors? and then do they need to change back? no, that doesn't make sense
const rows = document.querySelectorAll('.row');
const columns = document.querySelectorAll('.column');

rows.forEach((row) => {
	row.addEventListener('mouseover', () => {
		row.setAttribute('style', 'background: black');
	});
});

columns.forEach((column) => {
	column.addEventListener('mouseover', () => {
		column.setAttribute('style', 'background: black');
	});
});
