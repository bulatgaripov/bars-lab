// Создание таблицы
function createTable() {
	var body = document.body;
	
	var table = document.getElementsByTagName("TABLE")[0];
	
	if(table == null) {		
		var table = document.createElement("TABLE");
		
		table.width = "80%";
		
		body.appendChild(table);
	}
}

// Добавления поля для ввода текста
function addInput() {
	
	var input = document.createElement("INPUT");
	input.type = "text";
	input.autofocus = "autofocus";
	
	if(this.innerHTML != "") {
		input.value = this.innerHTML;
		this.innerHTML = "";
	}
	
	var t = this;
	
	input.onblur = function() {
		t.innerHTML = input.value;
	}
	
	this.appendChild(input);
}

// Добавление строки
function addRow() {
	var table = document.getElementsByTagName("TABLE")[0];

	if(table != null) {	
		var newRow = table.insertRow(0);
		var newCell = newRow.insertCell(0);
		
		newCell.width = "50px";
		newCell.height = "50px";
		
		newCell.ondblclick = addInput;
		
		if(table.rows.length > 1) {
			for(var i = 0; i < table.rows[1].cells.length - 1; i++) {
				newCell = newRow.insertCell(1);
				newCell.width = "50px";
				newCell.height = "50px";
				
				newCell.ondblclick = addInput;
			}
		}
	}
}

// Добавление столбца
function addColumn() {
	var table = document.getElementsByTagName("TABLE")[0];
	
	if(table != null) {
		var trArr = table.getElementsByTagName('TR');
		var newCell;
		
		for(var i = 0; i < trArr.length; i++) {
			newCell = trArr[i].insertCell(1);
			newCell.width = "50px";
			newCell.height = "50px";
				
			newCell.ondblclick = addInput;
		}
	}
}
