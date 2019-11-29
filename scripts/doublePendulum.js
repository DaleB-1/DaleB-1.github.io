function doublePendulum(what) {
	
	//base code is from http://www.physicsandbox.com/projects/double-pendulum.html
	
	var canvas  = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');
	init = parseFloat(document.getElementById("init").value);

	if (what == 'go') {
		if (Number.isNaN(init)) {
			//input variables
			var m1 = parseFloat(document.getElementById("mass1").value);
			var m2 = parseFloat(document.getElementById("mass2").value);
			var Theta1 = parseFloat(document.getElementById("theta1").value)/180*(Math.PI);
			var Theta2 = parseFloat(document.getElementById("theta2").value)/180*(Math.PI);
			
			//Physics Constants
			var dTheta1  = 0;
			var dTheta2  = 0;
			var d2Theta1 = 0;
			var d2Theta2 = 0;
			var g      = 9.81;
			var time   = 0.05;

			var l1     = 150;
			var l2     = 150;
			var X0     = canvas.width/2; //150;
			var Y0     = l2;
			
			var intervalID = "null";

			var init    = {};

			run();

			function drawCircle(myCircle, context) {
				context.beginPath();
				context.arc(myCircle.x, myCircle.y, myCircle.mass, 0, 2 * Math.PI, false);
				context.fillStyle = '#000';
				context.fill();
				context.lineWidth = 5;
				context.strokeStyle = 'black';
				context.stroke();
			}

			function drawLine(myLine, context) {
				context.beginPath();
				context.moveTo(myLine.x0, myLine.y0);
				context.lineTo(myLine.x, myLine.y);
				context.strokeStyle = 'red';
				context.stroke();
			}

			function animate(myCircle1, myCircle2, myLine1, myLine2, canvas, context) {
				document.getElementById("init").value = init; 
				mu        =  1+m1/m2;
				d2Theta1  =  (g*(Math.sin(Theta2)*Math.cos(Theta1-Theta2)-mu*Math.sin(Theta1))-(l2*dTheta2*dTheta2+l1*dTheta1*dTheta1*Math.cos(Theta1-Theta2))*Math.sin(Theta1-Theta2))/(l1*(mu-Math.cos(Theta1-Theta2)*Math.cos(Theta1-Theta2)));
				d2Theta2  =  (mu*g*(Math.sin(Theta1)*Math.cos(Theta1-Theta2)-Math.sin(Theta2))+(mu*l1*dTheta1*dTheta1+l2*dTheta2*dTheta2*Math.cos(Theta1-Theta2))*Math.sin(Theta1-Theta2))/(l2*(mu-Math.cos(Theta1-Theta2)*Math.cos(Theta1-Theta2)));
				dTheta1   += d2Theta1*time;
				dTheta2   += d2Theta2*time;
				Theta1    += dTheta1*time;
				Theta2    += dTheta2*time;

				myCircle1.x = X0+l1*Math.sin(Theta1);
				myCircle1.y = Y0+l1*Math.cos(Theta1);
				myCircle2.x = X0+l1*Math.sin(Theta1)+l2*Math.sin(Theta2);
				myCircle2.y = Y0+l1*Math.cos(Theta1)+l2*Math.cos(Theta2);

				myLine1.x  = myCircle1.x;
				myLine1.y  = myCircle1.y;
				myLine2.x0 = myCircle1.x;
				myLine2.y0 = myCircle1.y;
				myLine2.x  = myCircle2.x;
				myLine2.y  = myCircle2.y;

				context.clearRect(0, 0, canvas.width, canvas.height);

				drawLine(myLine1, context);
				drawLine(myLine2, context);
				drawCircle(myCircle1, context);
				drawCircle(myCircle2, context);
			}

			function run(){
				var myLine1 = {x0: X0, y0: Y0, x: 0, y: 0};
				var myLine2 = {x0: 0, y0: 0, x: 0, y: 0};
				var myCircle1 = {x: X0+l1*Math.sin(Theta1), y: Y0+l1*Math.cos(Theta1), mass: m1};
				var myCircle2 = {x: X0+l1*Math.sin(Theta1)+l2*Math.sin(Theta2), y: Y0+l1*Math.cos(Theta1)+l2*Math.cos(Theta2), mass: m2};

		//console.log("before clear: ", init);
				clearInterval(init);
		//console.log("after clear");
				context.clearRect(0, 0, canvas.width, canvas.height);
				init = setInterval(function(){animate(myCircle1, myCircle2, myLine1, myLine2, canvas, context);},10);
			}
		}
	} else {
		clearInterval(init);
		context.clearRect(0, 0, canvas.width, canvas.height);
		document.getElementById("init").value = "";
	}
}
