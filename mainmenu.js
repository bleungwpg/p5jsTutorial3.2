var buttonMainMenu1Nothing;
var buttonMainMenu1HoverOver;
var buttonMainMenu1Click;
var buttonMainMenu2Nothing;
var buttonMainMenu2HoverOver;
var buttonMainMenu2Click;


var buttonMainMenu1X;
var buttonMainMenu1Y;
var buttonMainMenu2X;
var buttonMainMenu2Y;


function preloadMainMenu()
{
	/*
	buttonMainMenu1Click = loadImage('https://bleungwpg.github.io/p5jsTutorial3.1/buttonClick.png');
	buttonMainMenu1HoverOver = loadImage('https://bleungwpg.github.io/p5jsTutorial3.1/buttonHoverOver.png');
  	buttonMainMenu1Nothing = loadImage('https://bleungwpg.github.io/p5jsTutorial3.1/buttonNothing.png');

	buttonMainMenu2Click = loadImage('https://bleungwpg.github.io/p5jsTutorial3.1/buttonClick.png');
	buttonMainMenu2HoverOver = loadImage('https://bleungwpg.github.io/p5jsTutorial3.1/buttonHoverOver.png');
  	buttonMainMenu2Nothing = loadImage('https://bleungwpg.github.io/p5jsTutorial3.1/buttonNothing.png');
*/
}

function setupMainMenu()
{
	
	buttonMainMenu1X = 200;
	buttonMainMenu1Y = 110;
	buttonMainMenu2X = 200;
	buttonMainMenu2Y = 210;

}

function drawMainMenu()
{
	background(125,125,125)

	if (mouseX > buttonMainMenu1X && mouseX < buttonMainMenu1X + 200 && mouseY > buttonMainMenu1Y && mouseY < buttonMainMenu1Y+50)
	{
		fill(255,0,0);
		rect(buttonMainMenu1X,buttonMainMenu1Y,200,50);
		if (mouseIsPressed)
		{
			fill(255,255,0);
			rect(buttonMainMenu1X,buttonMainMenu1Y,200,50);
		}
	}
	else
	{
		fill(0,255,125);
		rect(buttonMainMenu1X,buttonMainMenu1Y,200,50);
	}

	fill(0,0,0);
	text("Easy",buttonMainMenu1X+50,buttonMainMenu1Y+30);




	if (mouseX > buttonMainMenu2X && mouseX < buttonMainMenu2X + 200 && mouseY > buttonMainMenu2Y && mouseY < buttonMainMenu2Y+50)
	{
		fill(0,0,255);
		rect(buttonMainMenu2X,buttonMainMenu2Y,200,50);
		if (mouseIsPressed)
		{
			fill(0,255,255);
			rect(buttonMainMenu2X,buttonMainMenu2Y,200,50);
		}
	}
	else
	{
		fill(125,255,0);
		rect(buttonMainMenu2X,buttonMainMenu2Y,200,50);
	}

	fill(0,0,0);
	text("Hard",buttonMainMenu2X+50,buttonMainMenu2Y+30);



}