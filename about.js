console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Successful Submit!')
}
function pictureMouseover(evt) {
	evt.preventDefault();
	alert('Congratulations!')
}
let picture = document.querySelector('img');

picture.addEventListener('mouseover', pictureMouseover);

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);