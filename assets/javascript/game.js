// array of answers
var answers = ["The Bad Beginning",
	"The Reptile Room", 
	"The Wide Window", 
	"The Miserable Mill", 
	"The Austere Academy", 
	"The Ersatz Elevator", 
	"The Vile Village",  
	"The Hostile Hospital", 
	"The Carnivorous Carnival", 
	"The Slippery Slope",  
	"The Grim Grotto", 
	"The Penultimate Peril", 
	"The End"
];

// change all titles to all caps

for(var i = 0; i < answers.length; i++) {

	answers[i] = answers[i].toUpperCase();
	console.log(answers[i]);

}

// array of blanks
var blanks = ["___ ___ _________", /*3 3 9 The Bad Beginning*/
	"___ _______ ____", /*3 7 4 The Reptile Room*/
	"___ ____ ______", /*3 4 6 The Wide Window*/
	"___ _________ ____", /*3 9 4 The Miserable Mill*/
	"___ _______ _______", /*3 7 7 The Austere Academy*/
	"___ ______ ________", /*3 6 8 The Ersatz Elevator*/
	"___ ____ _______", /*3 4 7 The Vile Village*/
	"___ _______ ________",/*3 7 8 The Hostile Hospital*/
	"___ ___________ ________", /*3 11 8 The Carnivorous Carnival*/
	"___ ________ _____", /*3 8 5 The Slippery Slope*/
	"___ ____ ______", /*3 4 6 The Grim Grotto*/
	"___ ___________ _____", /*3 11 5 The Penultimate Peril*/
	"___ ___" /*3 3 The End*/

];

// array of quotes
var quotes = ['<p>“In this book, not only is there no happy ending, there is no happy beginning and very few happy things in the middle.”<br><em>― Lemony Snicket, <u>The Bad Beginning</u></em></p>', 
	'<p>“If only Uncle Monty knew what we know and Stephano knew that he knew what we know. But Uncle Monty doesn&#39t know what we know, and Stephano knows that he doesn&#39t know what we know.”<br><em>― Violet Baudelaire, <u>The Reptile Room</u></em></p>', 
	'<p>“If you are allergic to a thing, it is best not to put that thing in your mouth, particularly if the thing is cats.”<br><em>― Lemony Snicket, <u>The Wide Window</u></em></p>',
	'<p>“The expression &#39quiet as mice&#39 is a puzzling one, because mice can often be very noisy, so people who are being quite as mice may in fact be squeaking and scrambling around.”<br><em>― Lemony Snicket, <u>The Miserable Mill</u></em></p>',
	'<p>"Hello, you cakesniffers, although judging from the baby brat you&#39re more like saladsniffers. I have another message for you from Coach Genghis. I get to be his Special Messenger because I&#39m the cutest, prettiest, nicest little girl in the whole school.”<br><em>― Carmelita Spats, <u>The Austere Academy</u></em></p>',
	'<p>"Even though I am unbelievably wealthy, you may call me Esm&eacute.  I&#39ll learn your names later.  I&#39m very happy you&#39re here, because orphans are in, and when all my friends hear that I have three real live orphans, they&#39ll be sick with jealousy”<br><em>― Esm&eacute Squalor, <u>The Ersatz Elevator</u></em></p>',
	'<p>"If you refuse to entertain a baby cousin, the baby cousin may get bored and entertain itself by wandering off and falling down a well. If you refuse to entertain a pack of hyenas, they may become restless and entertain themselves by devouring you.”<br><em>― Lemony Snicket, <u>The Vile Village</u></em></p>',
	'<p>"Operating theaters are not nearly as popular as dramatic theaters, musical theaters, and movie theaters, and it is easy to see why.”<br><em>― Lemony Snicket, <u>The Hostile Hospital</u></em></p>',
	'<p>"But the sad truth is that the truth is sad, and that what you want does not matter.  A series of unfortunate events ca happen to anyone, no matter what they want.”<br><em>― Lemony Snicket, <u>The Carnivorous Carnival</u></em></p>',
	'<p>"The poet found that the road less traveled was peaceful but quite lonely, and he was probably a bit nervous as he went along, because if anything happened on the road less traveled, the other travelers would be on the road more frequently traveled and so couldn&#39t hear him as he cried for help. Sure enough, that poet is dead.”<br><em>― Lemony Snicket, <u>The Slippery Slope</u></em></p>',
	'<p>"Having a personal philosophy is like having a pet marmoset, because it may be very attractive when you acquire it, but there may be situations when it will not come in handy at all.”<br><em>― Lemony Snicket, <u>The Grim Grotto</u></em></p>',
	'<p>"It is a policy of our organization that all picnics travel separately from the volunteers.  If our enemies capture the picnic, they won&#39t get their clutches on us, and if our enemies capture us, they won&#39t get the picnic.”<br><em>― Kit Snicket, <u>The Penultimate Peril</u></em></p>',
	'<p>"Of course I&#39m trying to trick you! That&#39s the way of the world, Baudelaires. Everyone runs around with their secrets and their schemes, trying to outwit everyone else”<br><em>― Count Olaf, <u>The End</u></em></p>'
]; 

// array of image links 
var bookCovers = ["../images/BadBeginning.jpg",
	"../images/ReptileRoom.png",
	"../images/WideWindow.png",
	"../images/MiserableMill.png",
	"../images/AustereAcademy.jpg",
	"../images/ErsatzElevator.jpg",
	"../images/VileVillage.jpg",
	"../images/HostileHospital.jpg",
	"../images/CarnivorousCarnival.png",
	"../images/SlipperySlope.jpg",
	"../images/GrimGrotto.jpg",
	"../images/PenultimatePeril.JPG",
	"../images/TheEnd.jpg"
];

// array of player guesses 
var guesses = [];

var wins = 0;
var losses = 0;
var guessesLeft = 20;

// when user presses a key, it will run the function
document.onclick = function(event) {
	var randomIndex = Math.floor(Math.random() * 13);
	console.log(randomIndex);
	

// create HTML that will go in blank spaces and inject it into h3
	var blanksDisplayed = blanks[randomIndex];

	document.querySelector("#blankSpaces").innerHTML = blanksDisplayed;

// if user inputs a letter matching in answers[same index], 
// display that letter in correct string index(es),


 
// add user input to guesses array and subtract from guessesLeft




//if user input matches letter to guesses, alert message from Genghis


	alert('You\'ve already guessed that! \n "Not only am I intelligent, but I\'m also very smart." \r\n - Coach Genghis, The Austere Academy');

//when all blanks are filled, 
// add 1 to wins, display quote and cover with matching index





//if run out of guesses before blanks are filled, 
// display message from Count Olaf, Olaf image and add 1 to losses

	var loseQuote = '<p>"You should have given up a long time ago, orphans"<br><em> -Count Olaf, <u>The Grim Grotto</u></em></p>';
	var loseImage = "../images/CountOlafSinister.jpg";


}









