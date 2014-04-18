/**
 * @author benjamin
 */

var slides = document.querySelectorAll(".slide");

var init = function(){
	
	for(var i = 0; i < slides.length; i++) {
		
		slides[i].className = i;
		
		if(i >= 1) {
			slides[i].style.display = "none";
		}
		
		slides[i].addEventListener("click", trigger);
	}
};



var trigger = function() {
	
	var count = this.className; // will always be zero
	
	if(this.nextSibling){
	
		this.style.display = "none";
		
		count++;
		
		if( count != slides.length) {
			slides[count].style.display = "inline";	
		}
		
		else if (count == slides.length){
			slides[0].style.display = "inline";	
			count = 0;
		}

	}

};

init();

