var imageIntroImage;

function preloadIntro()
{
	imageIntroImage = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/buttonIntro.png');	
}

function setupIntro()
{

}

function drawIntro()
{
	background(125,125,125)

	image(imageIntroImage,10,50);

	if (mouseIsPressed)
	{
		canvasID = -1;
	}
}
