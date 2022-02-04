//input form for usesr to choose grid size
//
//default form created
const container = document.querySelector('#container');
makeGrid(16);

function makeGrid(num) {
//make a container row for num
//each container row has num cells in it
	//make the divs for each row
	for (let i=1;i<num+1;i++) {
		var container = document.querySelector('#container');
		var divCol = document.createElement('div');

		let concatWord = 'row';
		let concatNum = i.toString();
		let idName = concatWord.concat(concatNum);

		divCol.setAttribute('id',`${idName}`);
		divCol.setAttribute('class','row');
		container.appendChild(divCol);

		//now append num new div nodes to that node just created
		for(let j=1;j<num+1;j++) {
                        var divRow = document.createElement('div');
			
			concatNum = j.toString();
			concatWord = 'column';
			idName = concatWord.concat(concatNum);
			
			divRow.setAttribute('id',`${idName}`);
			divCol.setAttribute('class','column');
			divCol.appendChild(divRow);

                }


	}
}


////hover event that changes div colors? and then do they need to change back? no, that doesn't make sense
