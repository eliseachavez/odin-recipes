//input form for usesr to choose grid size
//
//default form created
const container = document.querySelector('#container');
makeGrid(16);

function makeGrid(num) {

	for (let i=1;i<num+1;i++) {
		var container = document.querySelector('#container');
		var div = document.createElement('div');

		let concatWord = 'cell';
		let concatNum = i.toString();
		let idName = concatWord.concat(concatNum);

		div.setAttribute('id',`$(idName)`);
		container.appendChild(div);

	}
}


////hover event that changes div colors? and then do they need to change back? no, that doesn't make sense
