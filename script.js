function toCase(text) {
  // write your code here
	let t=text;
	return text+'-'+t.toUpperCase();
}

// DO not change the code below
const text = prompt("Enter text:");
alert(toCase(text));
