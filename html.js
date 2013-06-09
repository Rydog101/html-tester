document.getElementById("test").onclick = function() {
	temp = document.tester.box.value; 
	preWindow = open("", "preWindow"," menubar=yes, scrollbars=yes"); 
	preWindow.document.open(); 
	preWindow.document.write(temp); 
	preWindow.document.close(); 
}