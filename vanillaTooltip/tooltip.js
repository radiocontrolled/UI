var input = document.getElementById("input");
var tooltip = null;
var tooltipContents = "Hi, I'm a tooltip.";
var box = document.createElement("div");

box.setAttribute("id","focus");
box.style.display = "none";

function showTooltip(){
	box.style.display = "inline";
	tooltip = document.getElementById("focus");
	box.innerHTML = tooltipContents;
	input.parentNode.insertBefore(box,input.nextSibling);
}

function hideToolTip(){
	box.remove();
}

//mouse event listener 
input.addEventListener('mouseover', showTooltip);
input.addEventListener('mouseleave', hideToolTip);

//event handler for keyboard events on the input
input.onfocus = showTooltip;
input.onblur = hideToolTip;

