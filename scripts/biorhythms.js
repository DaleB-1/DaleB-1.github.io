/* myBiorhythms.js */
$(document).ready(function() {
	'use strict';
	paper.install(window);
	paper.setup(document.getElementById('mainCanvas'));
	
	// Create a Paper.js Path to draw a line into it:
	var path = new Path();
	from = new Point(100,100);
	to= new Point (10,10);
	path.Line(from,to);

	paper.view.draw();
});
