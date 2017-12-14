let boxwidth;
let Halfboxwidth;
let angle = 0;
let maxD = 0;
let halfWidth;
let halfHeight;
let mycanvas;
let color = 0;
function setup() {
	mycanvas = createCanvas(innerWidth/2, innerHeight, WEBGL);
    	mycanvas.position(width/2,0);
    	halfWidth = width / 2;
	halfHeight = height / 2;
   	maxD = dist(0,0,halfWidth, halfHeight);
    	boxwidth = innerHeight/ 15;
    	Halfboxwidth = boxwidth / 2;
}    
function draw() {
  	color ++;
	background(255);
	ambientLight(100);
	pointLight(250,100,1200, (color%360), 25, 25);
	ambientMaterial(255);
    	pointLight(250, (color%360),0, 0, (color%360), 25);
	ambientMaterial(255);
    	pointLight(250, 0, 0, 0, (color%360), 25);
	ambientMaterial(255);
	ortho(-width, width, -height, height, 0, width+height);
	rotateX(atan(cos(QUARTER_PI)));
	rotateY(angle/10);
    	if(mouseIsPressed)
       	{
        	rotateX(mouseY/100);
        	rotateY(-mouseX/100);
       	}
	let offset = 0;
	for(let z = 0; z < height; z += boxwidth)
	{
		for(let x = 0; x < width; x += boxwidth)
		{
			push();
			let d = dist(x, z, halfWidth - Halfboxwidth, halfHeight - Halfboxwidth);
			offset = map(d, 0 ,maxD, -PI + 1, PI + 1);
			let ht = floor(map(sin(angle + offset), -1, 1, halfHeight/2, height));
			translate(x - halfWidth + Halfboxwidth, 0 , z - halfHeight + Halfboxwidth);
			box(boxwidth, ht, boxwidth);
			pop();
		}	
	}
	angle -= 0.05;
}
