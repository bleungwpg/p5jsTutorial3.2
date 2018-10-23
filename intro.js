// part 1
// imagine you have the power of god in a programming world
// you create a variable (think container) out of thin air

var introImage;

function preloadIntro()
{
	introImage = loadImage('https://bleungwpg.github.io/p5jsTutorial3.1/CatInMug.png');	
}

function drawIntro()
{
	background(125,125,125)
//	image(introImage,10,150,1060/3,702/3);
	fill(0,0,0);
	text("This is the Intro page\n\nClick anywhere to continue",10,50);

	if (mouseIsPressed)
	{
		canvasID = 1;
	}
}
