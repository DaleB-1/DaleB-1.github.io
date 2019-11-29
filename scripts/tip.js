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
