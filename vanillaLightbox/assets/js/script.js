var insert = null,
    child = null,
    image = null;
var lightbox = document.getElementById("lightbox");
var matches = document.querySelectorAll("a.dialog");
var images = document.querySelectorAll("img");

// create div with id=lightbox
var newDiv = document.createElement("div");
newDiv.setAttribute("id", "lightbox");

// add event listeners to all matches
for (var i = 0; i < matches.length; i++) {
	matches[i].addEventListener('click', trigger);
}


function trigger(e) {

	e.preventDefault();
	image_href = this.getAttribute('href');

	if (!lightbox) {

		// create p as child element of #lightbox
		child = document.createElement("p");
		newDiv.appendChild(child);

		// create image and set its source as the href of the image clicked, and add the image to the div
		image = document.createElement("img");
		image.setAttribute("src", image_href);
		newDiv.appendChild(image);

		// put the div in the dom
		insert = document.getElementById("contain");
		document.body.insertBefore(newDiv, insert);

		// call close function if the lightbox is clicked
		lightbox = document.getElementById("lightbox");
		lightbox.addEventListener('click', close);

		// call keyPress function if one of left, right and esc is pressed
		window.onkeydown = keyPress;


	}

	// if the lightbox already exists, add the image to it
	else {
		//unhide the lightbox
		lightbox = document.getElementById("lightbox");
		lightbox.style.display = "inline";
		//update the image being viewed
		image.setAttribute("src", image_href);
	}

}

// close the lightbox
function close() {
	lightbox = document.getElementById("lightbox");
	lightbox.style.display = "none";

}

// view the next lightbox image
function nextLightboxImage() {
	for (var i = 0; i < images.length; i++) {
		var nextImageInLightbox = images[i].getAttribute("src", image_href);
		var currentImageInLightbox = image.getAttribute("src", image_href);
		if (nextImageInLightbox == currentImageInLightbox) {
			i++;
			var update = images[i].getAttribute("src", image_href);
			image.setAttribute("src", update);
		}
	}
}

// view the previous lightbox image
function prevLightboxImage() {
	for (var i = 0; i < images.length; i++) {
		var prevImageInLightbox = images[i].getAttribute("src", image_href);
		var currentImageInLightbox = image.getAttribute("src", image_href);
		if (prevImageInLightbox == currentImageInLightbox) {
			i--;
			var update = images[i].getAttribute("src", image_href);
			image.setAttribute("src", update);
		}
	}
}

// handle left, right and esc key events
function keyPress(event) {
	var key = event.keyCode || event.which;
	// esc key 
	if (key == 27) {
		close();
	} 
	// right arrow key
	else if (key == 39) {
		nextLightboxImage();
	} 
	// left arrow key 
	else if (key == 37) {
		prevLightboxImage();
	}
}