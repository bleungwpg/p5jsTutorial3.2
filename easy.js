var imageEasyBack;


var buttonEasyBackX;
var buttonEasyBackY;


function preloadEasy()
{
	imageEasyBack = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/buttonBack.png');	
}

function setupEasy()
{
	buttonEasyBackX = 10;
	buttonEasyBackY = 50;

}

function drawEasy()
{
	background(0,125,255);

	image(imageEasyBack,buttonEasyBackX,buttonEasyBackY);

	if (mouseX > buttonEasyBackX && mouseX < buttonEasyBackX + 200 && mouseY > buttonEasyBackY && mouseY < buttonEasyBackY+50 && mouseIsPressed)
	{
		canvasID = -1;
	}

}