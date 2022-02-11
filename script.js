//input form for user to choose grid size
const button = document.getElementById('submit');
const number = document.getElementById('numInput'); 

/////////////////////////MAIN////////////////////
//default grid created
defaultG(16);

//make grid chosen from number input
button.addEventListener('click', (e) => {
	const num = number.value.toString();
	console.log(num);
	makeGrid(num);
});
///////////////////////////////////////////////

//WANT THE VALUE OF THE EVENT THAT TRIGGERED THE EVENT, NOT THE EVENT ITSELF 

function defaultG(num) {
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

function makeGrid(num) {
	console.log(num);
	clearGrid();
	//make the divs for each row
	for (let i=1;i<num+1;i++) {
		console.log(num);
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

///////////////////////////////////////////////////////////////////////////////////////
function clearGrid() {
	document.querySelectorAll('.column').forEach(e => e.remove());
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////hover event that changes div colors
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
