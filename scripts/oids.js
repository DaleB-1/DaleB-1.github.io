function oids() {
	
	//code for pausing after drawing each line is from:
	//http://jsfiddle.net/diode/pQ4Qg/11/
	//without this, the whole oid gets rendered in one go

	var a = parseFloat(document.getElementById("aValue").value);
	var b = parseFloat(document.getElementById("bValue").value);
	var stepValue = parseInt(document.getElementById("stepValue").value);
	var target = parseInt(document.getElementById("target").value);
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	if (a>0 && b>0 && stepValue>0){
		var r = 200;
		var t,x,y,x2,y2;
		var p = 3.1415926;
		var coords = [];
		for (var i = 0; i < target + 1; i=i+stepValue) {
			t = i*p/180;
			x1 = r*Math.cos(t)+c.width/2;
			y1 = r*Math.sin(t)+c.height/2;
			storeCoord(x1, y1, coords);
			x2 = r*Math.cos(a*t)+c.width/2;
			y2 = r*Math.sin(b*t)+c.height/2;
			storeCoord(x2, y2, coords);
		}
		var lc = document.getElementById("lineColour").value;
		var pointCount = 0;
		var intervalID;
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.beginPath();
		ctx.strokeStyle = "rgb(155, 102, 102)";
		
		startLine(ctx);
		
		function startLine(ctx) {
			pointCount = 0;
			intervalID = setInterval(drawLine, 50, ctx);
		}
		
		function drawLine(context) {
			var point1 = coords[pointCount];
			console.log(pointCount, point1.x, point1.y);
			context.moveTo(point1.x, point1.y);
			pointCount++;
			var point2 = coords[pointCount];
			console.log(pointCount, point2.x, point2.y);
			context.lineTo(point2.x, point2.y);
			pointCount++;
			var rc = Math.random() * 255;//pointCount % 255;
			var gc = Math.random() * 255;//(255 - pointCount) % 255;
			var bc = Math.random() * 255;//(128 + pointCount) % 255;
			lc = "rgb(" + rc + ", " + gc + ", " + bc + ")";
			context.strokeStyle = lc;
			context.stroke();
			if (pointCount == coords.length) {
					clearInterval(intervalID);
			}
		}
	} else {
		alert("Something is missing");
	}
}
function storeCoord(xVal, yVal, array) {
    array.push({x: xVal, y: yVal});
}
