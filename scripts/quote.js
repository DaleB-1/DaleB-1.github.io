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
