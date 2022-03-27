console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted')
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let imageHover = document.getElementById("duck")

duck.addEventListener('mouseover', () =>{
	alert('Hey good lookin')
})




