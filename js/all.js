
//get the gallery
var galleryBox = document.querySelector('.gallery');
//create overlay div
var overlay = document.createElement('div');
overlay.setAttribute('id', 'overlay');
//create modal window 
var modalWindow = document.createElement('div');
modalWindow.setAttribute('class','modal');
//create loader 
var loader = document.createElement('div');
loader.setAttribute('class', 'loader');
//slider options 
var options = document.createElement('div');
var zoom = document.createElement('a');
zoom.innerHTML = "Zoom +";
zoom.setAttribute('class', 'zoomImage');
options.appendChild(zoom);
console.log(options);
console.log(zoom);
galleryBox.addEventListener("click", function(e){
	e.preventDefault();
	if(e.target.className != "gallery") {
		console.log(e);
		//if the parent node is an anchor continue
		if(e.target.parentNode.nodeName == "A") {
			
			//add overlay
			overlay.setAttribute('class', 'fadeIn');
			document.body.appendChild(overlay);
			//add loader 
			overlay.appendChild(loader);
			//add content 
			var content = document.createElement('img');
			content.setAttribute('src', e.target.parentNode.attributes.href.value);
			
			content.addEventListener('load', function(c){
				//remove loader 
				overlay.removeChild(loader);
				overlay.appendChild(modalWindow);
				modalWindow.appendChild(content);
			});
			
			
			//click outside of the modal window will close it. 
			overlay.addEventListener('click', function(b){
			//adding the element again will remove the javascript error 
				if(b.target.id == 'overlay') {

					document.body.appendChild(overlay);
					document.body.appendChild(modalWindow);
					modalWindow.appendChild(content);
					document.body.removeChild(overlay);
					modalWindow.removeChild(content);
					document.body.removeChild(modalWindow);

								
			}
			
			
			}, false);
		}	
		
		
		//console.log(e);
	}
	
	
	
	
	
}, false);


