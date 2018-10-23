// part 1
// imagine you have the power of god in a programming world
// you create a variable (think container) out of thin air


var canvasID;

function preload()
{
	// part 2
	// now that you have created a variable it is time to put some 
	// data into the variable, the code below does that
	preloadIntro();
	preloadMainMenu();

}

function setup()
{
	createCanvas(800,600);

	setupMainMenu();

	canvasID = 0;
}

function draw()
{
	textSize(32);

	background(125,125,125)

	if (canvasID == 0)
	{
		drawIntro();
	}
	if (canvasID == 1)
	{
		drawMainMenu();
	}

}