setTimeout(function(){

	document.getElementById('loadcircle').className = "animated bounce";
	document.getElementById('loadimg').className = "animated bounce";

},2000);
setTimeout(function(){

	document.getElementById('upper').className = "animated slideOutUp";
	document.getElementById('loadcircle').className = "animated fadeOutUp";
	document.getElementById('lower').className = "animated slideOutDown";
	document.getElementById('left').className = "animated fadeOut";
	document.getElementById('right').className = "animated fadeOut";


},2800);

setTimeout(function(){

	TweenMax.to(["#img"],0.6,{y:-283});
	document.getElementById('img').style.transform = "scale(0.4)";

},2900);
setTimeout(function(){

	document.getElementById('loadimg').className = "animated infinite pulse";
	document.getElementById('midop3').style.zIndex = "12";

},3000);

