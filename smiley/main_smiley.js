// This is a script which is included in the html code 
// (index_smiley.html). We use it to perform some programming 
// operations on the html elements and their attributes.
 

	// ---> note: Each html element has various attributes, 
	// which can be googled. there are also some common
	// properties for all elements.


// Make an 'img' element a Javascript variable
let s = document.getElementById("im_smiley");

// Make a 'button' element a Javascript variable
let b = document.getElementById("but_smiley");


	// ---> note: getElementById searches for the element   
	// with a certain id. We also can use 
	// getElementByTagName().


// create a 'click state' variable
var click=0;
var angle = 0;


// Function to define what happens on a click
function clickfun() {

    //change the click state (on/off)	
	click=!click;
	
	//if ON
	if (click==1){
	b.innerHTML='Stop :-)';
	movesmiley();
	}
	//if OFF 
	else {b.innerHTML='Start again!';}

}

// function that moves the smiley and the button
function movesmiley() {

    if (click==1){
    angle+=0.03;
    //change width of the smile
    s.width=200*Math.sin(angle)+500;
    //change the left margin of the button
    b.style.left=100*Math.cos(angle)+200 +"px";
    //change the top margin of the button
    b.style.top=50*Math.sin(angle)+100 +"px";
    //call this function again
    window.requestAnimationFrame(movesmiley);
    }
		
}	



	
	

	

