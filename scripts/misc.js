if (document.images) {
homeout  = new Image
homeover = new Image
aboutusout  = new Image
aboutusover = new Image
clientsout  = new Image
clientsover = new Image
servicesout  = new Image
servicesover = new Image
productsout  = new Image
productsover = new Image
linksout  = new Image
linksover = new Image
policiesout  = new Image
policiesover = new Image
contactusout  = new Image
contactusover = new Image
logoout  = new Image
logoover = new Image
homeout.src="images/bhome1.png"
homeover.src="images/bhome2.png"
aboutusout.src="images/baboutus1.png"
aboutusover.src="images/baboutus2.png"
clientsout.src="images/bclients1.png"
clientsover.src="images/bclients2.png"
servicesout.src="images/bservices1.png"
servicesover.src="images/bservices2.png"
productsout.src="images/bproducts1.png"
productsover.src="images/bproducts2.png"
linksout.src="images/blinks1.png"
linksover.src="images/blinks2.png"
policiesout.src="images/bpolicies1.png"
policiesover.src="images/bpolicies2.png"
contactusout.src="images/bcontactus1.png"
contactusover.src="images/bcontactus2.png"
logoout.src="images/bellalogo1.png"
logoover.src="images/bellalogo2.png"
}
else {
homeout=""
homeover=""
aboutusout=""
aboutusover=""
clientsout=""
clientsover=""
servicesout=""
servicesover=""
productsout=""
productsover=""
linksout=""
linksover=""
policiesout=""
policiesover=""
contactusout=""
contactusover=""
logoout=""
logoover=""
}

var monthname = new Array ("January","February","March",
			   "April","May","Jun","July",
			   "August","September","October",
			   "November","December");

function showquote() {

	quote = new Array ("St Stephen is the patron saint of bricklayers",
		"Alexander Graham Bell never telephoned his wife or mother.  They were both deaf",
		"Travelling by airplane is the safest form of transportation",
		"The average 4 year old child asks over 400 questions each day",
		"In Japan, 20 percent of all publications sold are comic books",
		"Isaac Newton dropped out of school when he was a teenager",
		"About 200 babies are born worldwide every minute",
		"There are 10 kinds of people - those who understand binary numbers and those who don't",
		"The Roman emperor Caligula made his horse a senator",
		"The Great Wall of China is over 2,500 miles long and took 1,700 years to build",
		"The Titanic was travelling at 22 knots when she hit the iceberg",
		"The first people to arrive on Iceland were Irish explorers in 795 AD",
		"Leonardo da Vinci invented the scissors",
		"The Hundred Years War lasted for 116 years",
		"The University of Alaska stretches over 4 time zones",
		"The last word in the bible is Amen",
		"A cubic mile of fog is made up of less than 5 litres of water",
		"A jumbo jet uses over 16,000 litres of fuel to take off",
		"John D Rockefeller was the first billionaire in the US",
		"All snow crystals are hexagonal",
		"Approximately 98% of software in China is pirated",
		"Diamonds are composed of just one chemical element - carbon",
		"The billionth digit of PI is 9",
		"Soccer is played in more countries than any other sport",
		"There are 3 golf balls somewhere on the moon",
		"The 5 Olympic rings represent the continents",
		"In 1801, 20% of the people in the US were slaves",
		"Mr Mojo Risin is an anagram of Jim Morrison",
		"New Zealand was the first country to give women the vote in 1890",
		"Some species of starfish can have 50 appendages",
		"All of the clocks in the movie Pulp Fiction are stuck on 4:20",
		"Rice is the main food for half the people of the world",
		"A funambulist is a tightrope walker",
		"The letter J does not appear anywhere in the periodic table of the elements",
		"A group of crows is called a murder",
		"A Boeing 747's wingspan is longer than the Wright brothers' first flight ",
		"The plastic things on the ends of shoelaces are called aglets",
		"Karaoke means empty orchestra in Japanese",
		"An anthropophagist eats people",
		"There is cyanide in apple pips",
		"Donald Duck's middle name is Fauntleroy",
		"Karate actually originated in India",
		"Influenza caused over 20,000,000 deaths in 1918");

	now = new Date;

	ix = now.getDate()-1 + now.getMonth();

	if (ix > 42) {ix = ix - 43;}

	document.write (quote[ix]);

}

function showtip() {

tip = new Array ("Cut a chair in half, nail a plank between the two pieces and you have an attractive garden bench.",
		 "Thicken up runny low fat yoghurt by stirring in a spoonful of lard. Simple!",
		 "An elastic band with a dab of toothpaste makes an economical substitute for chewing gum.  And it's better for your teeth.",
		 "Next time you decorate, put up wallpaper with blue tack.  It's much easier and expensive wallpaper can easily be removed and taken with you when you move house.",
		 "Don't waste money buying expensive binoculars; simply stand closer to the object you wish to view.",
		 "Make motorists sweat for 10 days; sit inside a cardboard box at the side of the road and take flash photos of every car that drives past.",
		 "Keep your wife on her toes; nail the housekeeping money to the ceiling.",
		 "Paint the windows of your car black in order to enjoy the advantage of night time driving during the day.",
		 "Avoid being engaged in polite conversation with strangers on public transport by pretending to be drunk.",
		 "Convince your postman that you are more popular than you really are by sending yourself hundreds of Christmas cards each year.",
		 "Take your wheely bin to the supermarket with you so you can see which items you have recently run out of.",
		 "Save money on expensive hair gel; marmalade makes a cheap substitute - but beware of bees in summer.",
		 "Use talcum powder on cakes instead of icing sugar; it is not fattening and is much kinder to teeth.",
		 "Pop a few teabags in your hot water tank and you can make a hot cuppa any time by just turning on the tap.",
		 "Increase the life of your carpets by rolling them up and storing them in the garage.",
		 "Smokers.  Save $$$s every year on matches and lighters by simply lighting your cigarette with the butt of your previous one.",
		 "Indecisive about committing suicide?  Then hang yourself with a bungee rope.",
		 "Maggots make ideal sausages for mice.  Cook them over a cigarette lighter using a beer bottle top as a mouse mini frying pan.",
		 "A tub of margarine, sent via Interflora, is the perfect romantic gift for a girl who likes making sandwiches.",
		 "Drill a hole in the door of your refrigerator.  This will allow you to check that the light goes out when you close the door.",
		 "An old spectacle lens makes an ideal and easily fitted sunroof for a tortoise.",
		 "Dyslexics.  Try deliberately spelling words incorrectly; this way at least you have a chance of spelling them correctly.",
		 "It is easier to sharpen the end of a worm to a point using a pencil sharpener if you freeze the worm first.",
		 "Old contact lenses make ideal port holes for model boats.",
		 "Save on expensive washing powder by stealing clean washing from your neighbour's clothes line.",
		 "Ladies.  A toilet freshener in your handbag will help keep it smelling fresh.",
		 "Make everyone think that you wear glasses by making a mark on the bridge of your nose with a teaspoon every morning.",
		 "Prevent bees and butterflies stealing your pollen by enclosing each flower head in a plastic bag securely fastened around the stem with a clothes peg.",
		 "Don't throw away disposable razors.  Keep them in the kitchen; they are ideal for peeling spuds.",
		 "Don't answer your front door.  It could be burglars.",
		 "Clumsy? Avoid cutting yourself while slicing vegetables by getting someone else to hold them while you chop away.",
		 "Save on booze by drinking cold tea instead of whisky. The following morning you can create the effects of a hangover by drinking a thimble full of washing up liquid and banging your head repeatedly on the wall.",
		 "Recreate the fun of a visit to a public swimming pool in your own home by filling the bath with cold water, adding two bottles of bleach, then urinating into it, before jumping in.",
		 "X-Files fans. Create the effect of being abducted by aliens by drinking two bottles of vodka. You'll invariably wake up in a strange place the following morning, having had your memory mysteriously 'erased'.",
		 "A next door neighbour's car aerial, carefully folded, makes an ideal coat hanger in an emergency.",
		 "Give comics that 'Pulp Fiction' feel by reading the last frames of cartoons first, then reading the rest in a random order.",
		 "Heavy smokers. Don't throw away those filters from the end of your cigarettes. Save them up and within a few years you'll have enough to insulate your roof.",
		 "Mazda Astina drivers. Attach a lighted sparkler to the roof of your car before starting a long journey. You drive the things like dodgem cars anyway, so it may as well look like one.",
		 "A mouse trap, placed on top on of your alarm clock will prevent you from rolling over and going back to sleep.",
		 "Olympic athletes. Disguise the fact that you've taken anabolic steroids by running a bit slower.",
		 "Putting just the right amount of gin in your goldfish bowl makes the fishes' eyes bulge and cause them to swim in an amusing manner.",
		 "Stop your canary from flying around its cage by attaching bulldog clips to each of its wings.");

now = new Date;

ix = now.getDate()-1 + now.getMonth();

if (ix > 41) {ix = ix - 42;}

document.write (tip[ix]);

}


function ShowAS4801Window() {

	win = window.open("AS4801.html", "AS4801", 	"width=500,height=300,resizable");

}

function ShowISO9000Window() {

	win = window.open("ISO9000.html", "ISO9000", 	"width=600,height=600,resizable");

}

function CheckFields(myForm) {

	var ErrorMessage;
	var bError;
	var invalidChars = " /:,;";
	var bInvalidEmailAddress;
	var i;
	var atPos;
	var PeriodPos;

	ErrorMessage = "Please supply the following details:\n\n";
	bError = false;
	bInvalidEmailAddress = false;

	if (myForm.iname.value == "") {
		bError = true;
		ErrorMessage=ErrorMessage+"Name\n";
		myForm.iname.focus;
	}


	if (myForm.ipref.value == "") {
		bError = true;
		ErrorMessage=ErrorMessage+"Preferred Contact Method\n";
	}

	if (myForm.ienv.value == "") {
		bError = true;
		ErrorMessage=ErrorMessage+"Operational Environment\n";
	}

	if ((myForm.iinfo.value == "") && (myForm.itrain.value == "")) {
		bError = true;
		ErrorMessage=ErrorMessage+"Type of information required\n";
	}


	if ((myForm.ipref.value == "Phone") && (myForm.iphone.value == "")) {
		bError = true;
		ErrorMessage=ErrorMessage+"Phone number\n";
	}

	if ((myForm.ipref.value == "Email") && (myForm.iemail.value == "")) {
		bError = true;
		ErrorMessage=ErrorMessage+"Email address\n";
	}

	if ((myForm.ipref.value == "Fax") && (myForm.iphone.ifax == "")) {
		bError = true;
		ErrorMessage=ErrorMessage+"Fax number\n";
	}

	if ((myForm.ipref.value == "Mobile") && (myForm.imobile.value == "")) {
		bError = true;
		ErrorMessage=ErrorMessage+"Mobile phone number\n";
	}

	if (myForm.iemail.value != "") {
		for (i=0; i<invalidChars.length; i++) {
			badChar = invalidChars.charAt(i);
			if (myForm.iemail.value.indexOf(badChar,0) > -1) {
				bInvalidEmailAddress = true;
			}
		}

		atPos = myForm.iemail.value.indexOf("@",1);
		if (atPos == -1) {
			bInvalidEmailAddress = true;
		}

		if (myForm.iemail.value.indexOf("@",atPos+1) > -1) {
			bInvalidEmailAddress = true;
		}

		periodPos = myForm.iemail.value.indexOf(".",atPos)
		if (periodPos == -1) {
			bInvalidEmailAddress = true;
		}

		if (periodPos+3 > myForm.iemail.value.length)	{
			bInvalidEmailAddress = true;
		} 

		if (bInvalidEmailAddress) {
			ErrorMessage=ErrorMessage+"A valid email address\n";
		}
	}

	if ((bError) || (bInvalidEmailAddress)) {
		alert(ErrorMessage);
		myForm.iname.focus();
		return false;
	}
}
