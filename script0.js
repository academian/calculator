let mode = 'reg';

function deleteChar(code) {
	let r = code;
	if (r.length > 0) 
		return r.substring(0, r.length - 1);
	else
		return "";
}

function incapsulate(myField, myValue) {
	myField.value = myValue + myField.value + ")";
}

function insertAtCursor(myField, myValue) {
	//IE support
	if (document.selection) {
		myField.focus();
		sel = document.selection.createRange();
		sel.text = myValue;
	}
	//MOZILLA and others
	else if (myField.selectionStart || myField.selectionStart == '0') {
		var startPos = myField.selectionStart;
		var endPos = myField.selectionEnd;
		myField.value = myField.value.substring(0, startPos)
			+ myValue
			+ myField.value.substring(endPos, myField.value.length);
	} else {
		myField.value += myValue;
	}
}